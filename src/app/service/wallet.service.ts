import { Injectable } from '@angular/core';
import { Wallet } from '../Entity/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  logInUser!:boolean
  loginId!:number
  countOfWallets:number=0
  psw!:string
  
wallets:Wallet[]=[]
count:number=Wallet.length
  constructor() { }

  public addWallet(newWallet:Wallet):boolean{
    this.wallets.push(newWallet);
    console.log("Wallet added");
    console.log(this.wallets);
    return true;
  }
  public getWalletById( Id:number):Wallet | String{
    for(let w of this.wallets){
      if(w.id ==Id){
        this.psw=w.password
        return w;
      }      
    }
    return "Employee not Found.";

  }
  public getLoginStatus()
  {
    return this.logInUser;
  } 

  public getLoginId()
  {
    return this.loginId;
  } 


  public userlogin(id:number,pws:string):boolean
  {
    let userlog:Wallet|String = this.getWalletById(id)
   if(userlog instanceof String)
   {
     return false
   }
   if(userlog.id == id && this.psw==pws)
   {
     this.logInUser=true;
     this.loginId=id;
     return true;
   }
   else
      return false;
  }

  public getAllWallets():Wallet[]{
    return this.wallets;
  }
  public updateEmployeeById( empId:number)
  {
    console.log("updateEmployee");
    
  }
  public deleteWalletByID(id:number){
    //this.wallets.push(newWallet);
    //console.log("Wallet added");
    //console.log(this.wallets);
    for(let w of this.wallets)
    {
      if(w.id==id)
      {
      this.wallets.splice(this.wallets.findIndex(e => e.id ==id),1);
      console.log(id+"Deleted");
      }
    }
  }

  addFundsToId(id:number,balance:number):boolean
  {
    for(let e of this.wallets)
    {
      if(e.id==id)
      {
        e.balance+=balance;
        return true
      }
    }
    return false
  }
  fundTransfer(FromId:number,ToId:number,balance:number):boolean
  {
    for(let e of this.wallets)
    {
      if(e.id==FromId)
      {
        e.balance-=balance;
        this.countOfWallets+=1
      }
      if(e.id==ToId)
      {
        e.balance+=balance;
        this.countOfWallets+=1
      }
      if(this.countOfWallets==2)
      {
        return true
      }

    }
    return false
  }

}
