import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Vehicle {
  id: number;
  name: string;
  type: 'small' | 'medium' | 'large' | 'heavy';
  image: string;
  pricePerDay: number;
  capacity: string;
  features: string[];
}

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VehiclesPage {
  selectedVehicle: Vehicle | null = null;
  rentalDays: number = 1;
  pickupDate: string = new Date().toISOString();

  vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Small Pickup Truck',
      type: 'small',
      image: 'https://images.hertz.com/content/US/product_services/collections/2018-gmc-canyon.png',
      pricePerDay: 49.99,
      capacity: '1,500 lbs',
      features: ['Easy to drive', 'Great for small moves', 'Fuel efficient']
    },
    {
      id: 2,
      name: 'Medium Cargo Van',
      type: 'medium',
      image: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/50310/2024-Ford-Transit%20150%20Cargo%20Van-front_50310_032_2400x1800_YZ.png',
      pricePerDay: 69.99,
      capacity: '3,000 lbs',
      features: ['Weather protected', 'Good for apartments', 'Easy parking']
    },
    {
      id: 3,
      name: 'Large Moving Truck',
      type: 'large',
      image: 'https://dam.thdstatic.com/content/production/JkR_zgJRZozV2Bths2q9QA/FtJ1RqA8NKUYrqMcvvw8HQ/Original%20file/12MAR24_TruckRentals_RTSpotlight_Penske_12FTMovingTruck.png?im=Resize=(703,395.44)',
      pricePerDay: 89.99,
      capacity: '5,000 lbs',
      features: ['Great for houses', 'Loading ramp', 'Dual rear wheels']
    },
    {
      id: 4,
      name: 'Heavy Duty Truck',
      type: 'heavy',
      image: 'https://www.pensketruckrental.com/media-library/heavy-duty-tractors.png?id=45933012&width=755&height=516',
      pricePerDay: 129.99,
      capacity: '20,000 lbs',
      features: ['Commercial grade', 'Air brakes', 'High towing capacity']
    }
  ];

  constructor(private router: Router) {}

  selectVehicle(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }

  calculateTotal(): number {
    if (!this.selectedVehicle) return 0;
    return this.selectedVehicle.pricePerDay * this.rentalDays;
  }

  confirmBooking() {
    if (this.selectedVehicle) {
      this.router.navigate(['/booking-confirm'], {
        state: {
          vehicle: this.selectedVehicle,
          rentalDays: this.rentalDays,
          pickupDate: this.pickupDate,
          total: this.calculateTotal()
        }
      });
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
}