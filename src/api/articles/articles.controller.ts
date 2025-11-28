import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { ArticlesService } from './articles.service';
import Article from './article.interface';

@Controller('api/articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get(':id')
  findOne(
    @Res() res: Response,
    @Param() params: { id: number },
  ):
    | { article: Article }
    | { message: string }
    | Response<any, Record<string, any>> {
    console.log(params.id);
    const article = this.articlesService.fingOne(params.id);
    if (!article) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: `article with id ${params.id} not found` });
    }
    return { article: article };
  }

  @Get()
  @HttpCode(200)
  findAll(
    @Req() request: Request,
    @Query() query: any,
  ): {
    articles: Array<{
      id: number;
      author: { fullName: string; photoUrl: string };
      tags: string[];
      publishedAt: string;
      title: string;
      content: string;
    }>;
  } {
    //@Query(key?: string)
    //@Param(key?: string)
    console.log('query', query);
    console.log('request.url', request.url);
    return { articles: this.articlesService.findAll() };
  }
}
