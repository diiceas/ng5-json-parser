import { Component, OnInit } from '@angular/core';
import { JsonService } from './../../services/json.service';

declare var jQuery: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  public categories: any;

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    jQuery(".nav-item.categories").addClass("active");
    this.jsonService.getCategories().then(results => {
      this.display(results.sectors);
    });
  }

  display(categories: any){
    this.categories = categories;
  }

  ngOnDestroy() {
    jQuery(".nav-item.categories").removeClass("active");
  }
}