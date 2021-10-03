import PublicHomeComponent from './components/public/home/PublicHome'
import SingleBlogComponent from './components/public/single-blog/SingleBlogComponent'

export const routes = [
    {
        path: '/',
        component: PublicHomeComponent
    },
    {
        path: '/blog/:id',
        component: SingleBlogComponent
    },
    {
        path: '/categories/:id',
        component: PublicHomeComponent
    },
    // { path: '/bar', component: Bar }
]
