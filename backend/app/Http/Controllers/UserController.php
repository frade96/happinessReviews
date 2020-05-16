<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers() {
        return User::get();
    }

    public function login(Request $req) {
        return User::where('email', $req->email)->get();
    }
}
