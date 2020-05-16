<?php

namespace App\Services;

use App\User;
use DateInterval;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Date;

class TokenUtils {

    public static function generateToken($email) {
        date_default_timezone_set('Europe/Rome');

        $date  = mktime(date("G")+2, date("i"), 0, date("m")  , date("d"), date("Y"));
        $dateParsed = date('d-m-Y G:i', $date);

        return Crypt::encryptString($email . '-_-' . $dateParsed);
    }

    public static function validateToken($token){
        $decToken = Crypt::decryptString($token);
        $decToken = explode("-_-", $decToken);
        $user = User::where('email', $decToken[0])->get();
        if (!$user)
            return false;

        return true;
    }

    public static function getEmail($token){
        $decToken = Crypt::decryptString($token);
        $decToken = explode("-_-", $decToken);
        return $decToken[0];
    }

}
