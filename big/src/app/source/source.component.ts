import { Component, OnInit, TemplateRef } from '@angular/core';
import { ExitComponent } from '../exit/exit.component';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'app-source',
    templateUrl: './source.component.html',
    styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit
{

    exit: ExitComponent;
    myForm: FormGroup;
    userName: AbstractControl;
    id: AbstractControl;
    source: AbstractControl;
    users$: Observable<User>;
    baseUrl = 'http://127.0.0.1:8080/';
    currentUser: User;
    modalRef: BsModalRef;
    constructor(private fb: FormBuilder, private httpClient: HttpClient, private modalService: BsModalService)
    {
        this.myForm = this.fb.group({
            'userName': [''],
            'source': [''],
            'id': ['']
        });

        this.userName = this.myForm.controls['userName'];
        this.id = this.myForm.controls['id'];
        this.source = this.myForm.controls['source'];
    }

    ngOnInit(): void
    {
        this.reset();
        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
    }

    pd(): any
    {
        this.id = this.myForm.controls['id'];
        this.userName = this.myForm.controls['userName'];
        this.source = this.myForm.controls['source'];
        console.log(this.id.value);
        try
        {
            if (this.id.value == '' || this.id.value == null)
            {
                alert('id不允许为空');
                return false;
            }
            if (this.userName.value == '')
            {
                alert('学生姓名不允许为空');
                return false;
            }
            if ((this.source.value > 100 || this.source.value < 0) && this.source.value != '')
            {
                alert('成绩只能在0-100之间');
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
        if (this.id.value)
        {
            this.httpClient.post(this.baseUrl + 'users/', this.id.value).subscribe(
                (val: any) =>
                {
                    console.log(val);
                    if (!val.succ)
                    {
                        alert('id不存在!');
                    } else
                        this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users/' + this.id.value);
                });
        } else
        {
            this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'users');
        }
    }

    add()
    {
        if (this.pd())
            this.httpClient.post(this.baseUrl + 'user', this.myForm.value).subscribe(
                (val: any) =>
                {
                    if (val.succ)
                    {
                        alert('添加成功!');
                        this.modalRef.hide();
                        this.ngOnInit();
                    }
                });
    }

    select(u: User)
    {
        this.currentUser = u;
        this.myForm.setValue(this.currentUser);
    }

    delete(id: number)
    {
        console.log(id);
        this.httpClient.delete(this.baseUrl + 'user/' + id).subscribe(
            (val: any) =>
            {
                console.log(val);
                if (val.succ)
                {
                    alert('删除成功！');
                    this.ngOnInit();
                }
            }
        )
    }

    update()
    {
        if (!this.currentUser)
        {
            alert('必须选择用户!');
        }
        else
        {
            if (this.pd())
                this.httpClient.put(this.baseUrl + 'user', this.myForm.value).subscribe(
                    (val: any) =>
                    {
                        if (val.succ)
                        {
                            alert('修改成功!');
                            this.modalRef.hide();
                            this.ngOnInit();
                        }
                    }
                );
        }
    }

    reset(): void
    {
        try
        {
            this.myForm.controls['id'].reset();
            this.myForm.controls['userName'].reset();
            this.myForm.controls['source'].reset();
        } catch (error)
        {
        }
    }

    openModal(template: TemplateRef<any>)
    {
        this.modalRef = this.modalService.show(template);
    }
}
