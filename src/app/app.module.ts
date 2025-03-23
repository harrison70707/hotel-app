import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'; // Importing HomeModule
import { ReservationModule } from './reservation/reservation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule, // Adding HomeModule to imports,
    ReservationModule, // Adding ReservationModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
