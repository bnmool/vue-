<template>

    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多300字)" maxlength="300" name="" id="" cols="30" rows="10"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">

            <!-- 渲染获取的数据 -->
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time" >
                <div class="cmt-title">
                    &nbsp;&nbsp;第{{ i+1 }}层&nbsp;&nbsp;&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{ item.add.time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒':item.content() }}
                </div>
            </div>


            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime | dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime | dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime | dateFormat}}
                </div>
                <div class="cmt-body">
                    11111111111111111111111
                </div>
            </div>

            <div class="cmt-item">
                <div class="cmt-title">
                    &nbsp;&nbsp;第一层&nbsp;&nbsp;&nbsp;&nbsp;用户:hestia&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{nowTime | dateFormat}}
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

    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 15px 0;
            .cmt-item{
                .cmt-title{
                    background: #00b3ee;
                    color: #fff;
                    font-size: 13px;
                    line-height: 30px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .cmt-body{
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
        data(){
            return {
                nowTime: new Date(),
                pageIndex:1,//默认显示第一页
                comments:[]//所有的评论数据
            }
        },
        created(){
            this.getComments()
        },
        // 因为没有数据所以这里可以忽略，有数据这么写
        methods:{
            // 获取
            getComments(){
                this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result => {
                    if(result.body.status === 0){
                        // 每当获取新数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                        this.comments = this.comments.concat(result.body.message)
                    }else{
                        Toast("获取评论失败！");
                    }
                });
            },
            getMore(){
                this.pageIndex++;
                this.getComments();
            }
        },
        // 父组件像子组件传递 id
        props:['id']
    }

</script>










