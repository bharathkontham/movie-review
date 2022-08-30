import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const config = new DocumentBuilder()
    .setTitle('Movie Review Service')
    .setDescription('Movie Review Service APIs')
    .setVersion('1.0.0')
    .addTag('Film')
    .addBearerAuth({
      name: 'Authorization',
      type: 'http',
    })
    .build();
  const assetDocument = SwaggerModule.createDocument(app, config, {
    include: [AppModule],
  });
  SwaggerModule.setup('docs', app, assetDocument);
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
