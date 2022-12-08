import { Component } from '@angular/core';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  islogout:boolean=false
  constructor(private wallet:WalletService){}

  logout()
  {
   
        this.wallet.logInUser=false;
        this.islogout=true
  }
}
