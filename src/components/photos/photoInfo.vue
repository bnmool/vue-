<template>

    <div class="photoinfo-container">
        <h3>{{ title }}</h3>
        <p class="subtitle">
            <span>发表时间:{{ nowTime | dateFormat }}</span>
            <span>点击次数:{{ click }}次</span>
        </p>

        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="this.content"></div>

        <!-- 评论子组件 -->
        <cmt-box id="id"></cmt-box>
    </div>

</template>

<script>

    // 1.导入评论子组件
    import comment from '../subcomponents/comment.vue'

    export default {
        data() {
            return {
                // 用假数据代替
                title: "hahaha",
                click: 99,
                content: "要僵凝的嘴角扬起了温柔的弧，满树的桃花满树的粉，姥姥雪白的发苍老的手刹那间牵动我的心坎，亲情似水奔流。每次和姥姥聊天，总是我最开心的时刻。姥姥会握着我的手，轻轻晃动身体，偶尔有她很沉的笑声，抑或真情流露的谆谆教诲",
                // 有数据的话可以这么写，没有数据可以忽略此 id
                // 从路由中获取到的图片 id
                id: this.$route.params.id,
                nowTime: new Date(),
                photoinfo:[],
                slide1: [
                    {
                        src: 'src/img/7.jpg',
                        msrc: 'src/img/7.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 1920,
                        h: 1080
                    },
                    {
                        src: 'src/img/8.jpg',
                        msrc: 'src/img/8.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1920,
                        h: 1080
                    },
                    {
                        src: 'src/img/9.jpg',
                        msrc: 'src/img/9.jpg',
                        alt: 'picture3',
                        title: 'Image Caption 2',
                        w: 1920,
                        h: 1080
                    },
                    {
                        src: 'src/img/4.jpg',
                        msrc: 'src/img/4.jpg',
                        alt: 'picture4',
                        title: 'Image Caption 2',
                        w: 1920,
                        h: 1080
                    },

                ]


            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        },
        methods: {
            getPhotoInfo() {
                // 获取图片的详情
                this.$http.get('api/getimageInfo/' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.photoinfo = result.body.message(0);
                    }
                });
            },
            // 获取缩略图，因没有数据所以用假数据代替，有数据替换链接即可
            getThumbs() {
                // 获取缩略图
                this.$http.get("api/getthumimages/" + this.id).then(result => {
                    if (result.body.status === 0) {
                        // 循环每个图片数据，补全图片的宽和高
                        result.body.message.forEach(item => {
                            item.w = 600;
                            item.h = 400;
                        });
                        // 把完整的数据保存到 list 中
                        this.list = result.body.message;
                    }
                });
            },
            handleClose () {
                console.log('close event')
            }
        },
        components: {
            // 注册评论子组件
            'cmt-box': comment
        }
    }


</script>


<style lang="less" scoped>

    .photoinfo-container {
        padding: 5px;

        h3 {
            color: #26a2ff;
            font-size: 25px;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }

        .content {
            font-size: 14px;
            line-height: 26px;
        }

        .thumbs {
            /deep/ .my-gallery {
                display: flex;
                flex-wrap: wrap;
                margin: 0 auto;
                width: 100%;
                figure {
                    width: 50%;
                    margin: 0;
                    padding: 1%;
                    img {
                        width: 100%;
                        border-radius: 4%;
                        box-shadow: 0 0 2px 1px rgba(0,0,0,0.2);
                    }
                }
            }
        }


    }


</style>


