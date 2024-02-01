import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASSWORD,
      },
    });
  }

  async sendActivationCode(to: string, code: string) {
    const mailOptions = {
      from: `"Menger" <${NODEMAILER_EMAIL}>`,
      to: to,
      subject: 'Сіздің растау кодыңыз',
      text: code,
      html: `<h1>${code}</h1>`, 
    };

    return this.transporter.sendMail(mailOptions);
  }
}
