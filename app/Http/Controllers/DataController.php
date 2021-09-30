<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function allBlogs(){
        $blogs = Blog::with('author')->get();
        // return $blogs;
        return response()->json(['blogs'=>$blogs],200);
    }

    public function singleBlog($id){
        $blog = Blog::with('author','category','blogTag.tag')->find($id);
        return response()->json(['blog'=>$blog],200);
    }

    public function allCategories(){
        $categories = Category::all();
        // return $categories;
        return response()->json(['categories'=>$categories],200);
    }

    public function allTags(){
        $tags = Tag::all();
        return response()->json(['tags'=>$tags],200);
    }
}
