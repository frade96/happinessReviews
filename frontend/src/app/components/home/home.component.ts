import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/configs/constants';
import { ViewService } from 'src/app/services/view.service';
import { User } from '../entity/user';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigService } from 'src/app/services/config.service';
import { Review } from '../entity/review';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  validator = {};
  constants = Constants;
  usersOptions: Array<User> = [];
  name: string = '';
  email: string = '';
  reviewsOption: Array<Review> = [];
  selectedUser: User = new User();
  stars: Array<object> = [
    {id: 1, notColored: 'star_border', colored: 'star'},
    {id: 2, notColored: 'star_border', colored: 'star'},
    {id: 3, notColored: 'star_border', colored: 'star'},
    {id: 4, notColored: 'star_border', colored: 'star'},
    {id: 5, notColored: 'star_border', colored: 'star'},
  ];

  constructor(private viewService: ViewService, 
    private spinner: NgxSpinnerService,
    private configService: ConfigService) { }

  ngOnInit() {
    this.setUpUserOptions();
  }

  setUpUserOptions() {
    this.spinner.show();
    this.viewService.getUsers().subscribe(item => {
      this.spinner.hide();
      this.usersOptions = item;
    }, error => {
      this.spinner.hide();
      this.configService.showSnackBar(error.error.message);
    })
  }

  searchReviews(event) {
    this.spinner.show();
    this.viewService.searchViews(event.value.id).subscribe(item => {
      this.spinner.hide();
      this.reviewsOption = item;
    }, error => {
      this.spinner.hide();
      this.configService.showSnackBar(error.error.message);
    })
  }

}
