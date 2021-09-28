<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function allBlogs(){
        $blogs = Blog::with('author')->get();
        // return $blogs;
        return response()->json(['blogs'=>$blogs],200);
    }
}
