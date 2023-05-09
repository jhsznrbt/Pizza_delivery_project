import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Regisztrációs adatok:', this.user);

    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('Regisztráció sikeres, válasz:', response);
      },
      (error) => {
        console.error('Regisztráció közben hiba történt:', error);
      }
    );
  }
}
