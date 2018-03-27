import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParserComponent } from './components/parser/parser.component';

import { JsonService } from './services/json.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { IndustriesComponent } from './components/industries/industries.component';
import { IsMobileService } from './services/is-mobile.service';
import { DeviceDetectorModule } from 'ngx-device-detector';

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
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    JsonService,
    IsMobileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }