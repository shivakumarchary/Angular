import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-addfunds',
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
})
export class AddfundsComponent implements OnInit {
id!:number;
balance!:number;
isTrue:boolean=false;
wallet:Wallet = new Wallet();
wallets:Wallet[] = [];
IsFundAdded:boolean=false
IsFundNotAdded:boolean=false
constructor(private walletService:WalletService )
{

}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.wallets = this.walletService.getAllWallets();
    for(let w of this.wallets)
    {
      if(w.id==this.walletService.getLoginId())
      {
        this.wallet = w;
      }
    }
  }
    addfunds()
    {
      console.log(this.balance)
  if(this.balance!=undefined)
  {
      this.IsFundAdded=this.walletService.addFundsToId(this.wallet.id,this.balance);
      this.IsFundNotAdded=false

  }
      else
    this.IsFundNotAdded=true

    }
    
}
