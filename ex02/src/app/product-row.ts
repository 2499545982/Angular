import { Component } from "@angular/core";
import { Product } from './product';
@Component({
    selector: 'products-row',
    templateUrl: 'products-row.html',
    styleUrls: ['products-row.css'],
    inputs: ['product'],
    host: { class: 'row' }
})
export class Productsrow
{
    product: Product;
    constructor()
    {

    }
}