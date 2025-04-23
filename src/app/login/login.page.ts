import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    // In a real app, you would call an authentication service here
    console.log('Login attempt with:', this.credentials);
    this.router.navigate(['/home']);
  }
}