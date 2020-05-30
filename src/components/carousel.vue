<!--轮播图组件-->
<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in imgData" :key="index" @click="clickSwipe">
            <div class="navImg">
                <img :src="item.src" alt="">
            </div>

        </van-swipe-item>
    </van-swipe>
</template>

<script>

    export default {
        props: ['imgData'],
        data() {
            return {}
        },
        methods: {
            clickSwipe() {
                this.$router.push({path: '/live'})
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-swipe {
        height: 30vh;
        display: flex;
        align-items: center;
        .navImg {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height:100%;
            }
        }
    }


</style>
