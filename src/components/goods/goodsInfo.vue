<template>

    <div class="goodsinfo-container">


        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >

            <div class="ball" v-show="ballFlag" ref="ball"></div>

        </transition>

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
                        市场价：
                        <del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2199</span>
                    </p>
                    <p>购买数量：
                        <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>

                        <!-- 分析：如何实现嫁入购物车的时候能到选择的数量 -->
                        <!-- 1. 按钮属于 goodsinfo 页面，数字属于 numberbox组件 -->
                        <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面中获取到选中的商品数值 -->
                        <!-- 3. 怎么解决这个问题：涉及到了子组件向父组件传值了（事件调用机制） -->
                        <!-- 4. 事件调用的本质：父向子传递方法，自调用这个方法，同时把数据当做参数传递给这个方法 -->

                    </p>
                </div>
            </div>



        </div>


        <!-- 没数据就这么写/展示使用假数据代替 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{ goodsinfo.goods_no }}</p>
                    <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
                    <p>上架时间：{{ nowTime | dateFormat }}</p>
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
        data() {
            return {
                nowTime: new Date(),
                // 将路由参数对象中的 id 挂载到 data 上，方便后期调用
                id: this.$route.params.id,
                // 轮播数据
                lunbotu: [],
                // 商品信息数据
                goodsinfo: {
                    goods_no:'SDKJ89LM7',
                    stock_quantity:4
                },
                // 控制小球隐藏和显示的标识符
                ballFlag: false,
                // 保存用户选中的商品数量，默认，认为用户选中数量为 1
                selectedCount: 1,
            }
        },
        created() {
            this.getLunbotu();
            this.getGoodsInfo();
        },
        methods: {
            // 获取轮播数据
            getLunbotu() {
                this.$http.get('api/getthumimage/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为轮播图组件中，只认识 item.img 不认识 item.src
                        result.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.lunbotu = result.body.message;
                    }
                })
            },
            getGoodsInfo() {
                // 获取商品的信息
                this.$http.get('api/goods/getinfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.goodsinfo = result.body.message[0];
                    }
                })
            },
            goDesc(id) {
                // 点击使用编程式导航跳转到图文介绍页面
                this.$router.push({name: "goodsdesc", params: {id: id}})
            },
            goComment(id) {
                // 点击使用编程式导航跳转到评论页面
                this.$router.push({name: "goodscomment", params: {id: id}})
            },
            addToShopCar() {
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el) {
                el.style.transform="translate(0,0)";
            },
            enter(el, done) {
                el.offsetWidth;
                // 小球动画优化思路
                // 1. 先分析导致动画不准确的本质原因：我们把小球最终位移到的位置已经局限在了某一分辨率下的滚动条未滚动的情况下
                // 2. 只要分辨率和测试的时候不一样或者滚动条有一定的滚动距离之后，问题就出现了
                // 3. 因此不能把位置的横纵坐标直接写死了，而是应该根据不同情况动态计算这个坐标值
                // 4. 让先得到徽标的横纵坐标，再得到小球的横纵坐标，然后让 x，y 值求差得到的结果就是横纵坐标要位移的距离
                // 5. 如何获取徽标和小球的位置？？？ domObject.getBoundingClientRect()


                // 获取小球在页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // 获取徽标在页面中的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;

                el.style.transform=`translate(${xDist}px, ${yDist}px)`;
                el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68) ";
                done();
            },
            afterEnter(el) {
                this.ballFlag = !this.ballFlag
            },
            getSelectedCount(count){
                // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到 data 上
                this.selectedCount = count;
            }
        },
        components: {
            swiper: swiper,
            numbox: numbox,
        }
    }


</script>

<style lang="less" scoped>


    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;
    }

    .now_price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }



    .mui-card-footer {
        display: block;
        button {
            margin: 18px 0;
        }
    }

    .ball {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 385px;
        left: 146px;
    }


</style>


















