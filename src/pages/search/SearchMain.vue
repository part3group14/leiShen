<template>
<div id="search_list_mescroll" class="mescroll">
    <ul class="list-content ratings" ref="ratingsWrapper">
        <GoodsItem v-for="(goods,index) in goodsList" :key="index" :goods="goods"></GoodsItem>
    </ul>
</div>
</template>

<script>
import GoodsItem from '../../components/GoodsItem'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    components: {
        GoodsItem
    },
    data() {
        return {
            goodsList: []
        }
    },
    async mounted() {
        let res = await axios({
            url: "goods",
            methods: "get"
        })
        this.goodsList = res.data

        // 加局部滚动
        this.$nextTick(() => {
            new BScroll(this.$refs.ratingsWrapper, {
                click: true,
                tap: true
                // 上拉加载功能的开启
                // pullUpLoad: true
            })
        })
    }

}
</script>

<style scoped>
.mescroll {
    width: 100%;
    height: 570px;
    position: relative;
    z-index: -10;
    overflow: hidden;
}

.list-content {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
