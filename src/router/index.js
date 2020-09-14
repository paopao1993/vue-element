import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login.vue'
import Navi from '@/components/Navi.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {   path: '/', 
            redirect: '/login' 
        },
        {
            path: '/login',
            name:'login',
            component: Login
        },
        {
            path: '/navi',
            component: Navi,
            name:'Navi',
            children:[
                {
                    path: '/navi/page1',
                    component: Page1,
                    name:'Page1',
                }, 
                {
                    path: '/navi/page2',
                    component: Page2
                },
            ]
        },

        //通配
        {
            path: '/*',
            component:Page3 //一般匹配的是404页面
        }
    ]
})

export default router;