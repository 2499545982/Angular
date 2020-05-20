import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, Form, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router'
function pd(control: FormControl): { [s: string]: boolean }
{
    if (!control.value.match(/[a-zA-Z]/))
    {
        return { invalidUser: true };
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit
{
    ngOnInit(): void
    {
    }
    title = 'ex06';
    myForm: FormGroup;
    userName: AbstractControl;
    name$: Observable<string>;
    password: AbstractControl;
    a1: number;
    a2: number;
    baseUrl = 'http://127.0.0.1:8080/';
    onSubmit(value: any)
    {
        console.log(value);
    }
    constructor(private fb: FormBuilder, private authService: AuthService, private http: HttpClient, private router: Router)
    {
        this.a1 = 0;
        this.a2 = 0;
        this.myForm = this.fb.group({
            'userName': ['admin', Validators.compose([Validators.required, pd])],
            'password': ['admin', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.userName = this.myForm.controls['userName'];
        this.password = this.myForm.controls['password'];
        this.name$ = this.userName.valueChanges;
        this.userName.valueChanges.subscribe(val =>
        {
            console.log(val);
        });
    }

    login(): void
    {
        console.log(this.myForm.value);

        this.http.post(this.baseUrl + 'check', this.myForm.value).subscribe(
            (val: any) =>
            {
                // console.log(val.succ === 'true');
                // this.router.navigate(['/management'], { replaceUrl: val.succ === 'true' });
                // if (val.succ === 'true')
                // {
                //     alert('登陆成功!');
                // }
                // else
                // {
                //     alert('账号或密码错误!');
                //     return;
                // }
                if (this.authService.login(val))
                    this.router.navigate(['./management']);
            });
    }
}
