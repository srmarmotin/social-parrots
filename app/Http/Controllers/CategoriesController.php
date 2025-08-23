<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoriesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('categories/Index', [
            'categories' => Category::all(),
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $category = Category::findOrFail($id);
        return response()->json($category, 200);
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        $thumbnailPath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();

            // Save original image
            $imagePath = $image->storeAs('categories', $imageName, 'public');

            // Create thumbnail
            $thumbnailPath = 'categories/thumbnails/' . $imageName;
            $thumbnail = Image::make($image->getRealPath())->resize(150, 150);
            Storage::disk('public')->put($thumbnailPath, (string) $thumbnail->encode());

        }

        $category = Category::create([
            'name' => $request->input('name'),
            'image_url' => $imagePath,
            'thumbnail_url' => $thumbnailPath,
        ]);

        return Redirect::route('categories.index');
    }
}