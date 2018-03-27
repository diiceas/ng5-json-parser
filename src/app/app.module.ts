import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParserComponent } from './components/parser/parser.component';

import { JsonService } from './services/json.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { IndustriesComponent } from './components/industries/industries.component';

let routes: Routes = [
  {
    path: '',
    component: ParserComponent,
  },
  {
    path: 'industries',
    component: IndustriesComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ParserComponent,
    IndustriesComponent
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