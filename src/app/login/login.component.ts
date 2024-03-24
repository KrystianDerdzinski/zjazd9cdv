import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type User = {
  name: string;
  imageUrl: string;
  lastLogged: Date;
};

const connectedAccounts: User[] = [
  {
    name: 'Janusz',
    imageUrl: 'https://picsum.photos/200',
    lastLogged: new Date(),
  },
];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  connectedAccounts: User[] = connectedAccounts;
}
