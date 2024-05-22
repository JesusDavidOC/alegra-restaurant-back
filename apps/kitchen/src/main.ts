import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KitchenModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
