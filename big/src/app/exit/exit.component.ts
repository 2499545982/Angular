import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-exit',
    templateUrl: './exit.component.html',
    styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit
{

    constructor(private authService: AuthService) { }

    ngOnInit(): void
    {
    }
    logout()
    {
        this.authService.logout();
    }

}
