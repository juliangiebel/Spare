import { Component, OnInit } from '@angular/core';
import { Kunde } from 'src/app/interfaces/Kunde';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  kunde: Kunde;
  constructor(private customerS: CustomerService) {
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

}
