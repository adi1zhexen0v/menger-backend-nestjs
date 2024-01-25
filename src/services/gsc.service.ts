import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';

const { GSC_PROJECT_ID, GSC_PRIVATE_KEY_ID, GSC_PRIVATE_KEY, GSC_CLIENT_EMAIL, GSC_CLIENT_ID, GCS_BUCKET_NAME } = process.env;

@Injectable()
export class GoogleCloudStorageService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    const privateKey = GSC_PRIVATE_KEY.replace(/\\n/g, '\n');

    this.storage = new Storage({
      credentials: {
        private_key_id: GSC_PRIVATE_KEY_ID,
        private_key: privateKey,
        client_email: GSC_CLIENT_EMAIL,
        client_id: GSC_CLIENT_ID
      },
      projectId: GSC_PROJECT_ID,
    });

    this.bucketName = GCS_BUCKET_NAME;
  }

  async uploadFile(file: Express.Multer.File, folderName: string): Promise<string> {
    const bucket = this.storage.bucket(this.bucketName);
  
    const fileExtension = file.originalname.split('.').pop();
    const fileName = `${folderName}/${uuidv4()}.${fileExtension}`;
    const blob = bucket.file(fileName);
    const blobStream = blob.createWriteStream();
  
    await new Promise<void>((resolve, reject) => {
      blobStream.on('error', err => reject(err));
      blobStream.on('finish', resolve);
      blobStream.end(file.buffer);
    });
  
    return `https://storage.googleapis.com/${bucket.name}/${encodeURIComponent(fileName)}`;
  }
}
