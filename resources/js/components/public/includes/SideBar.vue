<template>
    <div class="col-lg-4">
        <div class="sidebar">
            <h3 class="sidebar-title">Search</h3>
            <div class="sidebar-item search-form">
                <form >
                    <input @keyup="search" type="text" v-model="keyword"/>
                    <!-- <button type="submit">
                        <i class="icofont-search"></i>
                    </button> -->
                </form>
            </div>
            <!-- End sidebar search formn-->

            <h3 class="sidebar-title">Categories</h3>
            <div class="sidebar-item categories">
                <ul>
                    <li v-for="cat,index in cats">
                        <router-link :to="`/categories/${cat.id}`">{{cat.cat_name}} <span>({{cat.length}})</span></router-link>
                    </li>

                </ul>
            </div>
            <!-- End sidebar categories-->

            <h3 class="sidebar-title">Recent Posts</h3>
            <div class="sidebar-item recent-posts">
                <div class="post-item clearfix" v-for="post in posts">
                    <img :src="`${post.image}`" alt="" />
                    <h4>
                        <router-link :to="`/blog/${post.id}`">{{post.title}}</router-link>
                    </h4>
                    {{moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}}
                </div>


            </div>
            <!-- End sidebar recent posts-->

            <h3 class="sidebar-title">Tags</h3>
            <div class="sidebar-item tags">
                <ul>
                    <li v-for="tag in tags"><a href="#">{{tag.tag_name}}</a></li>
                </ul>
            </div>
            <!-- End sidebar tags-->
        </div>
        <!-- End sidebar -->
    </div>
    <!-- End blog sidebar -->
</template>

<script>
export default {
    name: "SideBar.vue",
    data(){
        return {
            keyword:""
        }
    },
    mounted(){
        this.$store.dispatch('getAllCategories')
        this.$store.dispatch('getAllLatestBlogs')
        this.$store.dispatch('getAllTags')
    },
    computed:{
        cats(){
            return this.$store.getters.getCategories
        },
        posts(){
            return this.$store.getters.getLatestBlogs
        },
        tags(){
            return this.$store.getters.getTags
        }
    },
    methods:{
        search(){
            this.$store.dispatch('searchBlogs',this.keyword)
        }
    }
};
</script>

<style scoped></style>
