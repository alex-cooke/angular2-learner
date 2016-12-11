import { Injectable } from '@angular/core'
import { Person } from '../person/model';

@Injectable()
export class PersonService {

    getItems = (): Person[] => {

        return [
            { firstName: "Bugs", lastName: "Bunny" },
            { firstName: "Mickey", lastName: "Mouse" },
            { firstName: "Willo", lastName: "the Wisp" }
        ];
    }
}

