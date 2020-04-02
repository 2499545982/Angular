import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Student } from './student.component';
import { Studentlist } from './student-list.component';

@NgModule({
    declarations: [
        AppComponent,
        Student,
        Studentlist
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
