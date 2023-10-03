import { Module } from '@nestjs/common';
import { CoinsModule } from './coins';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news';
import { ExchangesModule } from './exchanges';

@Module({
  imports: [ConfigModule.forRoot(), CoinsModule, NewsModule, ExchangesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
