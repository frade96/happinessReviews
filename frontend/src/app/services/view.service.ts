import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/entity/user';
import { environment } from 'src/environments/environment';
import { ReviewRequest } from '../components/entity/review-request';
import { Constants } from '../configs/constants';
import { RegularExpressionUtils } from '../configs/RegularExpressionUtils';
import { Review } from '../components/entity/review';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<Array<User>>(environment.url + 'api/getUsers');
  }

  public saveReview(request: ReviewRequest) {
    return this.http.post<void>(environment.url + 'api/addReview', request);
  }

  public searchViews(userId: number) {
    return this.http.get<Array<Review>>(environment.url + 'api/searchReviews/' + userId);
  }

  public checkFields(validator: {}, reviewRequest: ReviewRequest): {} {

    let emptyErrors: Array<string> = this.checkEmptyFields(reviewRequest);
    if (emptyErrors.length > 0) {
      emptyErrors.forEach(item => {
        validator[item] = Constants.errorMessage.emptyFields;
      })
    }

    let correctErrors: Array<string> = this.checkcorrectFields(reviewRequest);
    if (correctErrors.length > 0) {
      correctErrors.forEach(item => {
        validator[item] = Constants.errorMessage.wrongFields;
      })
    }

    return validator;
  }

  checkcorrectFields(reviewRequest: ReviewRequest): string[] {
    let errors: Array<string> = [];

    if (!RegularExpressionUtils.isText(reviewRequest.review)) {
      errors.push(Constants.review.review);
    }

    return errors;
  }

  checkEmptyFields(reviewRequest: ReviewRequest) {
    let errors: Array<string> = [];
    if (!reviewRequest.idUser || reviewRequest.idUser === 0) {
      errors.push(Constants.review.idUser);
    }

    if (!reviewRequest.review || reviewRequest.review.trim() === "") {
      errors.push(Constants.review.review);
    }

    return errors;
  }
}
