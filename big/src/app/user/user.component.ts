import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../source/user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
{
    myForm: FormGroup;
    userName: AbstractControl;
    id: AbstractControl;
    password: AbstractControl;
    users$: Observable<User>;
    baseUrl = 'http://127.0.0.1:8080/';
    currentUser: User;
    modalRef: BsModalRef;
    constructor(private fb: FormBuilder, private httpClient: HttpClient, private modalService: BsModalService)
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
        this.reset();
        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin');
    }

    pd(): any
    {
        this.userName = this.myForm.controls['userName'];
        this.password = this.myForm.controls['password'];
        try
        {
            if (this.userName.value == '')
            {
                alert('用户名不允许为空');
                return false;
            }
            if (this.password.value == '')
            {
                alert('密码不允许为空');
                return false;
            }
            if (this.password.value.length < 4)
            {
                alert('密码长度不能小于4位');
                return false;
            }
        } catch (error)
        {
            alert('一般错误');
            return false;
        }
        return true;
    }

    search()
    {
        console.log(this.myForm.value);
        if (this.id.value)
        {
            this.httpClient.post(this.baseUrl + 'admin', this.id.value).subscribe(
                (val: any) =>
                {
                    console.log(val);
                    if (!val.succ)
                    {
                        alert('id不存在!');
                    } else
                        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin/' + this.id.value);
                });
        } else
        {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'admin');
        }
        this.reset();
    }

    add()
    {
        console.log(this.myForm.value);
        if (this.pd())
            this.httpClient.post(this.baseUrl + 'adminadd', this.myForm.value).subscribe(
                (val: any) =>
                {
                    if (val.succ)
                    {
                        alert('添加成功!');
                        this.modalRef.hide();
                    }
                    this.ngOnInit();
                });
    }

    select(u: User)
    {
        this.currentUser = u;
        this.myForm.setValue(this.currentUser);
    }

    delete(id: number)
    {
        this.httpClient.delete(this.baseUrl + 'admin/' + id).subscribe(
            (val: any) =>
            {
                if (val.succ)
                {
                    alert('删除成功！');
                }
                this.ngOnInit();
            });
    }

    update()
    {
        if (!this.currentUser)
        {
            alert('必须选择用户！');
        }
        else
        {
            if (this.pd())
                this.httpClient.put(this.baseUrl + 'admin', this.myForm.value).subscribe(
                    (val: any) =>
                    {
                        if (val.succ)
                        {
                            alert('修改成功!');
                            this.modalRef.hide();
                        } else
                        {
                            alert('修改失败!');
                        }
                        this.ngOnInit();
                    });
        }
    }

    reset(): void
    {
        try
        {
            this.myForm.controls['id'].reset();
            this.myForm.controls['userName'].reset();
            this.myForm.controls['password'].reset();
        } catch (error)
        {
        }
    }

    openModal(template: TemplateRef<any>)
    {
        this.modalRef = this.modalService.show(template);
    }



}
