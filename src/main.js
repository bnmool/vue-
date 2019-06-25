// 入口文件
import Vue from 'vue';
// 导入 app 根组件
import app from './app.vue';
// 导入 mint-ui 组件
import Mint from 'mint-ui';
Vue.use(Mint);
// 导入 mui 的样式表 注意需要设置 文字格式在配置文件中
import './lib/mui/css/mui.css';


var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app),
});