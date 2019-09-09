import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticlesController {

  constructor(private service: ArticlesService) { }

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.service.createArticle(article);
  }

  @Put()
  update(@Body() article: Article) {
    return this.service.updateArticle(article);
  }

  @Delete(':id')
  deleteArticle(@Param() params) {
    return this.service.deleteArticle(params.id);
  }

}
