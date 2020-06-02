import Vue from "vue"
import Vuerouter from "vue-router"
Vue.use(Vuerouter)

import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Message from "../views/Message.vue"
import News from "../views/News.vue"
import MessageDetail from "../views/MessageDetail.vue"
import NewsDetail from "../views/NewsDetail.vue"
export default new Vuerouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/message',
                    component:Message,
                    children:[
                        {
                            path:'/home/message/messagedetail:msgId',
                            component: MessageDetail,
                            // props:true //第二种写法，用的不多,可以把params参数作为子组件的属性去使用
                            props(route){
                                return {
                                    msgId: route.params.msgId,
                                    msgContent:route.query.msgContent
                                }
                            },
                             name: 'msgInfo'
                        },
                    ]
                },
                {
                    path:'/home/news',
                    component:News,
                    children: [
                        {
                            path: '/home/message/newsdetail:newsId',
                            component: NewsDetail,
                            props(route){
                                return {
                                    newsId: route.params.newsId,
                                    newContent: route.query.newContent
                                }
                            },
                            name:'msgname'
                        }
                    ]
                },
                {
                    path:'/',
                    redirect:'/home/message'
                }
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})