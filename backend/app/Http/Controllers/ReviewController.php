<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function addReview(Request $req) {
        $review = new Review();

        $review->user_id = $req->idUser;
        $review->review = $req->review;
        $review->rating = $req->rating;

        $review->save();
    }

    public function getReviews() {
        return Review::get();
    }
}
