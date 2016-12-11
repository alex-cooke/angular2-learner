import { Component, Input } from '@angular/core';
import { Person } from './model';

@Component({

    selector: 'my-person',
    templateUrl: "./template.html"
})
export class PersonComponent {

    @Input()
    model: Person;

}