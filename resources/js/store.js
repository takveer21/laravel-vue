// import Axios from "axios"

export default{
    state:{
        blogs: []
    },
    getters:{
        getBlogs(state){
            return state.blogs
        }
    },
    actions:{
        getAllBlogs(context){
            axios.get('/api/all-blogs')
                .then((res)=>{
                    // console.log(res.data.blogs);
                    context.commit('getBlogsMutation',res.data.blogs)
                })
        }
    },
    mutations:{
        getBlogsMutation(state,payload){
            return state.blogs = payload
        }
    }
}
