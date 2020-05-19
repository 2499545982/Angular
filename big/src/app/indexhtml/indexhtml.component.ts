import { Component, OnInit } from '@angular/core';
import { MENUS, PRODUCTS } from './data';

@Component({
    selector: 'app-indexhtml',
    templateUrl: './indexhtml.component.html',
    styleUrls: ['./indexhtml.component.css']
})
export class IndexhtmlComponent implements OnInit
{

    constructor() { }

    ngOnInit(): void
    {

    }
    menus = MENUS;
    products = PRODUCTS;
    cl(i: number)
    {
        console.log(i);
        if (i === 0) return ['btn', 'btn-lg', 'btn-block', 'btn-outline-primary'];
        return ['btn', 'btn-lg', 'btn-block', 'btn-primary']; //
    }

}
