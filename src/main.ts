import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3000,
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(3000);

  /* If I create a dedicated MS App global Interceptor will be executed
  const msApp = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3000,
    },
  });

  await msApp.listenAsync(); */
}
bootstrap();
