import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  wallets:Wallet[] = [];
  id!:number
  IsUpdate:boolean=false
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
  update()
  {
    this.IsUpdate=true;
  }

}
