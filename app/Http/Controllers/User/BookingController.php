<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $pickupDate = new \DateTime($request->pickup_date);
        $dropDate = new \DateTime($request->drop_date);
        $duration = $dropDate->diff($pickupDate)->days + 1;

        $price = intval(preg_replace('/[^\d]/', '', $request->price));

        $totalPrice = $duration * $price;

        booking::create([
            'users_id' => Auth::user()->id,
            'products_id' => $request->products_id,
            'pickup_location' => $request->pickup_location,
            'drop_location' => $request->drop_location,
            'pickup_date' => $request->pickup_date,
            'drop_date' => $request->drop_date,
            'pickup_time' => $request->pickup_time,
            'transaction_status' => 'pending',
            'price' => $totalPrice,
        ]);

        return redirect(route('home'))->with([
            'message' => "Booking created successfully",
            'type' => 'success'
        ]);
    }
}
