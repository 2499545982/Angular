import { Component, Input } from "@angular/core";
@Component({
    selector: 'products-image',
    template: `
    <img [src]="url" class="image-thumbnail">
    `
})
export class Productsimage
{
    @Input() url: string
    constructor()
    {

    }
}