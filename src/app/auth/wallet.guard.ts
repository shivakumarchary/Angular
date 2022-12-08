import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Wallet } from '../Entity/wallet';
import { WalletService } from '../service/wallet.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class WalletGuard implements CanActivate {
  
  isLoggedIn:boolean  = false;

  constructor(private router:Router,private wallet:WalletService ){}
 
  canActivate(): boolean 
     {
       console.log("can activate called");
       this.isLoggedIn=this.wallet.getLoginStatus()
      if(this.isLoggedIn)
       return true;
       else       
       {
         this.router.navigate(['/login']);
        return false;
        }
  }
  
}
