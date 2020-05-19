import { Component } from '@angular/core';
import { TestAService } from './test.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    title = 'ex09';

    constructor(private aService: TestAService)
    {
        this.aService.setTitle('父组件');
        this.title = this.aService.getTitle();
    }
    refresh()
    {
        this.title=this.aService.getTitle();
    }

}
