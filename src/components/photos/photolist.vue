<template>

    <div>

        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">

                    <!-- 没有数据就占时用假数据代替 -->
                    <a v-for="item in cates" :key="item.id"
                       :class="['mui-control-item', item.id == 0 ? 'mui-active' :'']"
                       @click="getPhotoListByCateId(item.id)">

                        {{ item.title }}
                    </a>


                    <!--<a class="mui-control-item mui-active" >-->
                    <!--推荐-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--热点-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--北京-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--社会-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--娱乐-->
                    <!--</a>-->

                    <!--<a class="mui-control-item" href="" >-->
                    <!--热点-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--北京-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--社会-->
                    <!--</a>-->
                    <!--<a class="mui-control-item" href="" >-->
                    <!--娱乐-->
                    <!--</a>-->


                </div>
            </div>

        </div>
        <!-- 图片列表区域 -->
        <!-- 暂时没有数据 -->
        <ul v-for="list in list" class="photo-list">
            <router-link v-for="items in list.child"  :key="list.id" to="/home/photoInfo" tag="li">
                <img v-lazy="items.url">

                <div class="info">
                    <h1 class="info-title">
                        {{ items.title }}
                    </h1>
                    <div class="info-body">
                        {{ items.zhaiyao }}
                    </div>
                </div>
            </router-link>
        </ul>

        <!-- 有数据可以这么写每个相对应的链接 -->
        <!--<ul class="photo-list">-->
            <!--<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo'+ item.id">-->
                <!--<img v-lazy="item.url">-->

                <!--<div class="info">-->
                    <!--<h1 class="info-title">-->
                        <!--{{ item.title }}-->
                    <!--</h1>-->
                    <!--<div class="info-body">-->
                        <!--{{ item.zhaiyao }}-->
                    <!--</div>-->
                <!--</div>-->
            <!--</router-link>-->
        <!--</ul>-->


    </div>

</template>

<script>

    // 导入 mui 的 js 文件
    import mui from '../../lib/mui/js/mui.min.js'
    //解决 所有a标签 导航不能跳转页面,这里如果要是直接用 a 标签的话会导致滑动组件每次点击都会跳转回首页 bug
    mui('body').on('tap', '.mui-bar>a', function () {
        document.location.href = this.href;
    });


    export default {
        data() {
            return {
                // 所有分类的列表
                cates: [
                    {id: 0, title: "全部"},
                    {id: 1, title: "热点"},
                    {id: 2, title: "北京"},
                    {id: 3, title: "社会"},
                    {id: 4, title: "娱乐"},
                    {id: 5, title: "推荐"},
                    {id: 6, title: "热点"},
                    {id: 7, title: "北京"},
                    {id: 8, title: "社会"},
                    {id: 9, title: "娱乐"},
                ],
                // 需要注意路径问题
                list: [
                    {
                        id:0,
                        child: [
                            {id: 0,
                                title: '231321321231564',
                                url: "src/img/1.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                                child: 'list1' },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/2.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/3.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/4.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            }
                        ]
                    },
                    {
                        id:1,
                        child: [
                            {id: 0,
                                title: '231321321231564',
                                url: "src/img/1.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
                                child: 'list1' },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/2.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/3.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            },
                            {
                                id: 0,
                                title: '231321321231564',
                                url: "src/img/4.jpg",
                                zhaiyao: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
                            }
                        ]
                    },
                ],
            }
        },
        created() {
            // 在页面初始化的时候调用获取所有图片分类的方法
            this.getAllCategory();
            // 默认进入主页面，就主动请求，所有图片列表的数据
            this.getPhotoListByCateId(0);
        },
        mounted() {
            // 当组件中的 DOM 结构被渲染好并放到页面中后会执行这个钩子函数
            // 如果要操作元素，最好在 mounted 里面，因为这时候的 DOM 元素是最新的
            // 初始化滑动组件
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            // 获取所有的图片分类
            // 有数据后替换链接即可，目前没有，所以暂时用假数据代替
            getAllCategory() {
                this.$http.get('api/getimgcategory').then(result => {
                    if (result.body.status === 0) {
                        // 手动拼接出完整的分类列表
                        result.body.message.unshift({title: "全部", id: 0});
                        this.cates = result.body.message;
                    }
                })
            },
            // 有数据就替换路径就好，没数据占时用假数据代替
            getPhotoListByCateId(cateId) {
                // 根据分类 ID 获取图片列表
                this.$http.get('api/getimages/:cateid' + cateId).then(result => {
                    if (result.body.status === 0) {
                        this.list = result.body.message;
                    }
                });

            }
        },

    }

</script>


<style lang="less" scoped>

    * {
        touch-action: pan-y;
    }

    .photo-list {
        list-style: none;

        padding: 10px;
        margin: 0;
        padding-bottom: 0;

        li {
            margin-bottom: 10px;
            text-align: center;
            position: relative;
            vertical-align: center;
            img {
                width: 100%;
                border-radius: 2%;
                box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.2);
            }

            img[lazy=loading] {
                width: 40px;
                background: #dddddd;
                margin: auto;
            }
            .info{
                max-height: 60px;
                position: absolute;
                bottom:10px;
                background: rgba(0,0,0,0.2);
                color:#fff;
                text-align: left;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 12px;
                }
            }

        }
    }


</style>



