import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from './../../services/json.service';

declare var jQuery: any;

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent implements OnInit {

  @ViewChild('investorDropdown') investorDropdown: ElementRef;

  constructor(
    private jsonService: JsonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public investors: any;
  public investorNames: { [slug: string]: string; } = {};

  ngOnInit() {
    jQuery(".nav-item.investors").addClass("active");
    this.initInvestorsArray();
  }

  initInvestorsArray(){
    this.investorNames["accel_partners"] = "Accel Partners";
    this.investorNames["andreessen_horowitz"] = "Andreessen Horowitz";
  }

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      this.loadinvestorsTable(params["investor"]);
    });
  }

  loadinvestorsTable(investorSlug: any) {
    if (!investorSlug) {
      this.dropDownItemOnClick("accel_partners");
    }

    this.initInvestorsDropDown(investorSlug);
    
    if (investorSlug) {
      this.jsonService.getInvestors(investorSlug).then(results => {
        this.display(results.investments);
      });
    }
  }

  dropDownItemOnClick(investorSlug) {
    this.router.navigate([`/investors/${investorSlug}`]);
  }

  initInvestorsDropDown(investorSlug) {
    jQuery(this.investorDropdown.nativeElement).find(".dropdown-toggle").html(this.investorNames[investorSlug]);
    jQuery(this.investorDropdown.nativeElement).find(".dropdown-item.active").toggleClass("active");
    this.toggleActive(investorSlug);
  }

  toggleActive(investorSlug) {
    jQuery(`#${investorSlug}`).toggleClass("active");
  }

  display(investors: any) {
    this.investors = investors.sort(this.compare)
    //.filter(item => new Date(item.date).getFullYear() > 2016);
    //console.log(investors);
  }

  compare(a, b) {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  }

  ngOnDestroy() {
    jQuery(".nav-item.investors").removeClass("active");
  }
}