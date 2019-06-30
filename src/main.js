// 入口文件
import Vue from 'vue';
// 导入 app 根组件
import app from './app.vue';
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter);


// 导入 mint-ui 组件
import Mint from 'mint-ui';
Vue.use(Mint);
// 导入 mui 的样式表 注意需要设置 文字格式在配置文件中
import './lib/mui/css/mui.css';
// 导入 icons-extra.css 的样式表
import './lib/mui/css/icons-extra.css';
// 1.3 导入自己的 router.js 路由模块
import router from './router.js';

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource);




var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app),
    // 1.4 挂载路由对象到 VM 实例上
    router
});






