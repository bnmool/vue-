<template>

    <div class="shopcar-container">


        <div class="goods-list">

            <!-- 有数据的方式/假数据 -->
            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch
                                v-mode="$store.getters.getGoodsSelected[item.id]"
                                @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
                        ></mt-switch>
                        <img class="shopimg" src="../../img/1.jpg" alt="">
                        <div class="info">
                            <h1> {{ item.title }} </h1>
                            <p>
                                <span class="price">￥{{ item.sell }}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 如何从购物车中获取商品的数量 -->
                                <!-- 1. 我们可以先创建一个空对象，然后循环购物车中所有商品的数据，把当前循环这条商品的 ID 作为对象的属性名，count 值作为对象的属性值，这样，当把所有的商品循环一遍，就会得到一个对象：{ 88:2, 99:4, 66:20 } -->
                                <a href="" @click.prevent="remove(item.id, i)">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            <!-- 没有数据的方式 -->
            <!-- 商品列表区域 -->
            <!--<div class="mui-card" >-->
                <!--<div class="mui-card-content">-->
                    <!--<div class="mui-card-content-inner">-->
                        <!--<mt-switch ></mt-switch>-->
                        <!--<img class="shopimg" src="../../img/1.jpg" alt="">-->
                        <!--<div class="info">-->
                            <!--<h1> 哈哈哈哈 </h1>-->
                            <!--<p>-->
                                <!--<span class="price">￥2199</span>-->
                                <!--<numbox></numbox>-->
                                <!--<a href="">删除</a>-->
                            <!--</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->



            <!-- 结算区域 -->
            <!-- 有数据的方式 -->
            <!--<div class="mui-card">-->
                <!--<div class="mui-card-content">-->
                    <!--<div class="mui-card-content-inner js">-->
                        <!--<div class="left">-->
                            <!--<p>总计（不含运费）</p>-->
                            <!--<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价<span class="red">￥{{ $store.getters.getGoodsCountAndAmount.count }}</span></p>-->
                        <!--</div>-->
                        <!--<mt-button type="danger">去结算</mt-button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->


            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner js">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 <span class="red">4</span> 件，总价<span class="red">￥9999</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
                </div>
            </div>

        </div>


        </div>





    </div>



</template>



<script>

    import numbox from '../subcomponents/shopcar_numbox.vue'

    export default {
        data(){
            return {
                // 购物车中所有商品的数据
                goodslist:[
                    {
                        id:1,
                        title:"哈哈哈哈哈",
                        sell: 2999
                    }
                ]
            }
        },
        created(){
            // this.getGoodsList();
        },
        methods:{
            // getGoodsList(){
            //     // 获取购物车商品列表
            //     // 1. 获取到 store 中所有的商品的 id ，然后拼接出一个用逗号分隔的字符串
            //     var idArr=[];
            //     this.$store.state.car.forEach( item => idArr.push(item.id) );
            //     // 如果购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
            //     if(idArr.length <=0 ){
            //         return;
            //     }
            //     this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(result => {
            //         if(result.body.status === 0){
            //             this.goodslist = result.body.message;
            //         }
            //     })
            // },
            remove(id, index){
                // 点击删除，把商品从 store 中根据传递的 id 删除，同时把当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
                this.goodslist.splice(index,1);
                this.$store.commit("removeFormCar",id)
            },
            selectedChanged(id,val){
                // 每当点击开关，把最新的开关状态，同步到 store 中
                console.log(id+'-------'+ val);
                this.$store.commit('updateGoodsSelected',{ id, selected:val})
            }
        },
        components :{
            numbox:numbox,
        }
    }



</script>



<style lang="less" scoped>

.shopcar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .shopimg{
            width:24%;
            margin: 0 10px;
        }
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }

        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1{
                font-size: 16px;
                padding: 6px 0;
            }
            .price{
                color:red;
                font-weight: bold;
            }
        }

    }
    .js{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }



}


</style>




