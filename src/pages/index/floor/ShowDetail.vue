<template>
<div>
    <div class="category-name">
        <div class="floor-list-title w100_width">

            <span class="floor-left-nav ns-text-color-black fl">{{items.title}}</span>
            <a class="assemble-title-right">更多&nbsp;&gt;</a>
        </div>
    </div>
    <div class="w100">
        <a>
            <img :src="items.showImg">
        </a>
    </div>
    <div class="members-goods-pic ns-border-color-gray">
        <ul>
            <li class="gooditem" v-for="(content,index) in items.content" :key="index">
                <div class="imgs">
                    <a>
                        <img :src="content.goodImg">
                    </a>
                </div>
                <div class="info">
                    <p class="goods-title">
                        <a class="ns-text-color-black">{{content.goodsTit}}</a>
                    </p>
                    <p class="goods-des">
                        <a class="ns-text-color-black">{{content.goodsDec}}</a>
                    </p>
                    <div class="goods-info">
                        <span class="goods-price ns-text-color">
                            <em>￥{{content.goodsPirce}}</em>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        items: Object
    }
}
</script>

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

li.gooditem {
    width: 43%;
    float: left;
    background: #fff;
    margin: 10px 0 0;
    padding: 0 10px;
}

li.gooditem>div.imgs {
    width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    height: auto;
}

li.gooditem>div.imgs a {
    display: block;
    line-height: 200px;
    padding: 50% 0;
    text-align: center;
}

li.gooditem>div.imgs a img {
    width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: middle;
}

li.gooditem>div.info {
    margin-top: 0;
    height: 120px;
    min-height: 25px;
    padding-left: 0;
    position: relative;
    padding-right: 0;
}

.info p.goods-title {
    padding-top: 5px;
    overflow: hidden;
    word-break: break-all;
    font-size: 14px;
}

.info p.goods-title a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
    line-height: 20px;
    height: 20px;
}

.ns-text-color-black {
    color: #333 !important;
}

.goods-des .ns-text-color-black {
    width: 100%;
    color: #9f9f9f !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 40px;
    line-height: 20px;
    font-size: 12px;
}

.info .goods-info {
    margin: 10px 0;
}

.info .goods-info .goods-price {
    font-size: 16px;
}

.ns-text-color {
    color: #FF0036 !important;
}
</style>
