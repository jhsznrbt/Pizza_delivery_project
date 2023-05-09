import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  public userEmail: string | null = null;
  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user)
      .pipe(
        tap((response: { token?: string }) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            this.userEmail = user.email;
          } else {
            throw new Error('Sikertelen bejelentkezés');
          }
        })
      );
  }


  logout(): void {
    localStorage.removeItem('token');
    this.userEmail = null;  // Bejelentkezett felhasználó email címének törlése
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
}

