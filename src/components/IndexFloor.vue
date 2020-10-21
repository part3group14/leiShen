<template>
<div>
    <Title></Title>
    <div class="members-goods-pic ns-border-color-gray">
        <ul>
            <ShowDetail></ShowDetail>
            <ShowDetail></ShowDetail>
            <ShowDetail></ShowDetail>
            <ShowDetail></ShowDetail>
            <ShowDetail></ShowDetail>
        </ul>
    </div>
    <Fans></Fans>
    <VideoList></VideoList>
    <FloorBottom></FloorBottom>
</div>
</template>

<script>
import Title from './floor/Title'
import ShowDetail from './floor/ShowDetail'
import Fans from './floor/Fans'
import VideoList from './floor/VideoList'
import FloorBottom from './floor/FloorBottom'
export default {
    components: {
        Title,
        ShowDetail,
        Fans,
        VideoList,
        FloorBottom
    }
}
</script>

<style scoped>
ul li:nth-child(1),
ul li:nth-child(2) {
    margin-top: 0;
}

.members-goods-pic>ul>li.gooditem:nth-child(even) {
    float: right;
}

.members-goods-pic {
    border-bottom: 1px solid;
    overflow: hidden;
    background-color: none;
}

.ns-border-color-gray {
    border-color: #e5e5e5 !important;
}
</style>
