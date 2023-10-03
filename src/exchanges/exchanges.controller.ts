import { Controller, Get, Req, Res } from '@nestjs/common';
import { ExchangesService } from './exchanges.service';

@Controller('api/exchanges')
export class ExchangesController {
  constructor(private exchangesService: ExchangesService) {}

  @Get()
  async getExchanges(@Req() req, @Res() res) {
    return await this.exchangesService.getExchanges(req, res);
  }
}
