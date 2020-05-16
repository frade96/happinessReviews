<?php

namespace App\Http\Middleware;

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
        if ($token != 'TOKEN') {
            return response()->json([
                'message' => 'Non autorizzato'
            ], 401);
        }
        return $next($request);
    }
}
