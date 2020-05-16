import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {


  username: string;
  password: string;

  constructor(private dialogRef: MatDialogRef<DialogLoginComponent>,
    private spinner: NgxSpinnerService,
    public authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // this.spinner.show();
 
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.spinner.hide();
    // }, 5000);
    this.authService.login(this.username).subscribe(item => {
      console.log(item);
      
    })
    // this.dialogRef.close(true);
  }

  exit() {
    this.dialogRef.close();
  }

}
