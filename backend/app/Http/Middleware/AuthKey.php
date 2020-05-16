<?php

namespace App\Http\Middleware;

use App\Services\TokenUtils;
use Closure;

class AuthKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header('APP-KEY');
        $validatedToken = TokenUtils::validateToken($token);
        if (!$validatedToken) {
            return response()->json([
                'message' => 'Non autorizzato'
            ], 401);
        }
        return $next($request);
    }
}
