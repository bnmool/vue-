<template>

    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多300字)" maxlength="300" name="" id="" cols="30" rows="10"
                  v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">

            <!-- 渲染获取的数据 -->
            <!--<div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time" >-->
            <!--<div class="cmt-title">-->
            <!--&nbsp;&nbsp;第{{ i+1 }}层&nbsp;&nbsp;&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{ item.add.time | dateFormat }}-->
            <!--</div>-->
            <!--<div class="cmt-body">-->
            <!--{{ item.content === 'undefined' ? '此用户很懒':item.content() }}-->
            <!--</div>-->
            <!--</div>-->


            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime |
                    dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime |
                    dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime |
                    dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime |
                    dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

        </div>

        <mt-button type="danger" size="large" plain @click-="getMore">加载更多</mt-button>
    </div>

</template>


<style lang="scss" scoped>

    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 15px 0;

            .cmt-item {
                .cmt-title {
                    background: #00b3ee;
                    color: #fff;
                    font-size: 13px;
                    line-height: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .cmt-body {
                    line-height: 40px;
                    text-indent: 2em;
                }
            }
        }
    }

</style>


<script>

    import { Toast } from "mint-ui"

    export default {
        data() {
            return {
                nowTime: new Date(),
                pageIndex: 1,//默认显示第一页
                comments: [],//所有的评论数据
                msg: ""//评论输入的内容
            }
        },
        created() {
            this.getComments()
        },
        // 因为没有数据所以这里可以忽略，有数据这么写
        methods: {
            // 获取
            getComments() {
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
                    if (result.body.status === 0) {
                        // 每当获取新数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                        this.comments = this.comments.concat(result.body.message)
                    } else {
                        Toast("获取评论失败！");
                    }
                });
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            },
            // 评论提交: 因为没有数据，所以跳过评论，有数据库后替换接口地址即可
            postComment() {

                // 校验是否为空内容
                if(this.msg.trim().length ===0){
                   return Toast('评论内容不能为空！')
                }

                // 发表评论
                // 参数1：请求的 URL 地址
                // 参数2：提交给服务器的数据对象 { content: this.msg }
                // 参数3：定义提交时候，表单中数据的格式 { emulateJson: true }
                this.$http.post('api/postcomment/'+this.$router.params.id, { content:this.msg.trim() }).then(function () {
                    if(result.body.status ===0){
                        // 1.拼接处一个评论对象
                        var cmt = {
                            user_name:'匿名用户',
                            add_time:Date.now(),
                            content:this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg="";
                    }
                });
            }
        },
        // 父组件像子组件传递 id
        props: ['id']
    }

</script>










