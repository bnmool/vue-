<template>

    <div class="mui-numbox" data-numbox-min='0'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="0"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

</template>

<style lang="less" scoped>


</style>

<script>
    import mui from '../../lib/mui/js/mui.min';

    export default {
        mounted() {
            // 初始化数字选择框组件
            mui('.mui-numbox').numbox()
        }
    }


</script>






