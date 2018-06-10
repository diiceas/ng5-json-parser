import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvestorsComponent } from './components/investors/investors.component';

import { JsonService } from './services/json.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { Fti2018Component } from './components/fti-2018/fti-2018.component';
import { MarketmapsComponent } from './components/marketmaps/marketmaps.component';

let routes: Routes = [
  {
    path: '',
    component: InvestorsComponent,
  },
  {
    path: 'investors/:investor',
    component: InvestorsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'marketMaps',
    component: MarketmapsComponent,
  },
  {
    path: 'fti',
    component: Fti2018Component,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InvestorsComponent,
    CategoriesComponent,
    Fti2018Component,
    MarketmapsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
  ],
  providers: [
    JsonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }