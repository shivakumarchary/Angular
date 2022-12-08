import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterwalletComponent } from './components/registerwallet/registerwallet.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DisplayComponent } from './components/display/display.component';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { FundtransferComponent } from './components/fundtransfer/fundtransfer.component';
import { WalletGuard } from './auth/wallet.guard';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterwalletComponent,
    UpdateComponent,
    DeleteComponent,
    DisplayComponent,
    AddfundsComponent,
    FundtransferComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WalletGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
