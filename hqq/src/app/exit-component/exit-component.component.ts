import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-exit-component',
  templateUrl: './exit-component.component.html',
  styleUrls: ['./exit-component.component.css']
})
export class ExitComponentComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }
  logout() { 
    this.authService.logout(); 
  }
}
