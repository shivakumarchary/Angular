import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
 
  wallets:Wallet[]=[];
  wallet:Wallet = new Wallet();
  constructor(private walletService:WalletService){}
  ngOnInit(): void {
    this.wallets = this.walletService.getAllWallets();
    for(let w of this.wallets)
    {
      if(w.id==this.walletService.getLoginId())
      {
        this.wallet = w;
      }
    }
  }


}
