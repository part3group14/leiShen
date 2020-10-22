<template>
<div>
    <ShowDetail></ShowDetail>
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
// import axios from 'axios'
export default {
    components: {
        ShowDetail,
        Fans,
        VideoList,
        FloorBottom
    },
    // data() {
    //     return {
    //         goods: [],
    //     }
    // },
    // async mounted() {
    //     let res = await axios({
    //         url: "IndexFloorCon",
    //         methods: "get"
    //     })
    //     console.log(res.data)
    //     this.goods = res.data
    // },
}
</script>

<style scoped>

</style>
