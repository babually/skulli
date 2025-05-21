<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teachers = Teacher::all();
        return Inertia::render("Teachers/Index", compact("teachers"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Teachers/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Teacher::create(
            $request->validate([
                'fullName' => ['required', 'max:255'],
                'teacher_id' => ['required','string'],
                'gender' =>  ['required','string'],
                'marital' => ['required','string'],
                'email' => ['required','string'],
                'phone' => ['required', 'numeric'],
                'address' => ['required','string'],
                'dob' => ['required', 'string'],
                'religion' => ['nullable', 'string'],
                'nationality' => ['nullable','string'],
                'education' => ['required','string'],
                'qualification' => ['required','string'],
                'experience' => ['required','numeric'],
                'joinedDate' => ['nullable', 'date'],

            ])
        );

        return to_route('teachers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        return Inertia::render('Teachers/Show', [
            'teacher'=> $teacher
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        return inertia::render('Teachers/Edit', compact('teacher'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teacher $teacher)
    {
        $request->validate([
            'fullName' => ['required', 'max:255'],
            'teacher_id' => ['required','string'],
            'gender' =>  ['required','string'],
            'marital' => ['required','string'],
            'email' => ['required','string'],
            'phone' => ['required', 'numeric'],
            'address' => ['required','string'],
            'dob' => ['required', 'string'],
            'religion' => ['nullable', 'string'],
            'nationality' => ['nullable','string'],
            'education' => ['required','string'],
            'qualification' => ['required','string'],
            'experience' => ['required','numeric'],
            'joinedDate' => ['nullable', 'date'],
        ]);

        $teacher->update([
            'fullName' => $request->input('fullName'),
            'teacher_id' => $request->input('teacher_id'),
            'gender' => $request->input('gender'),
            'marital' => $request->input('marital'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'dob' => $request->input('dob'),
            'religion' => $request->input('religion'),
            'nationality' => $request->input('nationality'),
            'education' => $request->input('education'),
            'qualification' => $request->input('qualification'),
            'experience' => $request->input('experience'),
            'joinedDate' => $request->input('joinedDaste'),
        ]);

        return redirect()->route('teachers.index')->with('message', 'Teacher updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return to_route('teachers.index', $teacher)->with(key: 'message', value:'Teacher deleted successfully');
        // return redirect()->route('teachers.index')->with('message', 'Teacher deleted successfully');
    }
}
