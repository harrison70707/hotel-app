import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];

  constructor() {
    // Retrieve reservations from local storage
    let savedReservations = localStorage.getItem('reservations');
      this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
    }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    // Find and return the reservation with the specified id
    // If no reservation is found, return undefined
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    // Add a new reservation to the list
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
}

updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
}


}
