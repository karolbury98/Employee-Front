import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports for API
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/services/config.service';
import { DataSharingService } from './config/services/data-sharing.service';

// Import views
import { HomeComponent } from './modules/views/home/home.component';

// Imports components
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { FooterComponent } from './modules/components/footer/footer.component';

// Import modals
import { AlertComponent } from './modules/modals/alert/alert.component';
import { EmployeesListComponent } from './modules/components/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './modules/components/employee-details/employee-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './modules/components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './modules/components/edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    NavbarComponent,
    FooterComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    DataSharingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeComponent]
})
export class AppModule { }
