<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index()
    {
        $product = Product::count();

        return Inertia::render('Dashboard', [
            'product' => $product,
        ]);
    }
}
