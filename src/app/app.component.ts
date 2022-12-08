import { Component, OnInit } from '@angular/core';
import { Wallet } from './Entity/wallet';
import { WalletService } from './service/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walletApp';
  //newWallet:Wallet=new Wallet();
  name!:string;
wallets:Wallet[] = [];
constructor(private walletService:WalletService){}

  ngOnInit(): void {
  
    //throw new Error('Method not implemented.');
    this.wallets = this.walletService.getAllWallets();
    if(this.walletService.getLoginStatus())
    {
      this.name="Hi"
      console.log("name displaying")
      console.log(this.walletService.getLoginStatus())
    for(let w of this.wallets)
    {
      if(w.id==this.walletService.getLoginId())
      {
        console.log(this.walletService.getLoginId())
        this.name=w.name;
        console.log(this.name)
      }
    }
  }
}



}


