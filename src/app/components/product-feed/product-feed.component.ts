import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Produkt } from 'src/app/interfaces/Produkt';

//Temporary placeholder
export enum FeedFilterType {
  DISTANCE,
  TIME
}

@Component({
  selector: 'app-product-feed',
  templateUrl: './product-feed.component.html',
  styleUrls: ['./product-feed.component.css']
})
export class ProductFeedComponent implements OnInit {
  @Input() name: string
  @Input() targetText: string;
  @Input() filter: FeedFilterType;

 readonly DistanceMockData: Produkt[] = [
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 13), "Kartoffeln", 0.6, 2),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 12), "Kürbis", 0.6, 3),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 11), "Salatkopf", 0.6, 4),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 10), "Rispentomaten", 0.6, 5),
  ];

  readonly TimeMockData: Produkt[] = [
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 10), "Rispentomaten", 0.6, 5),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 11), "Spinat", 0.6, 4),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 12), "Kartoffeln", 0.6, 3),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 13), "Kürbis", 0.6, 2),
  ];

  products = () => this.filter == FeedFilterType.DISTANCE ? this.DistanceMockData : this.TimeMockData;

  constructor(private router: Router) {

    // switch (this.filter) {
    //   case FeedFilterType.DISTANCE:
    //     this.products = this.DistanceMockData;
    //   break;
    //   case FeedFilterType.TIME:
    //     this.products = this.TimeMockData;
    //   break;
    // }

  }

  public TimeUntilMHD(mhd: Date): number {
    return Math.trunc((mhd.valueOf() - new Date().valueOf()) /(1000*60*60*24));
  }

  ngOnInit(): void {
  }

  OnClick(category: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cate: category
      }
    };
    this.router.navigate(['product'], navigationExtras);
  }
  
}
