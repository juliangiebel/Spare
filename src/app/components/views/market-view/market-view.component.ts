import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
    "test1",
    "test2"
  ]

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
