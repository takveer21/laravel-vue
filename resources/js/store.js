// import Axios from "axios"

export default{
    state:{
        blogs: [],
        blog:[],
        categories:[],
        tags:[],
        latestblogs:[]
    },
    getters:{
        getBlogs(state){
            return state.blogs
        },
        getLatestBlogs(state){
            return state.latestblogs
        },
        getBlog(state){
            return state.blog
        },
        getCategories(state){
            return state.categories
        },
        getTags(state){
            return state.tags
        },
    },
    actions:{
        getAllBlogs(context){
            axios.get('/api/all-blogs')
                .then((res)=>{
                    // console.log(res.data.blogs);
                    context.commit('getBlogsMutation',res.data.blogs)
                })
        },
        getSingleBlog(context,payload){
            axios.get('/api/single-blog/'+payload)
                .then((res)=>{
                    // console.log(res.data.blog);
                    context.commit('getBlogMutation',res.data.blog)
                })
        },
        getAllCategories(context){
            axios.get('/api/all-categories')
                .then((res)=>{
                    // console.log(res.data.categories);
                    context.commit('getCatMutation',res.data.categories)
                })
        },
        getAllTags(context){
            axios.get('/api/all-tags')
            .then((res)=>{
                // console.log(res.data.tags);
                context.commit('getTagMutation',res.data.tags)
            })
        },
        getCategoryBlogs(context,payload){
            axios.get('/api/category-blog/'+payload)
                .then((res)=>{
                    console.log(res.data.blogs);
                    context.commit('getCatBlogMutation',res.data.blogs)
                })
        },
        getAllLatestBlogs(context){
            axios.get('/api/all-latest-blogs')
                .then((res)=>{
                    console.log(res.data.blogs);
                    context.commit('getLatestBlogsMutation',res.data.blogs)
                })
        },
        searchBlogs(context,payload){
            axios.get('/api/search-blog?s='+payload)
                .then((res)=>{
                    console.log(res.data.blogs);
                    context.commit('getSearchBlogMutation',res.data.blogs)
                })
        }
    },
    mutations:{
        getBlogsMutation(state,payload){
            return state.blogs = payload
        },
        getBlogMutation(state,payload){
            return state.blog = payload
        },
        getCatMutation(state,payload){
            return state.categories = payload
        },
        getTagMutation(state,payload){
            return state.tags = payload
        },
        getCatBlogMutation(state,payload){
            return state.blogs = payload
        },
        getLatestBlogsMutation(state,payload){
            return state.latestblogs = payload
        },
        getSearchBlogMutation(state,payload){
            return state.blogs = payload
        }
    }
}
