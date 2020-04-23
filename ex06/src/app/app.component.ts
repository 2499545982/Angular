import { Component } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, Form, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


function pd(control: FormControl): { [s: string]: boolean }
{
    if (!control.value.match(/^a/))
    {
        return { invalidUser: true };
    }
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent
{
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
    constructor(private fb: FormBuilder)
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
}
