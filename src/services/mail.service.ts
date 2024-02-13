import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as ejs from 'ejs';
import * as path from 'path';
import { UserEntity } from 'src/resources/users/entities/user.entity';

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

  async sendActivationCode(to: string, code: string, name: string) {
    const templatePath = path.join(
      __dirname,
      '../templates/activationCode.ejs'
    );
    const html = await ejs.renderFile(templatePath, { name, code });

    const mailOptions = {
      from: `"Menger" <${NODEMAILER_EMAIL}>`,
      to: to,
      subject: 'Сіздің растау кодыңыз',
      html,
    };

    return this.transporter.sendMail(mailOptions);
  }

  async sendUserCredentials(to: string, name: string, organization: string, password: string) {
    const templatePath = path.join(
      __dirname,
      '../templates/welcomeUser.ejs'
    );
    const html = await ejs.renderFile(templatePath, { name, organization, email: to, password });

    const mailOptions = {
      from: `"Menger" <${NODEMAILER_EMAIL}>`,
      to: to,
      subject: 'Сіздің растау кодыңыз',
      html,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
