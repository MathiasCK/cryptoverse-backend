import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ExchangesController } from './exchanges.controller';
import { ExchangesService } from './exchanges.service';

@Module({
  imports: [ConfigModule],
  controllers: [ExchangesController],
  providers: [ExchangesService],
})
export class ExchangesModule {}
