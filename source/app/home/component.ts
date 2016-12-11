import { Component } from '@angular/core';
import { PersonService } from '../providers/PersonService';
import { Person } from '../person/model';

@Component({

    selector: 'my-app',
    templateUrl: "./template.html"
})
export class HomeComponent {

    message: string;
    items: Person[];

    selectedPerson: Person;

    resetMessage(message: string) {
        this.message = message;
    }

    selectPerson(person: Person) {
        this.selectedPerson = person;
    }
    constructor(private personService: PersonService) {

        this.items = personService.getItems();

        this.message = "Hello, World!";


    }
}