<template>

    <!-- 有数据的写法 -->
    <!--<div class="goodsdesc-container">-->
        <!--<h3>{{ info.title }}</h3>-->
        <!--<hr>-->
        <!--<div class="content" v-html="info.content">-->

        <!--</div>-->
    <!--</div>-->

    <!-- 没有数据的写法 -->
    <div class="goodsdesc-container">
        <h3>商品标题</h3>
        <hr>
        <div class="content">

            <img src="../../img/1.jpg" alt="">
            <img src="../../img/5.jpg" alt="">
            <img src="../../img/6.jpg" alt="">
            <img src="../../img/9.jpg" alt="">

        </div>
    </div>


</template>


<!-- 如果图片样式不对清除 scoped -->
<style lang="less" scoped>
    .goodsdesc-container{
        padding: 6px;
        h3{
            font-size: 16px;
            color:#226aff;
            text-align: center;
            line-height: 30px;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }


</style>


<script>

    export default {
        data(){
            return{
                // 图文数据
                info:{}
            }
        },
        created(){
            this.getGoodsDesc();
        },
        methods:{
            // 获取图文数据
            getGoodsDesc(){
                this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result => {
                    if ( result.body.status === 0){
                        this.info = result.body.message[0]
                    }
                })
            }
        }
    }


</script>












