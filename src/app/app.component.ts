import { IsMobileService } from './services/is-mobile.service';
import { Component } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private isMobileService: IsMobileService) { }

  ngOnInit() {
    jQuery('.nav-item.d-lg-none').on('click', function () {
      jQuery('.navbar-toggler').click();
    });
  }
}