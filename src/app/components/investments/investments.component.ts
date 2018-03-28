import { Component, OnInit } from '@angular/core';
import { JsonService } from './../../services/json.service';

declare var jQuery: any;

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  constructor(private jsonService: JsonService) { }

  public investments: any;

  ngOnInit() {
    jQuery(".nav-item.investments").addClass("active");
    
    this.jsonService.getInvestments("accel_partners").then(results => {
      this.display(results.investments);
    });
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
    return -1;
  }

  ngOnDestroy() {
    jQuery(".nav-item.investments").removeClass("active");
  }
}