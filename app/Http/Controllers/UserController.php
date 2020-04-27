<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class RegistrationController extends Controller
{
    public function  update(Request $request, $id)
    {
        $task = User::findOrFail($id);
        $task->update($request->all());
        return "SUCCESS";
    }

    public function  delete(Request $request, $id)
    {
        $task = User::findOrFail($id);
        $task->delete();
        return "SUCCESS";
    }
}
