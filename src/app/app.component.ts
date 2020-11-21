import { Component } from '@angular/core';
import { Kunde } from './interfaces/Kunde';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APUHP';
  kunde: Kunde;
  constructor(private customerS: CustomerService) {
    this.getKunde();
   }


  async getKunde() {
    console.log('GET KUNDE');
    this.kunde = await this.customerS.getKunde('rqhNGaqlnDI9K9BEXzIU');
    console.log('GOT KUNDE');
    console.log(this.kunde);
  }
}
