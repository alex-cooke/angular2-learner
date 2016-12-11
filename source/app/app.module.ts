import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './providers/PersonService';
import { PersonComponent } from './person/component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [HomeComponent, PersonComponent],
    bootstrap: [HomeComponent],
    providers: [PersonService]
})
export class AppModule {
}