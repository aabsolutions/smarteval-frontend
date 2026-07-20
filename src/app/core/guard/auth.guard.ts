import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { LocalStorageService } from '@shared/services';
import { User } from '@core/models/interface';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private router = inject(Router);
  private store = inject(LocalStorageService);


  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    const currentUser = this.store.get('currentUser') as User;
    if (currentUser) {
      const userRole = currentUser.roles?.[0]?.name; // Optional chaining to safely access the role
      // If no role exists, you might want to handle it (e.g., redirect or show an error)
      if (!userRole) {
        this.router.navigate(['/authentication/signin']);
        return false;
      }

      // Check if the route requires a specific role and if the user's role matches.
      // Siempre tratamos route.data['role'] como array: si algún route lo configura mal
      // (string suelto en vez de array), Array.isArray + includes deniega en vez de
      // hacer substring matching como haría un .indexOf sobre un string.
      const requiredRoles = route.data['role'];
      if (requiredRoles && (!Array.isArray(requiredRoles) || !requiredRoles.includes(userRole))) {
        // If the role does not match, navigate to the signin page
        this.router.navigate(['/authentication/signin']);
        return false;
      }
      return true;
    }

    // If no current user is found, redirect to signin
    this.router.navigate(['/authentication/signin']);
    return false;
  }
}
