<template>
<li class="list-item ns-border-color-gray">
    <div class="product-img">
        <a href="#">
            <img :src="goods.img">
        </a>
    </div>
    <div class="list-right"><a class="pd-title pr" href="#"><span>{{goods.name}}</span></a>
        <div class="pd-price"><i class="ns-text-color">￥{{goods.price}}</i></div>
        <div class="pd-main cleart">
            <div class="ns-text-color-gray"><i>{{goods.payNum}}</i><span>人付款</span></div>
        </div>
    </div>
</li>
</template>

<script>
export default {
    props: {
        goods: Object
    },
    created() {}
}
</script>

<style scoped>
.list-content>li {
    min-height: 80px;
    border-bottom: 1px solid;
}

.ns-border-color-gray {
    border-color: #e5e5e5 !important;
}

.list-item,
.list>.item {
    position: relative;
    display: flex;
    padding: 10px;
}

.list-content .product-img {
    height: 100px;
    min-width: initial;
    text-align: center;
}

.product-img>a {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
}

.product-img>a>img {
    min-width: 100%;
    min-height: 100%;
}

.list-right {
    width: 80%;
}

.list-right span {
    color: #333;
}

.list-item>*,
.list>.item>* {
    margin-left: .5rem;
}

.pd-title {
    height: 44px;
    line-height: 22px;
    margin-bottom: 5px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 14px;
}

.pd-price i:nth-child(1) {
    font-size: 18px;
}

.ns-text-color {
    color: #FF0036 !important;
}

.pd-main>div {
    float: right;
    margin-top: 3px;
    margin-right: 20px;
    font-size: 12px;
}

.ns-text-color-gray {
    color: #898989 !important;
}
</style>
