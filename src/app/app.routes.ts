import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { LoginPage } from './login/login.page';
import { VehiclesPage } from './vehicles/vehicles.page';
import { BookingConfirmPage } from './booking-confirm/booking-confirm.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'vehicles', component: VehiclesPage },
  { path: 'about', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'booking-confirm', component: BookingConfirmPage }
];