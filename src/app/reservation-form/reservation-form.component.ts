import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

  }
  
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      guestName: ['', [Validators.required]],
      roomNumber: ['', [Validators.required]],
  });

  }

  onSubmit() {
    if (this.reservationForm.valid) {
      // Add your form submission logic here
      console.log('Form Submitted');
    }
  }
}