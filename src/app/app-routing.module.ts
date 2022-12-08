import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WalletGuard } from './auth/wallet.guard';
import { AddfundsComponent } from './components/addfunds/addfunds.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DisplayComponent } from './components/display/display.component';
import { FundtransferComponent } from './components/fundtransfer/fundtransfer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterwalletComponent} from './components/registerwallet/registerwallet.component'
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: 'registerwallet', component: RegisterwalletComponent },
  { path: 'update', component: UpdateComponent ,canActivate:[WalletGuard]},
  { path: 'delete', component: DeleteComponent ,canActivate:[WalletGuard]},
  { path: 'display', component: DisplayComponent,canActivate:[WalletGuard]},
  { path: 'addfunds', component: AddfundsComponent,canActivate:[WalletGuard]},
  { path: 'fundtransfer', component: FundtransferComponent,canActivate:[WalletGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent,canActivate:[WalletGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
