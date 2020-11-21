import { Component } from '@angular/core';
import { Kunde } from './interfaces/Kunde';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APUHP';
  kunde: Kunde;
  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {
    this.getKunde();
    this.fillProducts();
   }


  async getKunde() {
    console.log('GET KUNDE');
    this.kunde = await this.customerService.getKunde('rqhNGaqlnDI9K9BEXzIU');
    console.log('GOT KUNDE');
    console.log(this.kunde);
  }

  fillProducts(){
    // this.productList =
    this.productService.getAllData();
  }
}