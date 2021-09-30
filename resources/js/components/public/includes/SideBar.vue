<template>
    <div class="col-lg-4">
        <div class="sidebar">
            <h3 class="sidebar-title">Search</h3>
            <div class="sidebar-item search-form">
                <form action="">
                    <input type="text" />
                    <button type="submit">
                        <i class="icofont-search"></i>
                    </button>
                </form>
            </div>
            <!-- End sidebar search formn-->

            <h3 class="sidebar-title">Categories</h3>
            <div class="sidebar-item categories">
                <ul>
                    <li v-for="cat in cats">
                        <a href="#">{{cat.cat_name}} <span>(25)</span></a>
                    </li>

                </ul>
            </div>
            <!-- End sidebar categories-->

            <h3 class="sidebar-title">Recent Posts</h3>
            <div class="sidebar-item recent-posts">
                <div class="post-item clearfix" v-for="post in posts">
                    <img :src="`${post.image}`" alt="" />
                    <h4>
                        <a href="blog-single.html"
                            >{{post.title}}</a
                        >
                    </h4>
                    <time datetime="2020-01-01">{{post.created_at}}</time>
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
    mounted(){
        this.$store.dispatch('getAllCategories')
        this.$store.dispatch('getAllBlogs')
        this.$store.dispatch('getAllTags')
    },
    computed:{
            cats(){
                return this.$store.getters.getCategories
            },
            posts(){
                return this.$store.getters.getBlogs
            },
            tags(){
                return this.$store.getters.getTags
            }
    }
};
</script>

<style scoped></style>
