import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../entity/user';
import { ConfigService } from 'src/app/services/config.service';
import { ReviewRequest } from '../entity/review-request';
import { Constants } from 'src/app/configs/constants';
import { RegularExpressionUtils } from 'src/app/configs/RegularExpressionUtils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  validator = {};
  usersOptions: Array<User> = [];
  selectedUser: number;
  constants = Constants;
  starSelected: number = 0;
  review: string = '';
  stars: Array<object> = [
    {id: 1, notColored: 'star_border', colored: 'star'},
    {id: 2, notColored: 'star_border', colored: 'star'},
    {id: 3, notColored: 'star_border', colored: 'star'},
    {id: 4, notColored: 'star_border', colored: 'star'},
    {id: 5, notColored: 'star_border', colored: 'star'},
  ];
  colored: object = {};

  constructor(private viewService: ViewService,
    private spinner: NgxSpinnerService,
    private configService: ConfigService,
    private router: Router) { }

  ngOnInit() {
    this.setUpUsersOptions();
  }

  private setUpUsersOptions() {
    this.spinner.show();

    this.viewService.getUsers().subscribe(users => {
      this.spinner.hide();
      this.usersOptions = users;
    }, error => {
      this.spinner.hide();
      this.configService.showSnackBar(error.error.message);
    });
  }

  bg(event, leave: boolean = false) {
      for (let i = 1; i <= 5; i++) {
        if (i <= event)
          this.colored[i] = true;
        else 
          this.colored[i] = false;
    }
  }

  selectStar(event) {
    this.bg(event);
    this.starSelected = event;
  }

  addReview() {
    let reviewRequest: ReviewRequest = new ReviewRequest(this.selectedUser, this.review, this.starSelected);
    this.validator = {};
    this.validator = this.viewService.checkFields(this.validator, reviewRequest);
    if (Object.entries(this.validator).length === 0) {
      this.spinner.show();
      this.viewService.saveReview(reviewRequest).subscribe(item => {
        this.spinner.hide();
        this.configService.showSnackBar("Salvataggio avvenuto correttamente");
        this.router.navigate(['/home']);
      }, error => {
        this.spinner.hide();
        this.configService.showSnackBar(error.error.message);
      })
    }
  }

  isText(event) {
    let isText = RegularExpressionUtils.isText(event.key);
    if (!isText) {
      this.configService.showSnackBar("Carattere non consentito");
      return false;
    }

    return true;
  }

}
