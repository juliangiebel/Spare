import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produkt } from 'src/app/interfaces/Produkt';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {

  produkt: Produkt;
  constructor(
    private router: Router
  ) {
    this.produkt = this.router.getCurrentNavigation().extras.queryParams.product;
   }

  ngOnInit(): void {
  }

}
