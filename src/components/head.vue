<template>
    <div class="index-head">
        <div class="logo">
            <img :src="require('@/assets/logo.png')" alt="">
        </div>
        <span>客服热线：100096</span>
        <van-icon name="wap-nav" size="2rem" @click="showPopup"/>
    </div>
</template>

<script>
    import logo from '@/assets/logo.png'

    export default {
        name: 'head-wjz',
        data() {
            return {
                logo: logo
            }
        },
        methods: {
            showPopup() {
                let params = {
                    action: 'showLocale',
                    data: true
                };
                this.$emit('data', params)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/mixin.scss";

    .index-head {
        padding: 0 3vw;
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

    .index-head {
        .van-icon, span {
            @include icon_color($icon-color-theme);
        }
    }
</style>
