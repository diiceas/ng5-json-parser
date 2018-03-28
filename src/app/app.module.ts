import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvestmentsComponent } from './components/investments/investments.component';

import { JsonService } from './services/json.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

let routes: Routes = [
  {
    path: '',
    component: InvestmentsComponent,
  },
  {
    path: 'investments/:investor',
    component: InvestmentsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
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