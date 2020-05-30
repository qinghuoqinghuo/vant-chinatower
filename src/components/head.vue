<template>
    <div class="index-head">
        <div class="logo">
            <img :src="require('@/assets/logo.png')" alt="">
        </div>
        <span>客服热线：100096</span>
        <van-icon name="wap-nav" size="2rem"/>
    </div>
</template>

<script>
    import logo from '@/assets/logo.png'

    export default {
        name: 'head',
        data () {
            return {
                logo: logo
            }
        }
    }
</script>

<style scoped lang="scss">
    .index-head {
        padding:0 3vw;
        height: 6vh;
        background: #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            width: 25vw;
            height: 100%;
            display: flex;
            align-items: center;
            img {
                width: 100%;
            }
        }
    }
</style>
