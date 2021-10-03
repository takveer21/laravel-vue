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

    public function categoryBlog($id){
        $blogs = Blog::with('author','category')->where('cat_id',$id)->get();
        return response()->json(['blogs'=>$blogs],200);
    }

    public function allLatestBlogs(){
        $blogs = Blog::with('author')->orderBy('id','desc')->take(3)->get();
        return response()->json(['blogs'=>$blogs],200);
    }

    public function searchBlogs(){
        $search = \Request::get('s');
        $blogs = Blog::with('author')
                ->where('title','LIKE',"%$search%")
                ->get();
        return response()->json(['blogs'=>$blogs],200);
    }
}
