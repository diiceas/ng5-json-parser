import { JsonService } from './../../services/json.service';
import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {

  constructor(private jsonService: JsonService) { }

  private investments: any;

  ngOnInit() {
    jQuery(".nav-item.investments").addClass("active");
    this.jsonService.getJson().then(results => {
      this.display(results.investments);
    });
  }

  ngOnDestroy() {
    jQuery(".nav-item.investments").removeClass("active");
  }
  
  display(investments: any){
    this.investments = investments.sort(this.compare)
    //.filter(item => new Date(item.date).getFullYear() > 2016);
    //console.log(investments);
  }

  compare(a, b) {
    if (a.date < b.date) {
      return 1;
    }
    // a must be equal to b
    return -1;
  }
}