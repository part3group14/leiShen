<template>
<div>
    <ShowDetail v-for="(items,index) in goodsShow" :key="index" :items="items"></ShowDetail>
    <Fans></Fans>
    <VideoList></VideoList>
    <FloorBottom></FloorBottom>
</div>
</template>

<script>
import ShowDetail from './floor/ShowDetail'
import Fans from './floor/Fans'
import VideoList from './floor/VideoList'
import FloorBottom from './floor/FloorBottom'
import axios from 'axios'
export default {
    components: {
        ShowDetail,
        Fans,
        VideoList,
        FloorBottom
    },
    data() {
        return {
            goodsShow: [],
        }
    },
    async mounted() {
        let res = await axios({
            url: "IndexFloorCon",
            methods: "get"
        })
        this.goodsShow = res.data
    },
}
</script>

<style scoped>

</style>
