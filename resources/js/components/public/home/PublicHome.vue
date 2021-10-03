<template>
    <main>

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Blog</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Blog Section ======= -->
    <section class="blog">
      <div class="container">

        <div class="row">

          <div class="col-lg-8 entries">

            <article v-for="post in posts" class="entry">

              <div class="entry-img">
                <img :src="`${post.image}`" alt="">
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">{{post.title}}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">{{post.author.auth_name}}</a></li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html">{{moment(post.created_at).format('MMMM Do YYYY, h:mm:ss a')}}</a></li>
                </ul>
              </div>

              <div class="entry-content">
                <p>
                  {{post.short_desc}}
                </p>
                <div class="read-more">
                  <router-link :to="`blog/${post.id}`">Read More</router-link>
                </div>
              </div>

            </article><!-- End blog entry -->



          </div><!-- End blog entries list -->

            <SideBarComponent/>

        </div>

      </div>
    </section><!-- End Blog Section -->

  </main><!-- End #main -->
</template>

<script>
    import SideBarComponent from '../includes/SideBar.vue'
    export default {
        name: "PublicHome.vue",
        data:{
            hello:''
        },
        components:{
            SideBarComponent
        },
        mounted(){
            console.log('test');
            this.$store.dispatch('getAllBlogs')
            // this.getcategoryblogs();
        },
        computed:{
            posts(){
                return this.$store.getters.getBlogs
            }
        },
        methods:{
            getcategoryblogs(){
                if(this.$route.params.id!=null){
                    this.$store.dispatch('getCategoryBlogs',this.$route.params.id)
                } else {
                    this.$store.dispatch('getAllBlogs')
                }
            },
        },
        watch:{
            $route(to,from){
                this.getcategoryblogs();
            }
        }
    }
</script>

<style scoped>

</style>
