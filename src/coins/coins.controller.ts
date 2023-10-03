import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Controller('api/coins')
export class CoinsController {
  constructor(private coinsService: CoinsService) {}

  @Get()
  async getCoins(@Req() req, @Res() res) {
    return await this.coinsService.getCoins(req, res);
  }

  @Get('/:id')
  async getCoin(@Res() res, @Param('id') id: string) {
    return await this.coinsService.getCoin(res, id);
  }
}
