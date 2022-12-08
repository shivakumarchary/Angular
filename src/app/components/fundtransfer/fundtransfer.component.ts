import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
FromId!:number
ToId!:number
balance!:number
wallet:Wallet = new Wallet();
wallets:Wallet[] = [];
isTransferd:boolean=false
notEnought:boolean=false
notFound:boolean=false

temp:boolean=false
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
    for(let w of this.wallets)
      {
        if(w.id!=this.ToId)
        {
          this.temp=true
          break
        }

      }
  }
fundsToTransfer()
    {
      this.notFound=this.temp
      this.isTransferd=false
      
      if(this.ToId!=undefined && this.balance!=undefined)
      {
  
        if(this.wallet.balance<this.balance)
        {
          this.notEnought=true
        }
        else
        {
          this.isTransferd=this.walletService.fundTransfer(this.wallet.id,this.ToId,this.balance);
          this.notFound=false
        }
      }
        
    }

}
