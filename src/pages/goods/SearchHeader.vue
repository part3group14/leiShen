<template>
<div id="head">
    <div class="search-container ns-text-color-gray">
        <div class="classify head-btn" @click="fn()"><i class="iconfont icon-liebiao-copy"></i>分类</div>
        <div class="search-tab ns-bg-color-gray-fadeout-60">
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" class="search" placeholder="请输入您要搜索的商品">
        </div>
        <div class="head-btn search-list"><i class="iconfont icon-liebiao"></i>列表</div>
    </div>
    <ul class="sort-tab ns-border-color-gray">
        <li>
            <span class="ns-text-color">综合</span>
        </li>
        <li>
            <span>销量</span>
        </li>
        <li>
            <span>价格</span>
            <div class="price-pic">
                <i class="iconfont icon-arrow-up"></i>
                <i class="iconfont icon-arrow-down"></i>
            </div>
        </li>
    </ul>
    <SearchSubNav v-if="isShow"></SearchSubNav>
    <div class="niu-mask-layer" v-if="isShow"></div>
</div>
</template>

<script>
import SearchSubNav from './SearchSubNav';
export default {
    data() {
        return {
            isShow: false
        }
    },
    components: {
        SearchSubNav
    },
    methods: {
        fn() {
            this.isShow = !this.isShow;
        }
    },
}
</script>

<style scoped>
#head {
    width: 100%;
    background-color: #fff;
    position: relative;
}

.search-container {
    height: 45px;
    font-size: 12px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 10px;
}

.ns-text-color-gray {
    color: #898989 !important;
}

.head-btn {
    width: 15%;
    text-align: center;
    font-size: 12px;
}

.head-btn {
    width: 15%;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
}

.iconfont.icon-liebiao-copy {
    font-size: 17px;
}

.iconfont.icon-liebiao {
    font-size: 13px;
}

.search-tab {
    width: 70%;
    height: 45px;
    position: relative;
}

.ns-bg-color-gray-fadeout-60 {
    background-color: rgba(229, 229, 229, 0.4) !important;
}

.search-tab>i {
    width: 15%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    float: right;
}

.search-tab>input {
    width: 85%;
    height: 45px;
    border: 0;
    position: absolute;
    background-color: transparent;
    padding-left: 15px;
}

input::-webkit-input-placeholder {
    font-size: 12px;
}

.sort-tab {
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid;
    display: flex;
}

.ns-border-color-gray {
    border-color: #e5e5e5 !important;
}

.sort-tab>li {
    float: left;
    flex: 1;
    text-align: center;
    font-size: 14px;
}

.price-pic {
    display: inline-block;
    width: 13px;
    height: 16px;
    text-align: center;
    position: relative;
}

.price-pic .iconfont {
    font-size: 9px;
    position: absolute;
    text-align: center;
}

.price-pic .icon-arrow-down {
    bottom: -5px;
}

.ns-text-color {
    color: #FF0036 !important;
}

.niu-mask-layer {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    z-index: -1;
}
</style>
