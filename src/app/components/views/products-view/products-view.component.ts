import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Produkt } from 'src/app/interfaces/Produkt';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  productList: Array<Produkt>;
  constructor(
    private productService: ProductService,
    private router: Router
    ) {
    this.fillProducts();
   }

  ngOnInit(): void {
  }

  fillProducts(){
    this.productList = this.productService.getAllData();
  }

  navigateToProduct(produkt: Produkt){
    // So ok?
    const navigationExtras: NavigationExtras = {
      queryParams: {
        cate: name
      }
    };
    this.router.navigate(['products-details-view'], navigationExtras);

  }

}
