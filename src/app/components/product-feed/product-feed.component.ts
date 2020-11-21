import { Component, Input, OnInit } from '@angular/core';
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
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 12), "Kartoffeln", 0.6, 3),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 11), "Salatkopf", 0.6, 4),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 10), "Rispentomaten", 0.6, 5),
  ];

  readonly TimeMockData: Produkt[] = [
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 10), "Rispentomaten", 0.6, 5),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 11), "Salatkopf", 0.6, 4),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 12), "Kartoffeln", 0.6, 3),
    new Produkt("1", "1", "kg", 10, 100, new Date(2021, 1, 13), "Kartoffeln", 0.6, 2),
  ];

  products: Produkt[];

  constructor() {

    switch (this.filter) {
      case FeedFilterType.DISTANCE:
        this.products = this.DistanceMockData;
      break;
      case FeedFilterType.TIME:
        this.products = this.TimeMockData;
      break;
    }

  }

  ngOnInit(): void {
  }

}
