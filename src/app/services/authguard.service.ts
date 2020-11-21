import { Injectable } from '@angular/core'; 
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  public token: string;

  constructor(private router: Router) { 
    this.token = localStorage.getItem('accessToken');
  }

  canActivate(): any {
    if(!this.token){
      this.router.navigateByUrl('/login');
    }
    return true;
  }
}
