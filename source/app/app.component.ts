import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '{{ message }}'
})
export class AppComponent {
  message: string;
  constructor() {
    this.message = "Hello, World!";
    console.log(this.message);
  }
}

