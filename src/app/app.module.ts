import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// Don't import MatTableDataSource as you'd might have issues with the ngcc during compilation
import { MatPaginatorModule } from '@angular/material/paginator';

// implement search using MatInputModule

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CustomerApplicationsComponent } from './customer-applications/customer-applications.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'createUser',
    component: UserManagementComponent,
  },
  {
    path: 'customermgt',
    component: CustomerApplicationsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    CustomerApplicationsComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
