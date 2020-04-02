import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    title:string;
    img:string;
    a:string;
    constructor()
    {
        this.a='https://1199911.xyz';
        this.title=' ex02 ';
        this.img='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1508309517,2452018733&fm=26&gp=0.jpg';
    }
    click()
    {
        console.log('asddsadasdasdsa');
    }
    input(e:Event)
    {
        this.title=(<HTMLInputElement>e.target).value;
    }
}
