import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article) private articleRepository: Repository<Article>,
    ) { }

    async createArticle(article: Article) {
        await this.articleRepository.save(article);
    }

    async getArticles(article: Article): Promise<Article[]> {
        return await this.articleRepository.find();
    }

    async getArticle(_id: number): Promise<Article[]> {
        return await this.articleRepository.find({
            select: ['title', 'description', 'updateDate'],
            where: [{ 'id': _id }],
        });
    }

    async updateArticle(article: Article) {
        this.articleRepository.save(article);
    }

    async deleteArticle(article: Article) {
        this.articleRepository.delete(article);
    }
}
