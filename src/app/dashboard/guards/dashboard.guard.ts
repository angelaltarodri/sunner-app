import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('dashboardGuard - canActivate')
      return this.authService.verificaAutentificacion()
        .pipe(
          tap(estaAutenticado => {
            if ( estaAutenticado ) {
              this.router.navigate(['/dashboard']);
            }
          }),
          map(isAutenticado => !isAutenticado)
        )
    }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('dashboardGuard - canLoad')
      return this.authService.verificaAutentificacion()
        .pipe(
          tap(estaAutenticado => {
            if ( estaAutenticado ) {
              this.router.navigate(['/dashboard']);
            }
          }),
          map(isAutenticado => !isAutenticado)
        )
    }
}
