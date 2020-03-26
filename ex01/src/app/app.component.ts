import { Component } from '@angular/core';
import { Article } from './assets';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    articles: Article[];
    constructor()
    {
        this.articles = [
            new Article('Small Wang', 'https://1199911.xyz', 9999),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean
    {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        const obj=new Article(title.value,link.value,0);
        this.articles.push(obj);
        return false;
    }
}
