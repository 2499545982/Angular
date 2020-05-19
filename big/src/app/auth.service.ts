import { Injectable } from "@angular/core";
@Injectable()
export class AuthService
{
    isLoggedIn = false;
    login(val: any) :boolean
    {
        if (val.succ === 'true')
        {
            this.isLoggedIn = true;
            alert('登陆成功!');
            return true;
        }
        else
        {
            this.logout();
            alert('账号或密码错误!');
            return false;
        }
    }
    logout()
    {
        this.isLoggedIn = false;
    }
    loggedIn()
    {
        return this.isLoggedIn;
    }
}