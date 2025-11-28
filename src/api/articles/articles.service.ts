import { Injectable } from '@nestjs/common';
import Article from './article.interface';
import ARTICLES from './articles';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = ARTICLES;

  fingOne(id: number): Article | undefined {
    return this.articles.find((el) => el.id == id);
  }

  findAll(): Article[] {
    return this.articles;
  }
}
