<template>

    <div class="goodsinfo-container">
        <!-- 商品轮播图区域 -->
        <!-- 抽离后通过 props 传递的 lbList 数组需要进行数据绑定，所以这么写 -->
        <!--<swiper :lbList="lunbotu"></swiper>-->
        <!-- 由于没有数据所以这么写 -->
        <swiper :isfull="false"></swiper>

        <!-- 商品购买区域 -->

        <!-- 有数据这么写 -->
        <!--<div class="mui-card">-->
            <!--<div class="mui-card-header">{{ goodsinfo.title }}</div>-->
            <!--<div class="mui-card-content">-->
                <!--<div class="mui-card-content-inner">-->
                    <!--<p class="price">-->
                        <!--市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>-->
                    <!--</p>-->
                    <!--<p>购买数量：<numbox></numbox></p>-->
                    <!--<p>-->
                        <!--<mt-button type="primary" size="small">立即购买</mt-button>-->
                        <!--<mt-button type="danger" size="small">加入购物车</mt-button>-->
                    <!--</p>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->


        <!-- 没数据这么写 -->
        <div class="mui-card">
            <div class="mui-card-header">商品名称</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量：<numbox></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>


        <!-- 商品参数区域 -->

        <!-- 有数据这么写 -->
        <!--<div class="mui-card">-->
            <!--<div class="mui-card-header">商品参数</div>-->
            <!--<div class="mui-card-content">-->
                <!--<div class="mui-card-content-inner">-->
                    <!--<p>商品货号：{{ goodsinfo.goods_no }}</p>-->
                    <!--<p>库存情况：{{ goodsinfo.stock_quantity }}</p>-->
                    <!--<p>上架时间：{{ nowTime |dateFormat }}</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="mui-card-footer">-->

                <!--<mt-button type="primary" size="large" plain>图文介绍</mt-button>-->
                <!--<mt-button type="danger" size="large" plain>商品评论</mt-button>-->

            <!--</div>-->
        <!--</div>-->

        <!-- 没数据就这么写 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：</p>
                    <p>库存情况：</p>
                    <p>上架时间：{{ nowTime |dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">

                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>

            </div>
        </div>








    </div>

</template>

<script>
    // 导入轮播图组件
    import swiper from '../subcomponents/swiper.vue';
    // 导入数组选择框组件
    import numbox from '../subcomponents/goodsinfor_numbox.vue';

    export default {
        data(){
            return {
                // 将路由参数对象中的 id 挂载到 data 上，方便后期调用
                id:this.$route.params.id,
                // 轮播数据
                lunbotu: [],
                // 商品信息数据
                goodsinfo:{}
            }
        },
        created(){
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods:{
            // 获取轮播数据
            getLunbotu(){
                this.$http.get('api/getthumimage/'+this.id).then(result => {
                    if(result.body.status ===0){
                        // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为轮播图组件中，只认识 item.img 不认识 item.src
                        result.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunbotu = result.body.message;
                    }
                })
            },
            getGoodsInfo(){
                // 获取商品的信息
                this.$http.get('api/goods/getinfo/'+this.id).then(result => {
                    if(result.body.status === 0){
                     this.goodsinfo = result.body.message[0];
                    }
                })
            },
            goDesc(id){
               // 点击使用编程式导航跳转到图文介绍页面
                this.$router.push({name:"goodsdesc",params:{id:id}})
            },
            goComment(id){
                // 点击使用编程式导航跳转到评论页面
                this.$router.push({name:"goodscomment",params:{id:id}})
            },
        },
        components:{
            swiper:swiper,
            numbox:numbox,
        }
    }


</script>

<style lang="less" scoped>


    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
    }
    .now_price{
        color:red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin:18px 0;
        }
    }


</style>


















