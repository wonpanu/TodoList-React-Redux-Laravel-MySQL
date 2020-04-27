<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class RegistrationController extends Controller
{
    public function index() {
        return User::all();
    }

    public function show($id) {
        return User::find($id);
    }

    public function store(Request $request) {
        User::create($request->all());

        return User::all();
    }

    public function  update(Request $request, $id) {
        $task = User::findOrFail($id);
        $task->update($request->all());

        return User::all();
    }

    public function  delete(Request $request, $id) {
        $task = User::findOrFail($id);
        $task->delete();

        return User::all();
    }
}
