import { Component } from '@angular/core';
import { YourcartComponent } from '../yourcart/yourcart.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [YourcartComponent, CommonModule, RouterModule], // Add RouterModule here
  template: `
    <nav class="navbar">
      <div class="navbar-logo">
        <img
          src="https://i.pinimg.com/564x/67/0c/35/670c35b940db492bb95bd37c2be8296c.jpg"
          alt="My App Logo"
          width="100"
          height="100"
        />
      </div>
      <ul class="navbar-links">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/yourcart">Your Cart</a></li>
      </ul>
      <div class="navbar-actions">
        <!-- Add login/logout buttons or user-related actions here -->
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss'], // Change to styleUrls
})
export class NavbarComponent {}
