export class ReviewRequest {

    idUser: number;
    review: string;
    rating: number;

    constructor(idUser: number, review: string, rating: number) {
        this.idUser = idUser;
        this.review = review;
        this.rating = rating;
    }
}