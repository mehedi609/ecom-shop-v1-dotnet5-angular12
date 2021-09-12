import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((authenticatedUser) => {
        if (authenticatedUser) return true;
        this.router.navigate(['account/login'], {
          queryParams: { redirectUrl: state.url },
        });
      })
    );
  }
}
