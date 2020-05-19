import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, Form, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

function pd(control: FormControl): { [s: string]: boolean }
{
    if (!control.value.match(/^a/))
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
    onSubmit(value: any)
    {
        console.log(value);
    }
    constructor(private fb: FormBuilder,private authService: AuthService)
    {
        this.a1 = 0;
        this.a2 = 0;
        this.myForm = this.fb.group({
            'userName': ['asdasd', Validators.compose([Validators.required, pd])],
            'password': ['asdasd', Validators.compose([Validators.required, Validators.minLength(5)])]
        });

        this.userName = this.myForm.controls['userName'];
        this.password = this.myForm.controls['password'];
        this.name$ = this.userName.valueChanges;
        this.userName.valueChanges.subscribe(val =>
        {
            console.log(val);
        });
    }

    login()
    {
        this.authService.login();
    }
}
