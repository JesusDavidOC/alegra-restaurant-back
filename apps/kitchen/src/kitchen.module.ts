import { Module } from '@nestjs/common';
import { KitchenController } from './kitchen.controller';
import { KitchenService } from './kitchen.service';

@Module({
  imports: [],
  controllers: [KitchenController],
  providers: [KitchenService],
})
export class KitchenModule {}
