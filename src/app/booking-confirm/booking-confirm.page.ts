import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  capacity: string;
  features: string[];
}

@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.page.html',
  styleUrls: ['./booking-confirm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BookingConfirmPage {
  vehicle: Vehicle | null = null;
  rentalDays: number = 1;
  pickupDate: string = '';
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.vehicle = navigation.extras.state['vehicle'];
      this.rentalDays = navigation.extras.state['rentalDays'];
      this.pickupDate = navigation.extras.state['pickupDate'];
      this.total = navigation.extras.state['total'];
    } else {
      this.router.navigate(['/vehicles']);
    }
  }

  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  newBooking() {
    this.router.navigate(['/vehicles']);
  }
}