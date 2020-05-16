import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private dialog: MatDialog, 
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.authService.$isLogged.subscribe(item => {
      this.isLogged = item;
    })
  }

  logout() {
    this.authService.logout();
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      panelClass: 'login_dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.updateLogged();
      }
    });
  }

  goToReviewer() {
    this.router.navigate(['/viewer']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
