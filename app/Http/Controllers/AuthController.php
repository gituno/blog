<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
	public function register(Request $request)
    {
    	$input = $request->only([
    		'name', 'email', 'password', 'password_confirmation'
    	]);

    	$val = Validator::make($input, [
    		'name' => 'required|string',
    		'email' => 'required|email|unique:users',
    		'password' => 'required|confirmed',
    	]);

    	if ($val->fails()) {
    		return response()->json([
    			'errors' => $val->errors()
    		], 400);
    	}

    	$input['password'] = bcrypt($input['password']);

    	$user = User::create($input);

    	return response()->json($user, 200);
    }
	
    public function login(Request $request)
    {
    	$input = $request->only([
    		'email', 'password'
    	]);

    	$val = Validator::make($input, [
    		'email' => 'required|email',
    		'password' => 'required'
    	]);

    	if ($val->fails()) {
    		return response()->json([
    			'errors' => $val->errors()
    		], 400);
    	}

    	if (Auth::attempt($input)) {
    		$user = Auth::user();
    		$token = $user->createToken('dailyblog')->accessToken;

    		return response()->json([
                'token' => $token
            ], 200);
    	}

    	return response()->json([
    		'message' => 'login failed'
    	], 400);
    }

    public function logout()
    {
    	$user = Auth::user();
    	$token = $user->token();
    	$token->revoke();

    	return response()->json([
    		'message' => 'logout success'
    	], 200);
    }

    public function details(Request $request)
    {
        return response()->json($request->user(), 200);
    }
}
