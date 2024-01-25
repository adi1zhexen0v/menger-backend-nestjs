import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';

const { GOOGLE_CLOUD_PROJECT_ID, GOOGLE_APPLICATION_CREDENTIALS, GOOGLE_CLOUD_STORAGE_BUCKET } = process.env;

@Injectable()
export class GoogleCloudStorageService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    this.storage = new Storage({
      projectId: GOOGLE_CLOUD_PROJECT_ID,
      keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
    });
    this.bucketName = GOOGLE_CLOUD_STORAGE_BUCKET;
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
