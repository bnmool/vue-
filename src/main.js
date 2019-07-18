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
import 'mint-ui/lib/style.css'
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


// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);



// 设置请求的根路径
// 全局设置 post 时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;



// 导入 moment 时间插件
import moment from 'moment';
// 有数据可在模板数据后面通过管道符 | dateFormat 格式化时间
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY年MM月DD日 HH:mm:ss') {
    return moment(dataStr).format(pattern);
});
// 没有数据就获取当天时间并格式化



// 注册 Vuex
import Vuex from 'vuex'
Vue.use(Vuex);


// 每次进入网站，都会调用 main.js 在调用的时候，先从本地存储中，把购物车的数据读出来放到 store 中
var car = JSON.parse(localStorage.getItem('car')||'[]');


var store = new Vuex.Store({
    state:{
        // this.$store.state.****
        // 将购物车中的商品中的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象，可以暂时将商品对象设计成 { id: 商品的 id, count: 要购买的数量, price: 商品的单价, selected: false }
        car:car,
    },
    mutations:{
        // this.$store.commit('方法名称'，'按需传递唯一的参数')
        addToCar(state, goodsinfo){
            // 点击加入购物车，把商品信息，保存到 store 中的 car 上
            // 分析：
            // 1. 如果购物车中，之前就已经有这个对应的商品了，那么只需要更新数量
            // 2. 如果没有，则直接把商品数据 push 到 car 中即可

            // 假设在购物车中没有找到对应的商品
            var flag = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true
                }
            });


            // 如果最终循环完毕得到的还是 flag = false ,则把商品数据直接 push 到购物车中
            if (!flag) {
                state.car.push(goodsinfo)
            }

            // 当更新 car 之后，把 cat 数组，储存到本地的 localStorage 中
            localStorage.setItem('car' ,JSON.stringify(state.car));

        },
        updateGoodsInfo(state,goodsinfo){
            // 修改购物车中商品的数量值
            // 分析：
            state.car.some(item => {
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true
                }
            });

            // 当修改完商品的数量，把最新的购物车数据保存到，本地储存中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFormCar(state, id){
            // 根据 ID 从 store 中的购物车中删除对应的那条商品数据
            state.car.some((item,i)=> {
                if(item.id == id){
                    state.car.splice(i,1)
                    return true
                }
            } );
            // 将删除完毕后的，最新的购物车数据同步到本地数据中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info){
            state.car.some(item=>{
              if(item.id == info.id){
                  item.selected = info.selected;
              }
            });
            // 把最新的所有购物车商品状态开关同步到 store中
            localStorage.setItem('car' , JSON.stringify(state.car))
        }

    },
    getters:{
        // this.$store.getters
        // 相当于计算属性，也相当于 filters
        getAllCount(state){
            var c = 0;
            var stock_quantity = 0;
            state.car.forEach(item => {
                c += item.count;
                stock_quantity = item.stock_quantity;
                return stock_quantity;
            });

            if (c<=stock_quantity){
                return c ;
            } else {
                return stock_quantity;
            }

        },
        getGoodsCount(state){
            var o = {};
            state.car.forEach( item=> {
                o[item.id] = item.count;
            } );
            return o;

        },
        getGoodsSelected(state){
            var o = [];
            state.car.forEach(item => {
                o[item.id] = item.selected;
            });
            return o;
        },
        getGoodsCountAndAmount(state){
            var o = {
                // 勾选的数量
                count:0,
                // 勾选的总价
                amount:0
            };
            state.car.forEach(item => {
                if(item.selected){
                    o.count += item.count;
                    o.amount +=item.price*item.count;
                }
            })

        }
    }
});



var vm = new Vue({
    el: '#app',
    data: {
        nowTime : new Date()
    },
    methods: {},
    render: c => c(app),
    // 1.4 挂载路由对象到 VM 实例上
    router,
    store // 挂载 store 状态管理对象
});






