import { Component } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
id!:number
psw!:string
islogin:boolean=false;
warning:boolean=false;
loginDetails:Wallet=new Wallet();
loginId: number=0;
constructor(private wallet:WalletService){}

login()
{
 
      if(this.id==undefined || this.psw==undefined)
      {
        this.warning=true
      }
      else
      {
        this.islogin =this.wallet.userlogin(this.id,this.psw);
        if(this.islogin==false)
        this.warning=true
      }
      if(this.islogin==true)
        this.warning=false
}
}




