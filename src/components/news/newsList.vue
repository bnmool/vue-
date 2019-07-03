<template>

    <ul class="mui-table-view mui-table-view-chevron">

        <!-- 有数据可以这么写 -->
        <!--<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">-->
            <!--&lt;!&ndash; 这里需要传 id ，id属于表达式所以需要用 v-bind(:) 来做，但是前面的路径需要用 '' 包裹来做拼接 +item.id &ndash;&gt;-->
            <!--<router-link :to="'/home/newsInfo'+item.id"  class="mui-navigate-right">-->
                <!--<img class="mui-media-object mui-pull-left" :src="item.img_url">-->
                <!--<div class="mui-media-body">-->
                    <!--<h4>{{ item.title }}</h4>-->
                    <!--<p class='mui-ellipsis'>-->
                        <!--<span>发表时间:{{ item.add_time }}</span>-->
                        <!--<span>点击:{{ item.click }}次</span>-->
                    <!--</p>-->
                <!--</div>-->
            <!--</router-link>-->
        <!--</li>-->


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/yuantiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/yuantiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>



        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>


        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/shuijiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/newsInfo" class="mui-navigate-right">
                <img class="mui-media-object mui-pull-left" src="../../img/yuantiao.jpg">
                <div class="mui-media-body">
                    <h4>CBD</h4>
                    <p class='mui-ellipsis'>
                        <span>发送时间:{{nowTime | dateFormat}}</span>
                        <span>点击：0次</span>
                    </p>
                </div>
            </router-link>
        </li>






    </ul>

</template>


<style lang="less" scoped>

    .mui-table-view{
        li{
            h4{
                font-size: 16px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color:#00b3ee;
                display: flex;
                justify-content : space-between;
            }
        }
    }

</style>


<script>


    import { Toast } from "mint-ui"

    export default{
        data(){
            return {
                newsList:[],// 新闻列表
                nowTime : new Date()
            }
        },
        created(){
           this.getNewsList();
        },
        methods:{
            // 获取新闻列表
            getNewsList(){
                this.$http.get('api/getnewslist').then(result =>{
                if (result.body.status === 0){
                    // 如果没有失败，应该把数据保存到 data 上
                    this.newList =  result.body.message;
                } else {
                    Toast('获取新闻列表失败!')
                }
                })
            }
        },

    }

</script>














