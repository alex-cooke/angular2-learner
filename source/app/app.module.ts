import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/component';
import { FormsModule } from '@angular/forms';
import { MyService } from './providers/MyService';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent],
    providers: [MyService]
})
export class AppModule {
}