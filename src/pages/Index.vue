<template>
<div class="lindex">
    <IndexHeader></IndexHeader>
    <IndexBanner></IndexBanner>
    <IndedxListNav></IndedxListNav>
    <IndexUpSwiper></IndexUpSwiper>
    <IndexTwoSec></IndexTwoSec>
    <IndexFloor></IndexFloor>
    <IndexFooter></IndexFooter>
</div>
</template>

<script>
import IndexHeader from './index/IndexHeader'
import IndexBanner from './index/IndexBanner'
import IndedxListNav from './index/IndedxListNav'
import IndexUpSwiper from '../components/IndexUpSwiper'
import IndexTwoSec from './index/IndexTwoSec'
import IndexFloor from './index/IndexFloor'
import IndexFooter from './index/IndexFooter'
export default {
    components: {
        IndexHeader,
        IndexBanner,
        IndedxListNav,
        IndexUpSwiper,
        IndexTwoSec,
        IndexFloor,
        IndexFooter
    }
}
</script>

<style>
.lindex {
    background-color: rgba(0, 0, 0, .055);
}
</style>
