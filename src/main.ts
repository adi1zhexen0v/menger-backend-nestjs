import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/swagger/swagger.config';
import 'reflect-metadata';

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: false});
  app.enableCors({ credentials: true, origin: true });
  setupSwagger(app);
  await app.listen(PORT || 4000);
}
bootstrap();
