import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from './../../services/json.service';

declare var jQuery: any;

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  @ViewChild('investorDropdown') investorDropdown: ElementRef;

  constructor(
    private jsonService: JsonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public investments: any;
  public investors: { [slug: string]: string; } = {};

  ngOnInit() {
    jQuery(".nav-item.investments").addClass("active");
    this.initInvestorsArray();
  }

  initInvestorsArray(){
    this.investors["accel_partners"] = "Accel Partners";
    this.investors["andreessen_horowitz"] = "Andreessen Horowitz";
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      this.loadInvestmentsTable(params["investor"]);
    });
  }

  loadInvestmentsTable(investorSlug: any) {
    if (!investorSlug) {
      this.dropDownItemOnClick("accel_partners");
    }

    this.initInvestorsDropDown(investorSlug);
    
    if (investorSlug) {
      this.jsonService.getInvestments(investorSlug).then(results => {
        this.display(results.investments);
      });
    }
  }

  dropDownItemOnClick(investorSlug) {
    this.router.navigate([`/investments/${investorSlug}`]);
  }

  initInvestorsDropDown(investorSlug) {
    jQuery(this.investorDropdown.nativeElement).find(".dropdown-toggle").html(this.investors[investorSlug]);
    jQuery(this.investorDropdown.nativeElement).find(".dropdown-item.active").toggleClass("active");
    this.toggleActive(investorSlug);
  }

  toggleActive(investorSlug) {
    jQuery(`#${investorSlug}`).toggleClass("active");
  }

  display(investments: any) {
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