import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'student',
    inputs: ['name'],
    outputs:['select'],
    template: `<p (click)="click()">
        {{name}}
    </p>`,
})

export class Student 
{
    name: string;
    @Output() select: EventEmitter<string>;
    constructor()
    {
        this.select = new EventEmitter();
    }
    click()
    {
        this.select.emit(this.name);
    }
}