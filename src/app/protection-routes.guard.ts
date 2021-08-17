import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login-service';

@Injectable({
  providedIn: 'root',
})
export class ProtectionRoutesGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.loginService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/huella']);
    return false;
  }

}
