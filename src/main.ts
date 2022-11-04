import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.TZ = `-03:00`//ingresa zona horaria
  app.useGlobalPipes(new ValidationPipe())//crea una validacion de tuberias
  app.enableCors()
  await app.listen(2500);
}
bootstrap();
