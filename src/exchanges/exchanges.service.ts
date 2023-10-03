import {
  BadRequestException,
  Injectable,
  Logger,
  Req,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

const baseurl = 'https://api.coinranking.com/v2';

@Injectable()
export class ExchangesService {
  constructor(private configService: ConfigService) {}

  private readonly logger = new Logger(ExchangesService.name);
  private readonly coinToken = this.configService.get('COIN_ACCESS_TOKEN');

  async getExchanges(@Req() req, @Res() res) {
    try {
      const options = {
        method: 'GET',
        url: `${baseurl}/exchanges`,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': this.coinToken,
        },
      };
      this.logger.debug(`Fetching exchanges...`);

      const { data } = await axios(options);

      this.logger.log(`Succesfully fetched exchanges`);

      res.setHeader('Access-Control-Allow-Origin', '*').json(data);
    } catch (e) {
      const msg = `There was an error fetching exchanges: ${e.message}`;

      this.logger.error(msg);
      throw new BadRequestException(msg);
    }
  }
}
