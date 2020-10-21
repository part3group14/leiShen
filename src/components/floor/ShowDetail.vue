<template>
<li class="gooditem">
    <div class="imgs">
        <a href="https://m.leishen.cn/item/958.html">
            <img src="https://cdn.leishen.cn/upload/goods/2020080504572001455_SMALL.jpg">
        </a>
    </div>
    <div class="info">
        <p class="goods-title">
            <a class="ns-text-color-black">雷神911P1-PLUS极夜高端旗舰游戏本</a>
        </p>
        <p class="goods-des">
            <a class="ns-text-color-black">芯10代I7-10875H处理器，32G内存，2T固态，RTX2070 Max-Q独显，300HZ电竞屏，RGB背光键盘，窄边框。</a>
        </p>
        <div class="goods-info">
            <span class="goods-price ns-text-color">
                <em>￥14999</em>
            </span>
        </div>
    </div>
</li>
</template>

<style scoped>
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
