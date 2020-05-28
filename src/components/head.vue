<template>
    <div class="hello">
        <van-button type="primary" size="mini" @click="cn">中文</van-button>
        <van-button type="info" size="mini" @click="en">English</van-button>
        <h3>{{$t('app.hello')}}</h3>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {},
        created () {
        },
        data () {
            return {}
        },
        mounted () {
            // this.init()
        },
        methods: {
            cn () {
                this.$i18n.locale = 'zh'
            },
            en () {
                this.$i18n.locale = 'en'
            }
        },
        components: {}
    }
</script>
<style scoped lang="scss">
</style>
