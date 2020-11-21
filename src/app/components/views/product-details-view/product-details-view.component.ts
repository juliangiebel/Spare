import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produkt } from 'src/app/interfaces/Produkt';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {

  produkt: Produkt;
  constructor(

    private router: Router,
    private productService: ProductService
  ) {
    const id = this.router.getCurrentNavigation().extras.queryParams.product;
    this.getProdukt(id);
   }

  ngOnInit(): void {
  }

  async getProdukt(id: string) {
    this.produkt = await this.productService.getData(id);
    console.log('Produkt ', this.produkt.Name);
  }

}
