<?php

namespace App\Http\Controllers;

use App\Models\booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingListController extends Controller
{
    public function index()
    {
        $booking = booking::with(['product', 'user'])->get();

        return Inertia::render('BookingList/Index', [
            'booking' => $booking,
        ]);
    }
}
