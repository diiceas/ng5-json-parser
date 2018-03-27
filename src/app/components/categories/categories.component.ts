import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(".nav-item.categories").addClass("active");
  }

  ngOnDestroy() {
    jQuery(".nav-item.categories").removeClass("active");
  }

}
