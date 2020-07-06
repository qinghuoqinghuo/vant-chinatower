<template>
    <div class="home">
        <van-row>
            <van-col span="20" offset="2">
                <IndexDetails :content="content"></IndexDetails>
            </van-col>
        </van-row>
    </div>
</template>

<script>

    // @ is an alias to /src
    import IndexDetails from '@/components/indexDetails.vue'
    import {getIndexDetailsData} from '@/api/user'

    export default {
        name: 'Home',
        components: {
            IndexDetails
        },
        data() {
            return {
                content: '',
                id: ''
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let self = this
                getIndexDetailsData(this.id).then(data => {
                    self.content = data.data.contentDetails
                })
            }
        }
    }
</script>
