<template>
<div class="control-search">
    <div class="control-search-input">
        <a class="logo_wap"><img src="../../public/images/logonew.png"> </a>
        <input type="text" class="search-input custom-search-input ns-text-color-gray" placeholder="请输入要搜索的商品">
        <router-link to="/Search">
            <button type="button" class="search-button custom-search-button ns-border-color-gray">搜索</button>
        </router-link>
        <a href="#" class="myshop"><i class="iconfont icon-huiyuan"></i></a>
    </div>
</div>
</template>

<style scoped>
.control-search {
    width: 100%;
    padding: 10px 0;
    background: none;
    left: 0;
    top: 0;
    z-index: 9;
    position: absolute;
}

.control-search .control-search-input {
    width: 100%;
    margin: 0;
    height: 38px;
    border-radius: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.logo_wap img {
    width: 65px;
}

.control-search .control-search-input .search-button {
    width: 10%;
    margin: 4px 0;
    height: 22px;
    line-height: 22px;
    border: none;
    font-size: 14px;
    text-indent: -9999px;
    background: url(../../public/images/index_search.png) center no-repeat;
    background-size: 14px 14px;
    border-left: 1px solid;
    right: 13%;
    position: absolute;
    top: 14px;
}

.ns-border-color-gray {
    border-color: #e5e5e5 !important;
}

.control-search .control-search-input .search-input {
    width: 180px;
    border-radius: 20px;
    height: 30px;
    line-height: 30px;
    margin: 0px 0;
    padding: 0 15px;
    padding-right: 13%;
    border: none;
    background: #fff;
}

.ns-text-color-gray {
    color: #898989 !important;
}

.myshop {
    display: inline-block;
}

.myshop .iconfont {
    font-size: 26px;
    color: #fff;
    vertical-align: middle;
}

.myshop .iconfont.icon-huiyuan {
    font-weight: 600;
}

input::-webkit-input-placeholder {
    font-size: 12px;
    color: #898989 !important;
}
</style>
