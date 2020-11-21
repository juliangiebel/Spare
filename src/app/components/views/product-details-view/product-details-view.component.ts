import { Component, OnInit } from '@angular/core';
import { Produkt } from 'src/app/interfaces/Produkt';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {

  produkt: Produkt;
  constructor() { }

  ngOnInit(): void {
  }

}
