import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private authService: AuthService) {

    }
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
        console.log(route);
        if (!this.authService.loggedIn()) {
            alert('请先登录!');
        }
        return this.authService.loggedIn();
    }
}

