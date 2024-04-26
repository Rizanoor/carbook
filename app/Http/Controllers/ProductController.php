<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::get();

        return Inertia::render('Product/Index', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {        
        return Inertia::render('Product/Create', [
            'category' => Category::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        // disini mas functionnya
        $data = $request->validated();

        $data['slug'] = Str::slug($data['name']);
        // $data['photos'] = Storage::disk('public')->put('assets/product', $request->file('photos'));

        Product::create($data);

        return redirect(route('product'))->with([
            'message' => "Product inserted successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        
        return Inertia::render('Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, string $id)
    {
        $data = $request->all();

        $data['slug'] = Str::slug($request->name);

        $item = Product::findOrFail($id);
        
        $item->update($data);

        return redirect(route('product'))->with([
            'message' => "Product updated successfully",
            'type' => 'success'
        ]);    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Product::findOrFail($id);
        $item->delete();

        return redirect()->route('product');
    }
}
