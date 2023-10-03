import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';

@Module({
  imports: [ConfigModule],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
