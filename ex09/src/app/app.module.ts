import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestAService } from './test.service';
import { TestBService } from './test.servic';
import { SubComponent } from './sub.component';

@NgModule({
    declarations: [
        AppComponent,
        SubComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        TestAService,
        TestBService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
