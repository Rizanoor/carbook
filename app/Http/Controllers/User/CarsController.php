<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarsController extends Controller
{
    public function index()
    {
        $product = Product::with('category')->get();

        return Inertia::render('UserPage/Cars', [
            'products' => $product,
        ]);
    }

    public function detail($slug)
    {
        $product = Product::where('slug', $slug)->with('category')->firstOrFail();
        
        return Inertia::render('UserPage/CarsDetail', [
            'product' => $product,
        ]);
    }
}
