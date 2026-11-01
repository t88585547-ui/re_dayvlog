import 'reflect-metadata';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = Number(process.env.PORT || 5000);
  await app.listen(port);
  console.log(`NestJS server running on http://localhost:${port}`);
}

void bootstrap();
