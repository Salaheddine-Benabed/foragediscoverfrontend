import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Components
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { StockComponent } from './pages/stock/stock.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { HomeComponent } from './pages/home/home.component';
import { AddPersonnelDialogComponent } from './components/add-personnel-dialog/add-personnel-dialog.component';
import { EditPersonnelDialogComponent } from './components/edit-personnel-dialog/edit-personnel-dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { EditProjectDialogComponent } from './components/edit-project-dialog/edit-project-dialog.component';
import { AddProjectDialogComponent } from './components/add-project-dialog/add-project-dialog.component';

// Services
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthService } from './services/auth.service';

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
    LoginComponent,
    EditProjectDialogComponent,
    AddProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
