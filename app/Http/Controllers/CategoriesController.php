<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Category;

class CategoriesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('categories/Index', [
            'categories' => Category::all(),
        ]);
    }

    public function store(): RedirectResponse
    {
        $category = Category::create([
            'name' => request('category'),
        ]);

        return Redirect::route('categories.index');
    }
}