import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    template: `
        <student [name]="students[0]" (select)="onselect($event)"></student>
    `
})

export class Studentlist 
{
    students = ['asdasfsdgasfd', 'dfgh', 'wer'];
    constructor() { }
    onselect(name: string)
    {
        console.log('选中'+name);
    }
}