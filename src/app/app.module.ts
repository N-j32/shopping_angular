import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { CategoriesComponent } from './categories/categories.component';
import { LinkComponent } from './link/link.component';
import { CardsComponent } from './cards/cards.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { AdsComponent } from './ads/ads.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { HdecoreComponent } from './hdecore/hdecore.component';
import { HdecoredetailsComponent } from './hdecore/hdecoredetails/hdecoredetails.component';
import { CounterComponent } from './counter/counter.component';
import { ChildcounterComponent } from './counter/childcounter/childcounter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    CategoriesComponent,
    LinkComponent,
    CardsComponent,
    PerfumeComponent,
    AdsComponent,
    AllproductComponent,
    HdecoreComponent,
    HdecoredetailsComponent,
    CounterComponent,
    ChildcounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
