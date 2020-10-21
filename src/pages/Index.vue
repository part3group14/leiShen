<template>
<div class="lindex">
    <IndexHeader></IndexHeader>
    <IndexBanner></IndexBanner>
    <IndedxListNav></IndedxListNav>
    <IndexPublic></IndexPublic>
    <IndexTwoSec></IndexTwoSec>
    <IndexFloor></IndexFloor>
    <IndexFooter></IndexFooter>
</div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import IndexBanner from '../components/IndexBanner'
import IndedxListNav from '../components/IndedxListNav'
import IndexPublic from '../components/IndexPublic'
import IndexTwoSec from '../components/IndexTwoSec'
import IndexFloor from '../components/IndexFloor'
import IndexFooter from '../components/IndexFooter'
export default {
    components: {
        IndexHeader,
        IndexBanner,
        IndedxListNav,
        IndexPublic,
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
