import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(".nav-item.categories").addClass("active");
  }

  ngOnDestroy() {
    jQuery(".nav-item.categories").removeClass("active");
  }

}
