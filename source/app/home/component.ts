import { Component } from '@angular/core';

@Component({

  selector: 'my-app',
  templateUrl: "./template.html"
})
export class HomeComponent {

  message: string;
  items: any[];

  constructor() {

    this.message = "Hello, World!";
    console.log(this.message);

    this.items = [
      'item 1',
      'item 2',
      'item 3'
    ];

  }
}