import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvestorsComponent } from './components/investors/investors.component';

import { JsonService } from './services/json.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InvestorsComponent,
    CategoriesComponent
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