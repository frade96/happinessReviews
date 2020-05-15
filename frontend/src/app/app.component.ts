import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openLogin(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      panelClass: 'login_dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
