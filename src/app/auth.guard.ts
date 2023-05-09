import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn(); // Ez a metódus ellenőrzi, hogy a felhasználó be van-e jelentkezve
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // Ha a felhasználó nincs bejelentkezve, átirányítja a bejelentkezési oldalra
    }
    return isLoggedIn;
  }
}
