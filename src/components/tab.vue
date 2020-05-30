<!--标签页组件,可以横向滚动-->
<template>
    <van-tabs
        class="tabsTop"
        title-active-color="red"
        v-model="activeTab">
        <van-tab title="首页" name="a"></van-tab>
        <van-tab title="关于我们" name="b"></van-tab>
        <van-tab title="产品与服务" name="c"></van-tab>
        <van-tab title="投资者关系" name="d"></van-tab>
        <van-tab title="新闻中心" name="e"></van-tab>
        <!--<van-tab title="综艺" name="f"></van-tab>-->
    </van-tabs>
</template>
<script>
    export default {
        props: ['activeTabTop'],
        data() {
            return {
                activeTab: this.activeTabTop
            }
        },
        methods: {
            // onClick(name, title) {
            //     let self = this;
            //     self.$emit('data', name);
            // }
        }
    }
</script>
<style scoped lang="scss">
    .tabsTop {
        /deep/.van-tabs__nav {
            background: #F7F8FA;
        }
    }

</style>
