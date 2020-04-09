import { Component, Output, EventEmitter } from "@angular/core";
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
    @Output() productselected: EventEmitter<Product>;
    current: Product=null;

    constructor()
    {
        this.productselected = new EventEmitter();
    }
    clicked(product: Product)
    {
        this.current = product;
        console.log(product.name + "---");
        this.productselected.emit(product);
    }

    isSelect(product: Product)
    {
        if (this.current === null || product === null)
        {
            return false;
        }
        return product.sku === this.current.sku;
    }

}