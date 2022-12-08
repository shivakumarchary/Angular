import { Component } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registerwallet',
  templateUrl: './registerwallet.component.html',
  styleUrls: ['./registerwallet.component.css']
})
export class RegisterwalletComponent {
  newWallet:Wallet= new Wallet();
  IsReg!:boolean
  IsNotReg:boolean=false
  constructor(private employeeService:WalletService){}

addUser(){
  console.log("add user called");
  console.log(this.newWallet);
  console.log(this.newWallet.id,this.newWallet.name!=undefined)
  if(this.newWallet.id!=undefined &&  this.newWallet.balance!=undefined)
  {
   
    this.IsReg=this.employeeService.addWallet(this.newWallet);
  }
  else
  {
    this.IsNotReg=true;
  }
}
}
