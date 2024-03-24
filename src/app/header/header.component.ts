import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isPremiumUser = false;
  isLogged = false;

  logAsUser() {
    this.isPremiumUser = false;
    this.isLogged = true;
  }

  logAsPremiumUser() {
    this.isPremiumUser = true;
    this.isLogged = true;
  }
}
