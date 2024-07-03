<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class booking extends Model
{
    // use HasFactory;

    use SoftDeletes, HasUuids;

    protected $fillable = [
        'users_id', 
        'products_id', 
        'pickup_location',
        'drop_location', 
        'pickup_date' , 
        'drop_date',
        'pickup_time', 
    ];

    protected $hidden = [];

    public function product()
    {
        return $this->belongsTo(Product::class, 'products_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id', 'id');
    }
}
