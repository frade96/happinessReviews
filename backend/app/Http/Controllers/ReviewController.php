<?php

namespace App\Http\Controllers;

use App\ChartData;
use App\RankedList;
use App\Review;
use App\User;
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

    public function searchReviews($id) {
        return Review::where('user_id', '=', $id)->orderBy('rating', 'desc')->get();
    }

    public function rankedList() {
        $users = User::get();
        $rankedList = array();
        foreach($users as $user) {
            $ratingAvg = Review::where('user_id', $user->id)->avg('rating');
            $ranked = new RankedList();
            $ranked->name = $user->name;
            $ranked->email = $user->email;
            $ranked->rating = round($ratingAvg);
            array_push($rankedList, $ranked);
        }

        usort($rankedList, array($this, 'comparator'));
        return $rankedList;
    }

    public function getDataToChart() {
        $chartDataList = $this->setUpDataChart();
        foreach ($chartDataList as $chartData) {
            $ratingAvg = Review::whereDate('created_at', $chartData->date)->avg('rating');
            $chartData->rating = round($ratingAvg);
        }
        return $chartDataList;
    }

    function comparator($object1, $object2) {
        return $object1->rating < $object2->rating;
    }

    function setUpDataChart() {
        $chartDataList = array();
        for ($i = 15; $i >= 0; $i--) {
            $date = mktime(0, 0, 0, date("m")  , date("d") - $i, date("Y"));
            $dateParsed = date('Y-m-d', $date);
            $chartData = new ChartData();
            $chartData->date = $dateParsed;
            array_push($chartDataList, $chartData);
        }

        return $chartDataList;
    }
}
