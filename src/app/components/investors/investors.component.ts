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
  public investorNames = [
    { slug: "accel_partners", name: "Accel Partners" },
    { slug: "andreessen_horowitz", name: "Andreessen Horowitz" },
    { slug: "first_round_capital", name: "First Round Capital" },
    { slug: "formation_8", name: "Formation 8" },
    { slug: "founders_fund", name: "Founders Fund" },
    { slug: "google_ventures", name: "Google Ventures" },
    { slug: "greylock_partners", name: "Greylock Partners" },
    { slug: "khosla_ventures", name: "Khosla Ventures" },
    { slug: "kleiner_perkins_caufield_byers", name: "Kleiner Perkins Caufield & Byers" },
    { slug: "new_enterprise_associates", name: "New Enterprise Associates" },
    { slug: "redpoint_ventures", name: "Redpoint Ventures" },
    { slug: "sequoia_capital", name: "Sequoia Capital" },
    { slug: "sv_angel", name: "SV Angel" },
    { slug: "triangle_peak_partners", name: "Triangle Peak Partners" },
    { slug: "venrock_associates", name: "Venrock Associates" }
  ];

  public getInvestorName(slug) {
    return this.investorNames.find(investor => investor.slug == slug).name;
  }

  ngOnInit() {
    jQuery(".nav-item.investors").addClass("active");
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
    jQuery(this.investorDropdown.nativeElement).find(".dropdown-toggle").html(this.getInvestorName(investorSlug));
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