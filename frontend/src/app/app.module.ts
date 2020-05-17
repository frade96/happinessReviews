import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatExpansionModule, MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './configs/HttpRequestInterceptor';
import { ViewerComponent } from './components/viewer/viewer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartsModule, SparklineModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DialogLoginComponent,
    ViewerComponent,
    LoginComponent,
    HomeComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    NgxSpinnerModule,BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatExpansionModule,
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SparklineModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  entryComponents: [
    DialogLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
