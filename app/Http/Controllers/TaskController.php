<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function show($id)
    {
        return Task::find($id);
    }

    public function store(Request $request)
    {
        $user = auth()->user();
        Task::create([
            'todo' => $request->title,
            'user_id' => $user->id,
        ]);

        return Task::all();
    }

    public function  update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->update($request->all());

        return Task::all();
    }

    public function  delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return Task::all();
    }
}
