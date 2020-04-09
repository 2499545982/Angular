import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product } from './product';
import { Productsimage } from './product-image';
import { Productslist } from './products-list';
import { Productspart } from './product-part';
import { Productsprice } from './product-price';
import { Productsrow } from './product-row';

@NgModule({
    declarations: [
        AppComponent,
        Productsimage,
        Productslist,
        Productspart,
        Productsprice,
        Productsrow
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
