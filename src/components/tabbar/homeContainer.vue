<template>

    <div>
        <!-- 轮播图区域 -->
        <!-- 抽离后通过 props 传递的 lbList 数组需要进行数据绑定，所以这么写 -->
        <!--<swiper :lbList="lbList"></swiper>-->
        <!-- 由于没有数据所以这么写 -->
        <swiper :isfull="true"></swiper>


        <!-- 未抽离的时候有数据的写法 -->
        <!--<mt-swipe :auto="4000">-->
            <!--&lt;!&ndash; 在组组件中使用 v-for 循环的话，一定要使用 key &ndash;&gt;-->
            <!--&lt;!&ndash; 有数据可以这么写 &ndash;&gt;-->
            <!--&lt;!&ndash;<mt-swipe-item v-for="item in lbList" :key="item.url">&ndash;&gt;-->
            <!--&lt;!&ndash;<img :src="item.img" alt="">&ndash;&gt;-->
            <!--&lt;!&ndash;</mt-swipe-item>&ndash;&gt;-->
        <!--</mt-swipe>-->


        <!-- 九宫格改成六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newsList">
                    <img src="../../img/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photolist">
                    <img src="../../img/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodslist">
                    <img src="../../img/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../img/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../img/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                    <img src="../../img/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>


        </ul>


    </div>


</template>


<style lang="less" scoped>

    div {

        .mui-grid-view.mui-grid-9 {
            background: #fff;
            border: none;

            img {
                width: 40px;
                height: 40px;
            }

            .mui-table-view-cell {
                border: none;

                .mui-media-body {
                    font-size: 16px;
                    line-height: 16px;
                    height: 24px;
                }
            }
        }


    }


</style>


<script>

    // 导入 mint-ui 组件
    import {Toast} from 'mint-ui';
    // 导入轮播图组件
    import swiper from '../subcomponents/swiper.vue'

    export default {
        data() {
            return {
                // 有数据就这么写，暂时没有
                lbList: [
                    // 保存轮播图的数组
                ]
            }
        },
        created() {
            // 有数据就在 created 生命函数渲染
            this.getLb();
        },
        methods: {
            // 有数据就在这里定义一个方法获取特定的数据进行判断和
            getLb() {
                // 获取轮播数据的方法
                this.$http.get('api/getlunbo').then(result => {
                    if (result.body.status === 0) {
                        // 成功
                        this.lbList = result.body.message;
                    } else {
                        // 失败的
                        Toast('加载轮播图失败');
                    }
                });
            }
        },
        components:{
            swiper:swiper,
        }
    }

</script>









