<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\booking;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $booking = Booking::with('product')
            ->where('users_id', Auth::user()->id)
            ->get();
            
        return Inertia::render('UserPage/Setting', [
            'book' => $booking,
        ]);
    }
}
