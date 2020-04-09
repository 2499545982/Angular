import { Component, Input } from "@angular/core";
@Component({
    selector: 'products-part',
    template: `
        <span *ngFor='let item of department;let i = index '>
            <a href="#">{{item}}</a>
            <span>{{i < (department.length-1) ? '>' : ''}}</span> 
        </span>
    `
})
export class Productspart
{
    @Input() department: string[];
    constructor()
    {

    }
}