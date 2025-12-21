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
    Schema::create('reservations', function (Blueprint $table) {
        $table->id();
        $table->string('name');              // Full Name
        $table->string('phone');             // Phone Number
        $table->string('email');             // Email Address
        $table->integer('guests');           // Number of Guests
        $table->date('date');                // Date
        $table->string('time');              // Time
        $table->text('special_requests')->nullable(); // Special Requests (ممكن يكون خاوي)
        $table->string('status')->default('pending'); // Status (Pending فالأول)
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
