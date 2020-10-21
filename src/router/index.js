import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index'
import Search from '../pages/Search'
import OldChange from '../pages/OldChange'

Vue.use(Router)


let router = new Router({
    routes:[
        {
            path:'/',
            redirect:"/Index"
        },
        {
            name:'Index',
            path:'/Index',
            component:Index
        },
        {
            name:'Search',
            path:'/Search',
            component:Search
        },
        {
            name:'OldChange',
            path:'/OldChange',
            component:OldChange
        }
    ]
})

export default router