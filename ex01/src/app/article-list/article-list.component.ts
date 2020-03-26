import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../assets';
@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit
{
    @Input() articles: Article[];
    constructor()
    {
        
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean
    {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
        return false;
    }
    ngOnInit(): void
    {
    }

    sortedArticles(): Article[]
    {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }

}
