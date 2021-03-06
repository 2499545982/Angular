import { Component, OnInit } from '@angular/core';
import { ExitComponent } from '../exit/exit.component';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../source/user';
@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit
{
    exit: ExitComponent;
    myForm: FormGroup;
    userName: AbstractControl;
    id: AbstractControl;
    password: AbstractControl;
    users$: Observable<User>;
    baseUrl = 'http://127.0.0.1:8080/';
    currentUser: User;

    constructor(private fb: FormBuilder, private httpClient: HttpClient)
    {
        this.myForm = this.fb.group({
            'userName': [''],
            'password': [''],
            'id': ['']
        });

        this.userName = this.myForm.controls['userName'];
        this.id = this.myForm.controls['id'];
        this.password = this.myForm.controls['password'];
    }

    ngOnInit(): void
    {
        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
    }

    search()
    {
        if (this.id.value)
        {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users/' + this.id.value);
        } else
        {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
        }
        this.ngOnInit();
        this.reset();
        // location.reload();
    }

    add()
    {
        console.log(this.myForm.value);
        this.httpClient.post(this.baseUrl + 'user', this.myForm.value).subscribe(
            (val: any) =>
            {
                if (val.succ)
                {
                    alert('添加成功!');
                    this.reset();
                    this.ngOnInit();
                }
            });
        // location.reload();
    }

    select(u: User)
    {
        this.currentUser = u;
        this.myForm.setValue(this.currentUser);
    }

    delete()
    {
        if (!this.currentUser)
        {
            alert('必须选择用户！');
        }
        else
        {
            this.httpClient.delete(this.baseUrl + 'user/' + this.currentUser.id).subscribe(
                (val: any) =>
                {
                    if (val.succ)
                    {
                        alert('删除成功！');
                        this.ngOnInit();
                        this.reset();
                    }
                });
        }
        // location.reload();
    }

    update()
    {
        if (!this.currentUser)
        {
            alert('必须选择用户！');
        }
        else
        {
            this.httpClient.put(this.baseUrl + 'user', this.myForm.value).subscribe(
                (val: any) =>
                {
                    if (val.succ)
                    {
                        alert('修改成功！');
                        this.ngOnInit();
                        this.reset();
                    }
                });
        }
        // location.reload();
    }

    reset()
    {
        this.myForm.controls['id'].reset();
        this.myForm.controls['userName'].reset();
        this.myForm.controls['password'].reset();
    }

    logout()
    {
        this.exit.logout();
    }

}
