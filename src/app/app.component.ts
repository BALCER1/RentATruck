import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, car, informationCircle, logIn, menu } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, RouterLink]
})
export class AppComponent {
  constructor() {
    addIcons({ home, car, informationCircle, logIn, menu });
  }
}
