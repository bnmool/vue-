<template>

    <div>
        <!--<cmtbox :id="$route.params.id"></cmtbox>-->
        <cmtbox></cmtbox>
    </div>

</template>

<style lang="less" scoped>



</style>


<script>

    import cmtbox from '../subcomponents/comment.vue';

    export default {
        components:{
            cmtbox:cmtbox,
        }

    }



</script>












