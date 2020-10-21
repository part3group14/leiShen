<template>
<div>
    <div class="floor">
        <div class="category-name ">
            <div class="floor-list-title">
                <div class="floor-title-left">
                    <div class="floor-title-left-second ns-border-color-gray"></div>
                </div>
                <span class="floor-left-nav ns-text-color-black">活动专区</span>
                <div class="floor-title-right">
                    <div class="floor-title-left-second ns-border-color-gray"></div>
                </div>
            </div>
        </div>
        <section class="index_activty">
            <div class="g_left">
                <a>
                    <img src="https://cdn.leishen.cn/upload/config/2020091010121039460.jpg">
                </a>
            </div>
            <div class="active_main_right">
                <div class="active_top active_main">
                    <div class="free">
                        <a>
                            <div class="title">
                                免费试用
                            </div>

                            <div class="time time1">
                                <div id="time_tip" class="timeshow">距离开奖还有</div>
                                <van-count-down :time="time">
                                    <template #default="timeData">
                                        <span class="colon">15</span>
                                        <span class="colon">天</span>
                                        <span class="colon">{{ timeData.hours }}</span>
                                        <span class="colon">时</span>
                                        <span class="colon">{{ timeData.minutes }}</span>
                                        <span class="colon">分</span>
                                        <span class="colon">{{ timeData.seconds }}</span>
                                        <span class="colon">秒</span>
                                    </template>
                                </van-count-down>
                            </div>

                            <img src="https://cdn.leishen.cn/upload/goods/2019122804280035575_MID.png" onerror="this.src='/template/wap/default/public/img/free_try.jpg'" class="active_tu">
                        </a>
                    </div>
                </div>
                <div class="active_top active_main">
                    <a>
                        <img src="https://cdn.leishen.cn/upload/config/2020062907034458420.jpg" class="gd">
                    </a>
                </div>
            </div>
        </section>
    </div>
    <div class="floor">
        <div class="category-name ">
            <div class="floor-list-title">
                <div class="floor-title-left">
                    <div class="floor-title-left-second ns-border-color-gray"></div>
                </div>
                <span class="floor-left-nav ns-text-color-black">爆品推荐</span>
                <div class="floor-title-right">
                    <div class="floor-title-left-second ns-border-color-gray"></div>
                </div>
            </div>
        </div>
        <section class="index_activty">
            <div class="g_left">
                <a class="spcImg">
                    <img src="https://cdn.leishen.cn/upload/config/2020092503204999078.jpg">
                </a>
            </div>
            <div class="active_main_right">
                <div class="active_top active_main">
                    <a>
                        <img src="https://cdn.leishen.cn/upload/config/2020092503214645668.jpg" class="gd">
                    </a>
                </div>
                <div class="active_top active_main">
                    <a>
                        <img src="https://cdn.leishen.cn/upload/config/2020092503221964481.jpg" class="gd">
                    </a>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            time: 30 * 60 * 60 * 1000,
        };
    },
}
</script>

<style scoped>
.floor {
    margin-top: 10px;
    display: inline-block;
}

.category-name {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background: none;
    overflow: hidden;
    text-align: center;
    position: relative;
}

.floor-list-title {
    overflow: hidden;
    width: auto;
    margin: 0 auto;
    display: inline-block;
}

.floor-title-left {
    float: left;
    margin-right: 5px;
}

.floor-title-left .floor-title-left-second {
    margin-right: 5px;
    margin-top: 15px;
    border-color: #000 !important;
}

.floor-title-left-second {
    width: 20px;
    height: 5px;
    border-bottom: 2px solid;
    margin-top: 15px;
    margin-left: 5px;
}

.floor-left-nav {
    font-size: 16px;
    font-weight: bold;
    float: left;
}

.ns-text-color-black {
    color: #333 !important;
}

.floor-title-right {
    margin-left: 5px;
    float: left;
}

.g_left {
    width: 49.5%;
    float: left;
    border-right: 1px solid #ebebeb;
}

.g_left img {
    width: 100%;
    display: inline-block;
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
    box-sizing: content-box;
}

.spcImg img {
    height: 188px;
}

.active_main_right {
    float: left;
    width: 50%;
    background: #fff;
}

.active_main_right {
    float: left;
    width: 50%;
    background: #fff;
}

.active_main_right .active_top:first-child {
    border-bottom: 1px solid #ebebeb;
    box-sizing: content-box;
}

.free {
    position: relative;
    padding: 5px 5px 13px 5px;
}

.active_main_right .active_top a {
    display: inline-block;
}

.free a {
    position: initial;
}

.active_top .title {
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
}

.time .timeshow {
    color: #9f9f9f;
    font-size: 13px;
    margin-top: 5px;
}

.colon {
    font-size: 12px;
    color: #1dcfcf;
}

.active_main .active_tu {
    position: absolute;
    right: 0;
    top: 0px;
    width: 70px;
    height: 70px;
    display: inline-block;
    z-index: 2;
}
</style>
