import PublicHomeComponent from './components/public/home/PublicHome'
import SingleBlogComponent from './components/public/single-blog/SingleBlogComponent'

export const routes = [
    {
        path: '/',
        component: PublicHomeComponent
    },
    {
        path: '/blog',
        component: SingleBlogComponent
    },
    // { path: '/bar', component: Bar }
]
