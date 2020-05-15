import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {


  username: string;
  password: string;

  constructor(private dialogRef: MatDialogRef<DialogLoginComponent>,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  login() {
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    this.dialogRef.close();
  }

  exit() {
    this.dialogRef.close();
  }

}
