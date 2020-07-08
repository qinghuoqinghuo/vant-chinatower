<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "@/assets/scss/mixin.scss";
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        @include bg_color($background-color-theme);
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .van-cell {
        @include bg_color($background-color-theme);
        @include font_color($font-color-theme);
    }
    .van-search {
        @include bg_color($background-color-theme);
        @include font_color($font-color-theme);
    }
    .van-search__content {
        @include search_content_bg_color($search_content_bg_color);
        @include font_color($font-color-theme);
    }
    .van-tab{
        @include bg_color($background-color-theme);
        @include font_color($font-color-theme);
    }
    .van-notice-bar {
        @include bg_color($background-color-theme);
        @include font_color($font-color-theme);
    }
    .van-row {
        @include bg_color($background-color-theme);
    }
</style>
