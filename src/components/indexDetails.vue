<template>
    <div class="index-details" v-html="content">

    </div>
</template>

<script>
    export default {
        props: ['content'],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/scss/mixin.scss";

    .index-details {
        @include font_color($font-color-theme);
    }
</style>
