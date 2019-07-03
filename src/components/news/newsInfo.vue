<template>

    <div class="newsinfo-container">
        <!-- 通过传过来的 id 获取数据，但是现在没有，写的是假数据 -->
        <!-- 大标题 -->
        <h3 class="title">{{ title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发送时间:{{nowTime | dateFormat}}</span>
            <span>点击:{{ click }}</span>
        </p>
        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="content"></div>
        <!-- 评论区 -->
        <comment-box :id="this.id"></comment-box>

    </div>

    <!--<div class="newsinfo-container">-->
        <!--&lt;!&ndash; id 为数据，但是现在没有 &ndash;&gt;-->
        <!--<h3 class="title">{{ newsIfo.title }}</h3>-->
        <!--<p class="subtitle">-->
            <!--<span>发送时间:{{ newsIfo.time | dateFormat}}</span>-->
            <!--<span>点击:{{ newsIfo.click }}</span>-->
        <!--</p>-->
        <!--<hr>-->
        <!--<div class="content" v-html="newsInfo.content"></div>-->
    <!--</div>-->





</template>

<script>

    // 1. 导入评论子组件
    import comment from '../subcomponents/comment.vue'

    import { Toast } from "mint-ui"

    export default {
        data() {
            return {
                // 由于没有数据可暂时忽略
                // 将 URL 地址中传递过来的 id 值挂载到 data 上，方便以后调用
                id: this.$route.params.id,
                newsInfo:{},//新闻对象
                nowTime: new Date(),
                title:'新闻列表',
                click:99,
                content:"<html><img src='src/img/1.jpg'><p>远远的就是一团粉，云里雾里，土砌墙前。花都开好了，那般脱俗，如同仙子。是桃花。桃花是姥姥种的，就种在老家的木门前，灿烂一树。每年每年，回到老家，姥姥倚在树旁等我的那个情景，总是会令我心头一颤，怎能不感动！人面桃花，像是提醒我归家的路。姥姥的眼睛很不好，已近失明，眼神涣散而空洞，目光没有焦距，蜡黄的脸留下岁月的痕迹，沧桑，千沟万壑，似要与这桃树化为一体。我轻轻走到她面前，拥抱她，我亲爱的姥姥。那浑浊的眼于是立即迸射出奇异的光芒，似要僵凝的嘴角扬起了温柔的弧，满树的桃花满树的粉，姥姥雪白的发苍老的手刹那间牵动我的心坎，亲情似水奔流。每次和姥姥聊天，总是我最开心的时刻。姥姥会握着我的手，轻轻晃动身体，偶尔有她很沉的笑声，抑或真情流露的谆谆教诲，又或者宠溺的抚摸。小小的，微不足道的，却能感动我很久很久。姥姥年轻的时候是个清秀女子，目光淡如明水，如今是看不见了。六岁那年我的淘气使姥姥的额角磕上了桌缘，然后她的眼黯淡下来，不能挽回地。我自责痛心，姥姥爱我依然。十三岁，姥姥离开了我，离开了她栽种的桃树，那样决绝。姥姥的面容十分安详，沉睡的脸如同安静的天使不喑世事。我疯狂地企图挽留她身上的桃花香味和她暖和的体温，幼小的天塌了一角。人世间固有生离死别，总是要来的不是吗？可我不明白，为何现在想起仍是揪心。再道一句，别了，自小让我依赖的姥姥，那个为我种桃树的姥姥，我亲爱的姥姥。姥姥留给我两本书，是她所写。书里姥姥的一字一句让我一遍遍忆起，铿锵有力涌动一纸浓郁的桃花香。姥姥写，“《人面桃花》本是祭奠爱情，可是，我的美琪，我要为你栽一棵桃树，我要为你，我的第5个小孙女，栽一棵桃树，用我对你的爱浇灌它。”时间竟是我出生前两个星期。原来是有这么一种爱，在一个生命尚未来到人世之前，便已深沉。风过，叶摇。婆婆娑娑沙沙作响。仰起头，我不确定花瓣里是否藏着姥姥的脸姥姥的情，花香将我颠没。姥姥教我惜花，做人，她走了。她还在。我仍活在姥姥恬静的气息里。腐朽的门“吱呀”一声被推开，心里就溢满了柔情，一树桃花一树情。不会忘记，姥姥倚在这棵树下，等我归来，笑容似春风化雨。那是刻在心底最深处的画面——人面桃花。人面不知何处去，桃花依旧笑春风。</p></html>"
            }
        },
        // 没有数据所以这里的方法没有数据,展示以假数据代替
        created(){
            this.getNewsInfor();
        },
        methods: {
            // 有数据这么写
            // 获取新闻详情
            getNewsInfor() {
                this.$http.get('api/getnew' + this.id).then(result => {
                    if (result.body.status === 0){
                        this.newsInfo = result.body.message[0];
                    }else{
                        Toast('获取新闻失败');
                    }
                        });
            }
        },
        components:{
            // 用来注册子组件的节点
            'comment-box':comment,
        }
    }

</script>

<style lang="scss" scoped>

    .newsinfo-container {
        padding: 10px;

        .title {
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            color: red;
        }

        .subtitle {
            font-size: 14px;
            color: #00b3ee;
            display: flex;
            justify-content: space-between;
        }

        .content {
            img{width: 100%;}
        }
    }

</style>








