<?php

namespace App\Services;

use DateInterval;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Date;

class TokenUtils {

    public static function generateToken($email) {
        date_default_timezone_set('Europe/Rome');

        $date  = mktime(date("G")+2, date("i"), 0, date("m")  , date("d"), date("Y"));
        $dateParsed = date('d-m-Y G:i', $date);

        return $email . '-_-' . $dateParsed;
    }

}
