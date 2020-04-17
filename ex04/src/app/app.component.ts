import { Component } from '@angular/core';
import { MENUS, PRODUCTS } from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    menus = MENUS;
    products = PRODUCTS;
    cl(i: number)
    {
        console.log(i);
        if (i === 0) return ['btn', 'btn-lg', 'btn-block', 'btn-outline-primary'];
        return ['btn', 'btn-lg', 'btn-block', 'btn-primary']; //
    }
}
