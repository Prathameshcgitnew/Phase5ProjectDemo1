import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercComponent } from './headerc/headerc.component';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './component/component.component';
import { SearchComponent } from './search/search.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
//import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    AppComponent,
    HeadercComponent,
    HomeComponent,
    ComponentComponent,
    SearchComponent,
    CartpageComponent,
    FoodpageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
