import { GrootService } from './service/groot.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { CommonModule } from "@angular/common";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MatGridListModule } from '@angular/material/grid-list'
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { UserDetailsComponent } from './components/user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    SlimLoadingBarModule,
    CommonModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatIconModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}