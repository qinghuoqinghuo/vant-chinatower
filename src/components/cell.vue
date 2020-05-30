<!--单元格组件-->
<template>
    <van-cell :title="title" :icon="icon" is-link :to="to">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
                slot="right-icon"
                name="arrow"
                style="line-height: inherit;"
        />
    </van-cell>
</template>
<script>
    export default {
        props:['title','to','icon'],
        data() {
            return {

            }
        }
    }

</script>
