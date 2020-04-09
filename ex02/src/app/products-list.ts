import { Component } from "@angular/core";
import { Product } from './product';
@Component({
    selector: 'products-list',
    templateUrl: 'products-list.html',
    styleUrls: ['products-list.css'],
    inputs: ['productslist']
})
export class Productslist
{
    productslist: Product[];
    constructor()
    {

    }
}