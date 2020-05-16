import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private snackBar: MatSnackBar) { }

  public showSnackBar(label: string) {
    this.snackBar.open(label, '', {
      duration: 2000,
    });
  }
}
