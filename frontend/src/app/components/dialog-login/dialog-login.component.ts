import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';
import { RegularExpressionUtils } from '../../configs/RegularExpressionUtils';
import { Constants } from '../../configs/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  validator = {}
  username: string;
  password: string;

  constants = Constants;

  constructor(private dialogRef: MatDialogRef<DialogLoginComponent>,
    private spinner: NgxSpinnerService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.validator = {};
    if (!RegularExpressionUtils.isEmail(this.username)) {
      this.validator[Constants.authentication.email] = Constants.errorMessage.wrongFields;
    } else {
      this.spinner.show();
      this.authService.login(this.username).subscribe(item => {
        this.spinner.hide()
        sessionStorage.setItem('token', item.token);
        this.dialogRef.close(true);
        this.router.navigate(['/home']);
      }, error => {
        this.spinner.hide();
        this.validator[error.error.field] = error.error.message;
      })
    }
  }

  exit() {
    this.dialogRef.close();
  }

}
