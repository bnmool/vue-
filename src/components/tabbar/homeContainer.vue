<template>

    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组组件中使用 v-for 循环的话，一定要使用 key -->
            <!-- 有数据可以这么写 -->
            <!--<mt-swipe-item v-for="item in lbList" :key="item.url">-->
            <!--<img :src="item.img" alt="">-->
            <!--</mt-swipe-item>-->

            <mt-swipe-item>

                <img src="../../img/1.jpg" alt="">

            </mt-swipe-item>


            <mt-swipe-item>

                <img src="../../img/2.jpg" alt="">

            </mt-swipe-item>

            <mt-swipe-item>

                <img src="../../img/3.jpg" alt="">

            </mt-swipe-item>

        </mt-swipe>


        <!-- 九宫格改成六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>


            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <img src="../../img/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>


        </ul>


    </div>


</template>


<style lang="less" scoped>

    div {
        .mint-swipe {
            height: 540px;

            .mint-swipe-item {
                &:nth-child(1) {
                    background: #00ccff;
                }

                &:nth-child(2) {
                    background: #00cc00;
                }

                &:nth-child(3) {
                    background: #ffcc33;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

            }
        }

        .mui-grid-view.mui-grid-9{
            background: #fff;
            border: none;
            img{
                width: 60px;
                height: 60px;
            }
            .mui-table-view-cell{
                border: none;
                .mui-media-body{
                    font-size: 20px;
                    line-height: 20px;
                    height: 24px;
                }
            }
        }






    }


</style>


<script>

    // 导入 mint-ui 组件
    import {Toast} from 'mint-ui';

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
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
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
    }

</script>









