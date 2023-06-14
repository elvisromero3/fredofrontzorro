import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router,
              private accountService: AuthService
    ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree> | boolean | UrlTree {

    const account = this.accountService.accountValue;
    if(account){
      if(account?.responseCode == 2 || account?.responseCode == null){
      
        this.router.navigate(['account']);
      } else {
        return true;
      }  
    }
    this.router.navigate(['account']);
    return false;
  }
}
