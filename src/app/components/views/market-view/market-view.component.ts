import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {

  constructor() { }

  test: string = "Hello World";

  ngOnInit(): void {
  }

  public OnClick() {
    this.test = "test";
  }

}
