import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Kunde } from 'src/app/interfaces/Kunde';
import { Produkt } from 'src/app/interfaces/Produkt';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  kunde: Kunde;
  productList: Array<Produkt>;
  
  constructor(private customerS: CustomerService,
              private productService: ProductService,
              private router: Router) {

    this.fillProducts();
    this.getKunde();
   }

  ngOnInit(): void {
  }

  async getKunde() {
    console.log('GET KUNDE');
    this.kunde = await this.customerS.getKunde('rqhNGaqlnDI9K9BEXzIU');
    console.log('GOT KUNDE');
    console.log(this.kunde);
  }

  fillProducts(){
    this.productList = this.productService.getAllData();
  }

  navigateToProduct(produkt: Produkt){
    // So ok?
    const navigationExtras: NavigationExtras = {
      queryParams: {
        productID: produkt.ProduktID
      }
    };
    this.router.navigate(['products-details-view'], navigationExtras);
  }

}
