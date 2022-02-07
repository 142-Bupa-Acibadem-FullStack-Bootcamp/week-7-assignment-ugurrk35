import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevirme',
  templateUrl: './cevirme.component.html',
  styleUrls: ['./cevirme.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor() { }

  currencies = [
    {
      name: 'Dolar',
      code: 'USD',
      rate: 1,
    },
    {
      name: 'Türk Lirası',
      code: 'TL',
      rate: 1 / 13.5,
    },
    {
      name: 'Euro',
      code: 'EUR',
      rate: 1.15,
    },
    {
      name: 'Sterlin',
      code: 'GBP',
      rate: 1.5,
    },
  ];

  currentCurrency: string = 'TL';
  targetCurrency: string = 'USD';
  sum: number = 1;
  result: string = 'Miktar giriniz';

  ngOnInit() {
  }

  convertCurrency() {
    if (!isNaN(this.sum)) {
      let currentRate = this.findCurrency(this.currentCurrency);
      let targetRate = this.findCurrency(this.targetCurrency);

      if (targetRate != undefined && currentRate != undefined) {
        let convertedAmount = ((this.sum * currentRate) / targetRate).toFixed(2);
        this.result = `${this.sum} ${this.currentCurrency} = ${convertedAmount} ${this.targetCurrency} `;
      }
      else {
        this.result = 'Currency not found';
      }
    }
    else {
      this.result = 'The input value must be number !';
    }
  }

  findCurrency(targetCode: string) {
    let foundItem = this.currencies.find((item) => item.code == targetCode);
    if (foundItem) {
      return foundItem.rate;
    }
    else {
      console.log('Currency not found !');
      return undefined;
    }
  }
}
