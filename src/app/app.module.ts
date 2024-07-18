import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { HomeComponent } from './pages/home/home.component';
import { AddPersonnelDialogComponent } from './components/add-personnel-dialog/add-personnel-dialog.component';
import { EditPersonnelDialogComponent } from './components/edit-personnel-dialog/edit-personnel-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    PersonnelsComponent,
    ProjetsComponent,
    StockComponent,
    FacturesComponent,
    HomeComponent,
    AddPersonnelDialogComponent,
    EditPersonnelDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
