import { Injectable } from '@angular/core'

@Injectable()
export class MyService {

    getItems = () => {

        return [
            "Item 1",
            "Item 2",
            "Item 3"
        ];
    }
}

