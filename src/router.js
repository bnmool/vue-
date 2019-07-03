// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue';

import memberContainer from './components/tabbar/memberContainer.vue';

import shopcarContainer from './components/tabbar/shopcarContainer.vue';

import searchContainer from './components/tabbar/searchContainer.vue';

import newsList from './components/news/newsList.vue'

import newsInfo from './components/news/newsInfo.vue'



// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        // 配置路由规则
        { path: '/', redirect: '/home' },
        { path:'/home', component: homeContainer },
        { path:'/member', component: memberContainer },
        { path:'/shopcar', component: shopcarContainer },
        { path:'/search', component: searchContainer },
        { path:'/home/newsList', component: newsList },
        // 如果有数据 newsInfo 根据 id 来创建对应路由可以这么写
        // { path:'/home/newsInfo:id', component: newsInfo },
        { path:'/home/newsInfo', component: newsInfo }
    ],
    // 覆盖默认的路由高亮的类，默认的类叫 router-link-active
    linkActiveClass:'mui-active'
});

// 把路由对象暴露出去
export default  router;
