import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HorizontalNavbarComponent } from './shared/component/horizontal-navbar/horizontal-navbar.component';
import { CosoComponent } from './coso/coso.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './coso/dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ThanhtraComponent } from './thanhtra/thanhtra.component';
import { TtdialogComponent } from './thanhtra/ttdialog/ttdialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChungnhanComponent } from './chungnhan/chungnhan.component';
import { CndialogComponent } from './chungnhan/cndialog/cndialog.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ManageUserComponent } from './list-user/manage-user/manage-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'coso',
    component: CosoComponent,
  },
  {
    path: 'thanhtra',
    component: ThanhtraComponent,
  },
  {
    path: 'chungnhan',
    component: ChungnhanComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    FooterComponent,
    HorizontalNavbarComponent,
    CosoComponent,
    DialogComponent,
    ThanhtraComponent,
    TtdialogComponent,
    ChungnhanComponent,
    CndialogComponent,
    ListUserComponent,
    ManageUserComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
