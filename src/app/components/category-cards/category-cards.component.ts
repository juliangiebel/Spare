import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit {

  @Input() categories: string[];

  constructor(private router: Router) { }

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
