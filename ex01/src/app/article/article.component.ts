import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../assets';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    host: {
        class: 'row'
    }
})
export class ArticleComponent implements OnInit
{
    @Input() article: Article
    constructor()
    {
        // this.article = new Article('SmallWang', 'https://1199911.xyz', 3);
    }

    ngOnInit(): void
    {
    }

    voteUp()
    {
        this.article.voteUp();
    }
    voteDown()
    {
        this.article.voteDown();
    }

}
