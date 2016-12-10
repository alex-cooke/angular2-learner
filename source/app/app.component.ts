import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>{{ message }}</h1>
<hr>
<div>
  <div *ngFor="let item of items">{{ item }}</div>
</div>
<div *ngIf="items.length">You have {{ items.length }} items</div>
`
})
export class AppComponent {

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