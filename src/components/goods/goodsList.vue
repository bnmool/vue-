<template>

    <div class="goods-list">

        <router-link to="goodsInfo" class="goods-item" tag="div">
            <img src="../../img/1.jpg" alt="">
            <h1 class="title">哈哈哈哈哈</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1111</span>
                    <span class="old">￥1500</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>

        <router-link to="goodsInfo" class="goods-item" tag="div">
            <img src="../../img/1.jpg" alt="">
            <h1 class="title">哈哈哈哈哈</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1111</span>
                    <span class="old">￥1500</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>

        <router-link to="/home/goodsInfo" class="goods-item" tag="div">
            <img src="../../img/1.jpg" alt="">
            <h1 class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1111</span>
                    <span class="old">￥1500</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>












        <!-- 在网页中，有两种跳转方式 -->
        <!-- 方式1：使用 a 标签的形式叫做 标签跳转 -->
        <!-- 方式2：使用 window.location.href 的形式叫做编程式导航 -->

        <!--<div class="goods-item">-->
            <!--<img src="../../img/1.jpg" alt="">-->
            <!--<h1 class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h1>-->
            <!--<div class="info">-->
                <!--<p class="price">-->
                    <!--<span class="now">￥1111</span>-->
                    <!--<span class="old">￥1500</span>-->
                <!--</p>-->
                <!--<p class="sell">-->
                    <!--<span>热卖中</span>-->
                    <!--<span>剩60件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->


        <!-- 有数据的方式 -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img.url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>





        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

        <!-- 有数据这么写或者写数据进去 -->
        <!--<div class="goods-item" v-for="item in goodslist" :key="item.id">-->
            <!--<img :src="item.img.url" alt="">-->
            <!--<h1 class="title">{{ item.title }}</h1>-->
            <!--<div class="info">-->
                <!--<p class="price">-->
                    <!--<span class="now">￥{{ item.sell_price }}</span>-->
                    <!--<span class="old">￥{{ item.market_price }}</span>-->
                <!--</p>-->
                <!--<p class="sell">-->
                    <!--<span>热卖中</span>-->
                    <!--<span>剩{{ item.stock_quantity }}件</span>-->
                <!--</p>-->
            <!--</div>-->
        <!--</div>-->


    </div>

</template>

<script>

    export default {
        data () {
            // data 是往自己组建内部，挂载一些私有数据
            return {
                // 分页的页数
                pageindex:1,
                goodslist:[

                ]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                // 获取商品列表
                // 有数据后替换链接即可，目前没有，所以暂时用假数据代替
                this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result => {
                 if(result.body.status === 0){
                     // 新数据拼接到旧数据上（不进行替换）
                     this.goodslist = this.goodslist.concat(result.body.message);
                 }
                })
            },
            getMore(){
              this.pageindex++;
              this.getGoodsList();
            },
            goDetail(id){
                // 使用 JS 的形式进行路由导航


                // 注意：一定要区分 this.$route 和 this.$router 这两个对象
                // 其中：this.$route 是路由参数对象，所有路由中的参数，params,query 都属于它
                // 其中：this.$router 是一个路由导航对象，用它可以方便的使用 JS 代码实现路由的前进，后退，跳转到新的 URL 地址


                // // 1.简单的
                // this.$router.push("/home/goodsinfo/"+id);
                // // 2.传递对象
                // this.$router.push({path:'/home/goodsinfo/'+id});
                // 3.传递命名的路由
                // this.$router.push({name:"goodsinfo","params":{id:id}});
            }
        }
    }


</script>

<style lang="less" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 0 2%;
        justify-content:space-between;
        margin: 3px 0;
        .goods-item{
            width: 49.5%;
            margin:3px 0;
            padding: 2px;
            box-shadow: 0 0 8px #ccc;
            border-radius:  0 0 4% 4%;
            border: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 140px;
            img{
                width: 100%;

            }
            .title{
                font-size: 14px;
            }

            .info{
                background: #eee;
                border-radius:  0 0 6% 6%;
                p{
                    margin: 0;
                    padding: 0;
                }
                .price{
                    .now{
                        color:red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration:line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }


</style>