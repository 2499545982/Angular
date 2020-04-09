import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'inventory-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    products: Product[];
    constructor()
    {
        this.products = [
            new Product(
                'MYSHOES',
                'Black Running Shoes',
                '../assets/image/products/black-shoes.jpg',
                ['Men', 'Shoes', 'Running Shoes'],
                109.99),
            new Product(
                'NEATOJACKET',
                'Blue Jacket',
                '../assets/image/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT',
                'A Nice Black Hat',
                '../assets/image/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)
        ];
    }
    onSelect(product:Product)
    {
        console.log(product.name+"选中");
    }
}
