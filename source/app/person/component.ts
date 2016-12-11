import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './model';

@Component({

    selector: 'my-person',
    templateUrl: "./template.html",
    styleUrls: ['./style.css']
})
export class PersonComponent {

    @Output()
    onSelect = new EventEmitter<Person>();

    @Input()
    model: Person;

    select() {
        this.onSelect.emit(this.model);
    }
}