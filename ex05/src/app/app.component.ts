import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    title = 'ex05';
    fenshu = 70;
    show = false;
    fontSize: string;
    color: string;
    isB = true;
    obj = {
        B: this.isB,
        P: false,
        R: true
    }

    city = ['111', '222', '333'];
    people = [];
    peopleByCity = [];

    constructor()
    {
        this.people = [
            { name: 'Anderson', age: 35, city: 'Sao Paulo' },
            { name: 'John', age: 12, city: 'Miami' },
            { name: 'Peter', age: 22, city: 'New York' }
        ];

        this.peopleByCity = [
            {
                city: 'Miami',
                people: [
                    { name: 'John', age: 12 },
                    { name: 'Angel', age: 22 }
                ]
            },
            {
                city: 'Sao Paulo',
                people: [
                    { name: 'Anderson', age: 35 },
                    { name: 'Felipe', age: 36 }
                ]
            }
        ];
    }

    isclick()
    {
        this.isB = !this.isB;
    }
    click()
    {
        this.show = !this.show;
        return;
    }

    cl()
    {
        return Math.floor(this.fenshu / 10);
    }
    input(evt: Event)
    {
        this.fenshu = Number((<HTMLInputElement>evt.target).value);
    }

    set(color: string, fontSize: string)
    {
        this.color = color;
        this.fontSize = fontSize;
        console.log(color + " " + fontSize);
    }



}
