<?php

namespace App\Http\Controllers;

use App\Services\TokenUtils;
use App\User;
use http\Exception\RuntimeException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    public function getUsers() {
        return User::get();
    }

    public function login(Request $req) {
        $email = User::where('email', $req->email)->first();

        if ($email == null)
            return response()->json([
                'message' => 'Utente non trovato',
                'field' => 'authenticationEmail'
            ], 404);

        $email = $email->get('email')->first();
        $token = TokenUtils::generateToken($email->email);

        return response()->json([
            'token' => Crypt::encryptString($token)
        ], 200);
    }
}
