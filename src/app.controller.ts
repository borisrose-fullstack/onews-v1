import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import ARTICLES from './api/articles/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return {
      articles: ARTICLES,
      footerNavBarItems: ['plan du site', 'mentions légales', 'contact'],
    };
  }
}
