import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { IndexhtmlComponent } from './indexhtml/indexhtml.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManagementComponent } from './management/management.component';
import { ExitComponent } from './exit/exit.component';
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SourceComponent } from './source/source.component';
import {ModalModule} from 'ngx-bootstrap/modal';
const mgtChildrenRoutes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'source', component: SourceComponent },
    { path: '', redirectTo: 'source', pathMatch: 'full' }
];

const routes: Routes = [
    { path: 'home', component: IndexhtmlComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'management', component: ManagementComponent,
        children:
            mgtChildrenRoutes,
        canActivate: [LoginGuard],
    }

];
@NgModule({
    declarations: [
        AppComponent,
        IndexhtmlComponent,
        LoginComponent,
        ManagementComponent,
        ExitComponent,
        UserComponent,
        SourceComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot()
    ],
    providers: [LoginGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
