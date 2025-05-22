<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TeacherController;



Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Route::get('/teachers', [TeacherController::class, 'index'])->name('teachers.index');
    // Route::post('/teachers', [TeacherController::class, 'store'])->name('teachers.store');
    // Route::get('/teachers/create', [TeacherController::class, "create"])->name('teachers.create');
    // Route::get('/teachers/{teacher}/edit', [TeacherController::class, "edit"])->name('teachers.edit');
    // Route::put('/teachers/{teacher}', [TeacherController::class, "update"])->name('teachers.update');
    // Route::delete('/teachers/{teacher}', [TeacherController::class, "destroy"])->name('teachers.destroy');
});

Route::resource('teachers', TeacherController::class)
    ->middleware('auth');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
