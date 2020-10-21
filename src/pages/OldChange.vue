<template>
<div>
    <router-link to="/OldChange.vue"></router-link>
    <header class="ns-header">
        <a class="go-back">
            <van-icon name="arrow-left" color="#333" size="20" />
        </a>
        <h1>以旧换新-雷神官网—雷神,雷神笔记本电脑,雷神游戏本,雷神台式机,游戏笔记本,鼠标键盘官方正品商城！</h1>
    </header>
    <div class="container1">
        <div class="banner">
            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/sj1.jpg">
            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/a.jpg">
            <a href="https://m.leishen.cn/huishou">
                <img src="https://cdn.leishen.cn/activity/activity/images/other/new/sj3.jpg">
            </a>

            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/mold_05.jpg">
            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/mold_06.jpg">
            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/mold_07.jpg">
            <img src="https://cdn.leishen.cn/activity/activity/images/other/new/mold_08.jpg">
        </div>
    </div>
</div>
</template>

<style>
.ns-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    z-index: 1000;
    line-height: 44px;
    border-bottom: solid 1px #e2e2e2;
    background: #f7f7f7;
}

.ns-header .go-back {
    float: left;
    padding: 0 17px;
}

.ns-header>a {
    position: relative;
    z-index: 20;
}

.ns-header>a i {
    line-height: 44px;
}

.ns-header h1 {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    overflow: hidden;
    margin: 0 44px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.banner {
    margin-top: 45px;
}
</style>
