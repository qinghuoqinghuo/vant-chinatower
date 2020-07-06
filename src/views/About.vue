<template>
    <div id="home" :class="{'blackTheme':blackTheme}">
        <Head @data="getData"></Head>
        <Tab :activeTabTop="activeTabTop"></Tab>
        <Search :search="search" :searchDefault="searchDefault" @data="searchWord"></Search>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <h3>{{$t('app.hello')}}</h3>
            <Carousel :imgData="imgData" v-if="!loading"></Carousel>
            <Noticebar :noticeBar="noticeBar" v-if="!loading"></Noticebar>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Cell v-if="!loading" :title="title" :to="to" :icon="icon"></Cell>
            <div v-for="(k,index) in listData" :key="index" class="listData">
                <div v-for="(item,index2) in k.contentItems" :key="index2" @click="showDetails(item)">
                    <!-- 最多显示两行 -->
                    <div class="van-multi-ellipsis--l2 newlist-top">
                        {{item.contentTitle }}
                    </div>
                    <div class="newlist-bottom"><span>{{item.contentAuthor}}</span><span>{{item.publishTime}}</span>
                    </div>
                    <van-divider/>
                </div>
            </div>
            <!--<Grid v-if="!loading" :gridData="gridData" :columnNum="2" :gutter="4"></Grid>-->
            <!--<Cell v-if="!loading" :title="title2" :to="to2"></Cell>-->
            <!--<Grid v-if="!loading" :gridData="gridData2" :columnNum="2" :gutter="4"></Grid>-->
        </van-pull-refresh>
        <!--<Pagination :page="page"></Pagination>-->
        <!--<div style="height:80px;"></div>-->
        <!--<Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>-->
        <van-popup v-model="showLocale" position="bottom">
            <van-cell v-for="(item,index) in localeSelect" :title="item.title" is-link :key="index"
                      @click="changeLocale(item)"/>
        </van-popup>
    </div>
</template>
<script>
    import Head from '@/components/head.vue'
    import Tab from '@/components/tab.vue'
    import Search from '@/components/search.vue'
    import Carousel from '@/components/carousel.vue'
    import Noticebar from '@/components/noticebar.vue'
    import Skeleton from '@/components/skeleton.vue'
    // import Tabbar from '@/components/tabbar.vue'
    // import Grid from '@/components/grid2.vue'
    import Cell from '@/components/cell.vue'
    // import Pagination from '@/components/pagination.vue'
    import pic1 from '@/assets/img/1.jpg'
    import pic2 from '@/assets/img/2.jpg'
    import pic3 from '@/assets/img/3.jpg'
    import pic4 from '@/assets/img/4.jpg'
    import pic5 from '@/assets/img/5.jpg'
    import pic6 from '@/assets/img/6.jpg'
    import pic7 from '@/assets/img/7.jpg'
    import pic8 from '@/assets/img/8.jpg'
    import pic9 from '@/assets/img/9.jpg'
    import pic10 from '@/assets/img/10.jpg'
    import pic11 from '@/assets/img/11.jpg'
    import pic12 from '@/assets/img/12.jpg'
    import {getVideoList, getIndexData} from '@/api/user'

    export default {
        data() {
            return {
                title: '新闻中心',
                to: '',
                icon: 'new-o',
                title2: '热门综艺',
                to2: 'live',
                loading: false,
                refreshing: false,
                search: '',
                searchDefault: '请输入关键词',
                searchDefaultArray: ['安家张萌', '吴奇隆电视剧', '孙俪罗晋cp', '侧方停车位技巧', '完美关系'],
                activeTabTop: 'a',
                activeTabBottom: 'a',
                noticeBar: '为做好清理拖欠民营企业账款工作，根据国资委要求，现公布中国铁塔股份有限公司信访联系方式如下： 联系人：沈盈盈  联系电话：010-68708892  电子邮箱：shenyy@chinatowercom.cn; 为做好清理拖欠民营企业账款工作，根据国资委要求，现公布中国铁塔股份有限公司信访联系方式如下： 联系人：沈盈盈  联系电话：010-68708892  电子邮箱：shenyy@chinatowercom.cn',
                gridData: [
                    //     {
                    //     src: pic10,
                    //     title: '欢乐喜剧人•太逗了',
                    //     subTitle: '二龙湖浩哥模拟郭德纲撩妹'
                    // }
                ],
                page: {
                    currentPage: 1,
                    total: 500,
                    perPage: 10,
                    showSize: 3
                },
                indexInfo: 5,
                listData: [],
                imgData: [{
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }],
                skeleton: 5,
                showLocale: false,
                localeSelect: [{
                    title: '中文-简体',
                    field: 'zh'
                }, {
                    title: 'English',
                    field: 'en'
                }, {
                    title: '夜间模式',
                    field: 'black'
                }, {
                    title: '日间模式',
                    field: 'white'
                }],
                blackTheme: false,
            }
        },
        components: {
            Head,
            Tab,
            Search,
            Carousel,
            Noticebar,
            Skeleton,
            // Tabbar,
            // Grid,
            Cell
            // Pagination
        },
        mounted() {
            this.renderData();
            this.renderVideoList();
        },
        methods: {
            /**
             * 获取子组件返回的数据
             * */
            getData(data) {
                let self = this;
                switch (data.action) {
                    case 'showLocale':
                        self.showLocale = data.data
                }
            },
            /**
             * 切换语法
             * */
            changeLocale(item) {
                let self = this;
                this.$store.locale = item.field;
                this.$i18n.locale = item.field;
                switch (item.field) {
                    case 'zh':
                        self.renderData();
                        break;
                    case 'en':
                        self.renderData();
                        break;
                    case 'black':
                        self.blackTheme = true;
                        break;
                    case 'white':
                        self.blackTheme = false;
                        break;
                }
                this.showLocale = false
            },
            /**
             * 跳转详情
             * */
            showDetails(item){
                this.$router.push({name:'details',params:{id:item.id}})
            },
            renderData() {
                let self = this;
                getIndexData().then(data => {
                    // 顶部轮播图数据
                    self.imgData = data.data.banners.map(function (item) {
                        return {title: item.contentTitle, src: item.contentImg}
                    })
                    // 新闻列表
                    self.listData = data.data.newsModule.newsGroups
                })
            },
            searchWord(data) {
                let self = this
                if (data.action == 'search') {
                    self.search = data.value;
                    self.page.currentPage = 1;
                    self.renderVideoList()
                }
            },
            renderVideoList() {
                let self = this
                let params = {
                    kw: self.search,
                    per_page: self.page.perPage,
                    page: self.page.currentPage
                }
                getVideoList(params).then(data => {
                    self.page.total = data.data.total
                    self.gridData = data.data.data
                })
            },
            /**
             * 获取点击tab之后的值
             * */
            getTab(value) {
                let self = this
                self.activeTabTop = value
            },
            /**
             * 模拟下拉刷新数据
             * */
            onRefresh() {
                let self = this
                self.refreshing = true;
                self.loading = true;
                // 两秒之后，更改内容，模拟实时刷新
                setTimeout(function () {
                    self.refreshing = false;
                    self.loading = false;
                    // 刷新之后搜索框默认文字
                    // self.searchDefault = self.getDiffText(self.searchDefaultArray[parseInt(Math.random() * (self.searchDefaultArray.length))]);
                    self.page.currentPage++
                    self.renderVideoList()
                }, 1000)
            },
            /**
             * 每次从数组获取不同的值
             * */
            getDiffText(text) {
                let self = this
                if (text !== self.searchDefault) {
                    return text;
                }
                return self.getDiffText(self.searchDefaultArray[parseInt(Math.random() * (self.searchDefaultArray.length))])
            }
        }
    }
</script>
<style scoped lang="scss">
    #home {
        &.blackTheme {
            box-shadow: 0 0 100vh #000 inset;
        }
        .listData {
            padding: 3vw 3vw 0 3vw;
            .newlist-top {
                font-size: 1.2rem;
                text-align: left;
                line-height: 1.8rem;
            }

            .newlist-bottom {
                width: 50vw;
                display: flex;
                justify-content: space-between;
                align-items: center;
                line-height: 1.2rem;
                font-size: 0.8rem;
                color: #ccc;
            }
        }

    }
</style>
