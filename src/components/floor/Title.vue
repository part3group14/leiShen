<template>
<div>
    <div class="category-name">
        <div class="floor-list-title w100_width">

            <span class="floor-left-nav ns-text-color-black fl">911Pro系列</span>
            <a class="assemble-title-right">更多&nbsp;&gt;</a>
        </div>
    </div>
    <div class="w100">
        <a>
            <img src="https://cdn.leishen.cn/upload/config/2020041601495795034.jpg">
        </a>
    </div>
</div>
</template>

<style scoped>
.category-name {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background: none;
    overflow: hidden;
    text-align: center;
    position: relative;
    margin-top: 10px;
}

.floor-list-title {
    overflow: hidden;
    margin: 0 auto;
    display: inline-block;
}

.w100_width {
    width: 100% !important;
}

.floor-left-nav {
    font-size: 16px;
    font-weight: bold;
    float: left;
}

.w100_width .floor-left-nav:before {
    content: '';
    height: 20px;
    width: 3px;
    margin-right: 5px;
    background: #0dcecb;
    display: inline-block;
    vertical-align: sub;
}

.assemble-title-right {
    position: absolute;
    right: 10px;
    color: #333;
}

.w100 img {
    width: 100%;
}
</style>
