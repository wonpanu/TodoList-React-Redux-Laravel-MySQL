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
        Task::create([
            'title' => $request->title,
            'user_id' => auth()->id(),
        ]);

        return Task::all();
    }

    public function  update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        if ($task->user_id == auth()->id()) {
            $task->update($request->all());
            return Task::all();
        } else {
            return response()->json(['message' => 'Permission denied']);
        }
    }

    public function  delete(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        if ($task->user_id == auth()->id()) {
            $task->delete();
            return Task::all();
        } else {
            return response()->json(['message' => 'Permission denied']);
        }
    }
}
