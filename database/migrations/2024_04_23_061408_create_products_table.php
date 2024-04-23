<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('categories_id');
            $table->string('name');
            $table->string('slug');
            $table->string('photos')->nullable();
            $table->string('transmission');
            $table->string('seats');
            $table->string('fuel');
            $table->longText('long_description');
            $table->integer('price');
            $table->string('time');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
