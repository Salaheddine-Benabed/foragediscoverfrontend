import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturesComponent } from './pages/factures/factures.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'personnels',component:PersonnelsComponent},
  {path:'projets',component:ProjetsComponent},
  {path:'stock',component:StockComponent},
  {path:'factures',component:FacturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
