import { Controller, Get, Req, Res } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('/api/news/search')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get()
  async getNews(@Req() req, @Res() res) {
    return await this.newsService.getNews(req, res);
  }
}
