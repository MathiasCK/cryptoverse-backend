import {
  BadRequestException,
  Injectable,
  Logger,
  Req,
  Res,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

import { Coin, Coins } from "../types";

const baseurl = "https://api.coinranking.com/v2";

@Injectable()
export class CoinsService {
  constructor(private configService: ConfigService) {}

  private readonly logger = new Logger(CoinsService.name);
  private readonly coinToken = this.configService.get("COIN_ACCESS_TOKEN");

  async getCoins(@Req() req, @Res() res) {
    try {
      const limit = req.query?.limit || 10;

      const options = {
        method: "GET",
        url: `${baseurl}/coins`,
        params: {
          limit,
        },
        headers: {
          "Content-Type": "application/json",
          "x-access-token": this.coinToken,
        },
      };

      this.logger.debug(`Fetching ${limit} coins`);

      const response = await axios(options);
      const coins: Coins = response.data.data.coins;

      this.logger.log(`Succesfully fetched ${limit} coins`);

      res.setHeader("Access-Control-Allow-Origin", "*").json({
        stats: response.data.data.stats,
        coins,
      });
    } catch (e) {
      const msg = `There was an error fetching coins: ${e.message}`;

      this.logger.error(msg);
      throw new BadRequestException(msg);
    }
  }

  async getCoin(@Res() res, id: string) {
    try {
      const options = {
        method: "GET",
        url: `${baseurl}/coin/${id}`,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": this.coinToken,
        },
      };

      this.logger.debug(`Attempting to fetch coin "${id}"`);

      const response = await axios(options);
      const coin: Coin = response.data.data.coin;

      this.logger.log(`Succesfully fetched coin "${id}"`);
      return res.json(coin);
    } catch (e) {
      const msg = `There was an error fetching coin "${id}" - ${e.message}`;

      this.logger.error(msg);
      throw new BadRequestException(msg);
    }
  }
}
