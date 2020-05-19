import { Component } from "@angular/core";
import { TestAService } from './test.service';
@Component({
    templateUrl: './sub.component.html',
    styleUrls: ['./sub.component.css'],
    selector: 'app-sub',
    providers: [TestAService]
})
export class SubComponent
{
    title: string;
    constructor(private aService: TestAService)
    {
        this.aService.setTitle('子组件');
        this.title = this.aService.getTitle();
    }
}
