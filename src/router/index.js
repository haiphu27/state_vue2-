import Vue from 'vue';
import Router from 'vue-router';
import Layout from "@/Layout";

Vue.use(Router)

const constantsRouter=[
    {
        path: '/',
        component:Layout,
        children:[
            {
                path: '/',
                component:()=>import('@/views/Home/index'),
            }
        ]
    }

]


const createRouter=()=>new Router({
  scrollBehavior:()=>({y:0}),
  routes:constantsRouter
})

const router = createRouter()


export default router
