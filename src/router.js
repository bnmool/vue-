// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue';

import memberContainer from './components/tabbar/memberContainer.vue';

import shopcarContainer from './components/tabbar/shopcarContainer.vue';

import searchContainer from './components/tabbar/searchContainer.vue';

import newsList from './components/news/newsList.vue';

import newsInfo from './components/news/newsInfo.vue';
import photolist from './components/photos/photolist.vue';
import photoInfo from './components/photos/photoInfo.vue';

import goodsList from './components/goods/goodsList.vue';
import goodsInfo from './components/goods/goodsInfo.vue';
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'



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
        { path:'/home/newsInfo', component: newsInfo },
        { path:'/home/photolist', component: photolist },
        { path:'/home/photoInfo', component: photoInfo },
        { path:'/home/goodslist', component: goodsList },
        { path:'/home/goodsInfo', component: goodsInfo , name:'goodsinfo'},
        { path:'/home/goodsDesc', component: goodsDesc , name:'goodsdesc'},
        { path:'/home/goodsComment', component: goodsComment , name:'goodscomment'},

    ],
    // 覆盖默认的路由高亮的类，默认的类叫 router-link-active
    linkActiveClass:'mui-active'
});

// 把路由对象暴露出去
export default  router;
