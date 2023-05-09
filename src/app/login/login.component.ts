import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Bejelentkezési adatok:', this.user);
    this.authService.login(this.user).subscribe(
      response => {
        console.log('Bejelentkezés sikeres:', response);
        // Sikeres bejelentkezés esetén átirányítjuk a felhasználót a főoldalra
        this.router.navigate(['/']);
      },
      error => {
        console.error('Bejelentkezés hiba:', error);
        // Hibás bejelentkezés esetén megjelenítjük a hibát a felhasználónak
        alert('Bejelentkezés hiba: ' + error.error.message);
      }
    );
  }}

