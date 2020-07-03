import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginFormComponent} from './components/login/login-form.component';
import { CarteBancaireComponent} from './components/request/carte-bancaire/carte-bancaire.component';
import{CchequeComponent} from './components/request/ccheque/ccheque.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RequestComponent } from './components/request/request.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionsHistoryComponent } from './components/transactions-history/transactions-history.component';
import { SimulationCreditComponent } from './components/simulation-credit/simulation-credit.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RibComponent } from './components/rib/rib.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { MesCreditsComponent } from './components/mes-credits/mes-credits.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  // {path:'dashboard',component : DashboardComponent},
  {path:'',component : CarouselComponent },

  {path:'dashboard',component : DashboardComponent,canActivate:[AuthGuard]},

     {path:'about',component : AboutComponent },

  {path:'logout', component:LogoutComponent,canActivate:[AuthGuard]},
  {path:'credits', component: MesCreditsComponent,canActivate:[AuthGuard]},

  {path:'login',component : LoginFormComponent },
  {path:'accounts',component : AccountsComponent ,canActivate:[AuthGuard]},
  {path:'addtransaction',component : AddTransactionComponent,canActivate:[AuthGuard] },
  {path:'transactions',component : TransactionsHistoryComponent ,canActivate:[AuthGuard]},
  {path:'simulationcredit',component : SimulationCreditComponent },
  {path:'profile',component : ProfileComponent ,canActivate:[AuthGuard]},
  {path:'rib',component : RibComponent ,canActivate:[AuthGuard]},
  {
    path:  'request', component:  RequestComponent,canActivate:[AuthGuard],
    children: [

    {path:  'ccheque', component:  CchequeComponent},
    {path:  'creditCard',component:  CarteBancaireComponent}

    ]
    },
    { path: '**', component:  CarouselComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 