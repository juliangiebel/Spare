import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FeedFilterType } from "../../product-feed/product-feed.component";

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  categories: string[] = [
    "Gemüse",
    "Obst",
    "Nüsse",
    "Getreide"
  ];

  distanceFilter = FeedFilterType.DISTANCE;
  timeFilter = FeedFilterType.TIME;

  ngOnInit(): void {
  }

  navigateToProductList(category: string){
    // So ok?
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cate: category
      }
    };
    this.router.navigate(['products-details-view'], navigationExtras);
  }
}
