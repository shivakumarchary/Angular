import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/Entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
newWallet:Wallet=new Wallet();
wallets:Wallet[] = [];
isDeleted:boolean=false
constructor(private walletService:WalletService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.wallets = this.walletService.getAllWallets();
    for(let w of this.wallets)
    {
      if(w.id==this.walletService.getLoginId())
      {
        this.newWallet = w;
        //this.isDeleted=true;
      }
    }
  }
  deleteUser(id:number){
    
    //console.log(this.newWallet);
    this.walletService.deleteWalletByID(id);
    if(id==this.walletService.getLoginId())
    {
     // this.newWallet = w;
      this.isDeleted=true;
    }
   // console.log(id+"used deleted");
  }

}
