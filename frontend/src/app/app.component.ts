import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { AuthService } from './components/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.$isLogged.subscribe(item => {
      this.isLogged = item;
    })
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      panelClass: 'login_dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.updateLogged(true);
      }
    });
  }

  openLogout() {
    this.subscription.unsubscribe();
  }
}
