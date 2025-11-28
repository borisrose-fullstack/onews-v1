import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './api/articles/articles.controller';
import { ArticlesService } from './api/articles/articles.service';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
