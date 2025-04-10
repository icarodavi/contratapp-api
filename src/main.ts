import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ThrottlerModule } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Licitações')
    .setDescription('API para gerenciamento de licitações públicas')
    .setVersion('1.0')
    .addTag('usuarios')
    .addTag('editais')
    .addTag('disputas')
    .addTag('licitantes')
    .addTag('lances')
    .addTag('documentos')
    .addTag('chat')
    .addTag('sessoes')
    .addTag('logs')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);
  console.log(`Server is running on port ${process.env.PORT ?? 3001}`);
}
bootstrap();
