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
        Schema::create('bookings', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('users_id');
            $table->uuid('products_id');
            $table->string('pickup_location');
            $table->string('drop_location');
            $table->date('pickup_date');
            $table->date('drop_date');
            $table->time('pickup_time');
            $table->string('transaction_status'); //UNPAID/PENDING/SUCCESS/FAILED
            $table->integer('price');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
