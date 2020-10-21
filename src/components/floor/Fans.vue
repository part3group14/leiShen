<template>
<div>
    <div class="category-name">
        <div class="floor-list-title w100_width">

            <span class="floor-left-nav ns-text-color-black fl">同城粉丝会</span>
            <a class="assemble-title-right">更多&nbsp;&gt;</a>
        </div>
    </div>
    <div id="fans" class="swiper-container-horizontal">

        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" style="width: 172.5px; margin-right: 10px;">
                <a>
                    <img src="https://cdn.leishen.cn/goods/1533880258596881.jpg">
                    <span>雷神粉丝派对大连站走起</span>
                </a>
                <a>
                    <img src="https://cdn.leishen.cn/goods/1533880427989921.jpg">
                    <span>2018粉丝派对嗨畅西安</span>
                </a>
            </div>
            <div class="swiper-slide">
                <a>
                    <img src="https://cdn.leishen.cn/goods/1533880652862421.jpeg">
                    <span>2018青岛同城粉丝派对</span>
                </a>
                <a>
                    <img src="https://cdn.leishen.cn/upload/cms_article_img/1533853667006534747.jpg">
                    <span>2018深圳同城粉丝派对</span>
                </a>
            </div>
            <div class="swiper-slide">
                <a href="https://m.leishen.cn/article/273.html">
                    <img src="https://cdn.leishen.cn/upload/cms_article_img/1543174065795355775.png">
                    <span>雷神粉丝联盟派对进驻长沙</span>
                </a>
                <a>
                    <img src="https://cdn.leishen.cn/upload/cms_article_img/1533928127460597381.png">
                    <span>2018雷神Chinajoy嘉年华</span>
                </a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "Banner",
    data: function () {
        return {

        }
    },
    async created() {
        // let res = await axios({
        //     url: "bannerImgs",
        // })
        // this.imgs = res.data;

        // 下次事件循环（刷新队列（数据更新引发的dom更新）：dom更新）
        this.$nextTick(() => {
            new Swiper('.swiper-container-horizontal', {
                loop: true // 循环模式选项
            })

        });
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

#fans {
    width: 100%;
    padding-bottom: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

#fans .swiper-wrapper .swiper-slide {
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;

}

#fans .swiper-wrapper .swiper-slide a {
    background: #fff;
    margin-right: 5px;
    width: 46%;
    display: block;
    float: left;
}

#fans .swiper-wrapper .swiper-slide img {
    width: 100%;
    height: 115px;
    border-radius: 0;
}

#fans .swiper-wrapper .swiper-slide span {
    width: 100%;
    text-align: center;
    line-height: 35px;
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
}
</style>
