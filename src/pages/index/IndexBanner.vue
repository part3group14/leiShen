<template>
<div class="swiper-container swiper-container-horizontal">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" style="background: rgb(22, 27, 24);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020083106210498693.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide swiper-slide-duplicate-next" style="background: rgb(255, 128, 0);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020093009332398242.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide" style="background: rgb(126, 216, 211);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020093004573046747.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide" style="background: rgb(98, 43, 97);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020040203172710554.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide" style="background: rgb(128, 128, 255);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2019122603022282813.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide swiper-slide-prev" style="background: rgb(0, 0, 0);">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020040203182163564.jpg" alt="轮播图">
            </a>
        </div>
        <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" style="background-color: rgb(0, 64, 64); width: 375px;">
            <a style="width: 100%;display: inline-block">
                <img src="https://cdn.leishen.cn/upload/config/2020102002450064389.jpg" alt="轮播图">
            </a>
        </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets">
        <span class="swiper-pagination-bullet" style=" width: 20px,height: 2.5px"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet"></span>
        <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
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
            new Swiper('.swiper-container', {
                speed: 1000,
                loop: true, // 循环模式选项
                autoplay: { // 自动滑动
                    delay: 5000, //1秒切换一次
                    disableOnInteraction: false
                },

                // 如果需要分页器
                pagination: {
                    el: ".swiper-pagination",
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        var customPaginationHtml = "";
                        for (var i = 0; i < total; i++) {
                            //判断哪个分页器此刻应该被激活
                            if (i == (current - 1)) {
                                customPaginationHtml += '<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>';
                            } else {
                                customPaginationHtml += '<span class="swiper-pagination-bullet"></span>';
                            }
                        }
                        return customPaginationHtml;

                    }
                }
            })

        });
    }
}
</script>

<style scoped>
.swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.swiper-container {
    background: #fff;
    padding-bottom: 10px;
}

.swiper-container .swiper-slide {
    text-align: center;
    padding-top: 60px;
    border-radius: 0 0 80px 80px;
    height: 178px;
}

.swiper-container .swiper-slide>a {
    overflow: hidden;
    font-size: 0px;
}

.swiper-slide img {
    width: 95%;
    line-height: 100%;
    border-radius: 8px;
    margin: 0 auto;
}

.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 25px !important;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 !important;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #00eef3 !important;
}

.swiper-pagination-bullets>.swiper-pagination-bullet {
    width: 20px !important;
    height: 2.5px !important;
    border-radius: 10px !important;
}
</style>
