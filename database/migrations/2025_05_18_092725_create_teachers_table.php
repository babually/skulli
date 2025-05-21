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
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('fullName');
            $table->binary('image');
            $table ->string('teacher_id');
            $table->string('gender');
            $table->string('marital');
            $table->string('email')->unique();
            $table->integer(column: 'phone')->nullable();
            $table->string('address')->nullable();
            $table->date('dob')->nullable();
            $table->string('religion')->nullable();
            $table->string('nationality')->nullable();
            $table->string('education')->nullable();
            $table->string('qualification')->nullable();
            $table->string('experience')->nullable();
            $table->date('joinedDate')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
