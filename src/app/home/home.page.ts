import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { cashOutline, timeOutline, carOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  constructor(private router: Router) {
    // Register the icons you want to use
    addIcons({ cashOutline, timeOutline, carOutline });
  }

  navigateToVehicles() {
    this.router.navigate(['/vehicles']);
  }
}