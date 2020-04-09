import { Component, Input } from "@angular/core";
@Component({
    selector: 'products-price',
    template: `
        \${{price}}
    `
})
export class Productsprice
{
    @Input() price: number;
    constructor()
    {

    }
}   