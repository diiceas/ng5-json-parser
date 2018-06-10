import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';

declare var jQuery : any;

@Component({
  selector: 'app-marketmaps',
  templateUrl: './marketmaps.component.html',
  styleUrls: ['./marketmaps.component.css']
})
export class MarketmapsComponent implements OnInit {

  public marketMaps: any;

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    jQuery(".nav-item.marketMaps").addClass("active");
    this.jsonService.getMarketMaps().then(results => {
      this.display(results.public);
    });
  }

  display(marketMaps: any){
    this.marketMaps = marketMaps;
  }

  ngOnDestroy() {
    jQuery(".nav-item.marketMaps").removeClass("active");
  }

}
