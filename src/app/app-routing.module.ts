import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { HomeComponent } from './pages/home/home.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { ProjetsComponent } from './pages/projets/projets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personnels', component: PersonnelsComponent, canActivate: [AuthGuard] },
  { path: 'projets', component: ProjetsComponent, canActivate: [AuthGuard] },
  { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
  { path: 'factures', component: FacturesComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
