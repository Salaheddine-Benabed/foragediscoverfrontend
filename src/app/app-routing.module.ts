import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'personnels',component:PersonnelsComponent},
  {path:'projets',component:ProjetsComponent},
  {path:'stock',component:StockComponent},
  {path:'factures',component:FacturesComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
