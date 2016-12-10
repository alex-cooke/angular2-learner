import { Component } from '@angular/core';
import { MyService } from '../providers/MyService';

@Component({

    selector: 'my-app',
    templateUrl: "./template.html"
})
export class HomeComponent {

    message: string;
    items: any[];

    remove(item: any) {
        this.items.splice(this.items.indexOf(item), 1);
    }
    constructor(private myService: MyService) {

        this.items = myService.getItems();

        this.message = "Hello, World!";


    }
}