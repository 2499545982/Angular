import { Injectable } from '@angular/core';
import { TestBService } from './test.servic';

@Injectable()
export class TestAService
{
    title: string;
    constructor(b: TestBService)
    {
        this.title = 'Hello, A';
    }
    getTitle()
    {
        return this.title;
    }
    setTitle(t: string)
    {
        this.title = t;
    }
}
