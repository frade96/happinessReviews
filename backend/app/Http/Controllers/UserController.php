<?php

namespace App\Http\Controllers;

use App\Services\TokenUtils;
use App\User;
use http\Exception\RuntimeException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    public function getUsers(Request $req) {

        $email = TokenUtils::getEmail($req->header('APP-KEY'));
        return User::where('email', '!=', $email)->get();
    }

    public function login(Request $req) {
        $user = User::where('email', $req->email)->first();

        if ($user == null)
            return response()->json([
                'message' => 'Utente non trovato',
                'field' => 'authenticationEmail'
            ], 404);

        $email = $user->email;
        return response()->json([
            'token' => TokenUtils::generateToken($email)
        ], 200);

    }
}
