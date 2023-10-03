import {
  BadRequestException,
  Injectable,
  Logger,
  Req,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/search';

@Injectable()
export class NewsService {
  constructor(private configService: ConfigService) {}

  private readonly logger = new Logger(NewsService.name);
  private readonly newsToken = this.configService.get('NEWS_ACCESS_TOKEN');

  async getNews(@Req() req, @Res() res) {
    try {
      const count = req.query?.count || 10;

      const options = {
        method: 'GET',
        url: baseUrl,
        params: {
          q: 'Cryptocurrency',
          freshness: 'Day',
          textFormat: 'Raw',
          safeSearch: 'Off',
          count,
        },
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': this.newsToken,
        },
      };

      this.logger.debug(`Fetching news...`);

      const { data } = await axios(options);

      this.logger.log(`Succesfully fetched news`);

      res.setHeader('Access-Control-Allow-Origin', '*').json(data);
    } catch (e) {
      const msg = `There was an error fetching news: ${e.message}`;

      this.logger.error(msg);
      throw new BadRequestException(msg);
    }
  }
}
