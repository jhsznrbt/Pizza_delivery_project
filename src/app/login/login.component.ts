import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Bejelentkezési adatok:', this.user);
    this.authService.login(this.user).subscribe(
      response => {
        console.log('Bejelentkezés sikeres:', response);
        // Sikeres bejelentkezés esetén végezhető teendők, pl. átirányítás
      },
      error => {
        console.error('Bejelentkezés hiba:', error);
        // Hibás bejelentkezés esetén végezhető teendők, pl. hibaüzenet megjelenítése
      }
    );
  }

  login(): void {
    // Ide írd a bejelentkezési kódod
    this.authService.login(this.user);
  }
}
