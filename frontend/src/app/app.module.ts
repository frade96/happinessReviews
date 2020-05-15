import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    DialogLoginComponent
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
    NgxSpinnerModule
  ],
  providers: [
  ],
  entryComponents: [
    DialogLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
