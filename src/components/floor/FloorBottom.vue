<template>
<div>
    <div class="gotop" @click="backtop()">
        <i class="iconfont icon-top"></i>
    </div>
    <div class="dibu">
        <ul>
            <li>
                <a>
                    <img src="../../../public/images/dibu1.png" alt="">
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../public/images/dibu2.png">
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../public/images/dingbu3.png">
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../public/images/dibu4.png">
                </a>
            </li>
        </ul>
    </div>
    <div class="beian">
        <p>
            鲁ICP备14015908号-1
        </p>

        <a class="beianfr">
            在线客服：
            <i class="iconfont icon-kefu"></i>
        </a>
    </div>
</div>
</template>

<script>
export default {
    props: {
        goods: Object
    },
    methods: {
        //返回顶部
        backtop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop
            // 实现滚动效果
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50
                if (top <= 0) {
                    clearInterval(timeTop)
                }
            }, 10)
        },
    }
}
</script>

<style>
.gotop {
    width: 100%;
    background: #FFF;
    padding: 10px 0;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    margin-top: -5px;
}

.gotop .iconfont {
    font-size: 26px;
    font-weight: bolder;
}

.dibu {
    display: block;
    background: #FAFAFA;
    overflow: hidden;
}

.dibu ul li {
    width: 25%;
    line-height: 40px;
    height: 40px;
    margin-top: 10px;
    float: left;
    text-align: center;
}

.dibu ul li img {
    width: 90%;
    display: inline-block;
    vertical-align: middle;
}

.beian {
    position: relative;
    margin-bottom: 61px;
}

.beian {
    width: 100%;
    padding: 10px 5px 5px 5px;
    box-sizing: border-box;
    font-size: 16px;
    background: none;
    line-height: 30px;
    display: inline-block;
    color: #333;
    padding-bottom: 20px;
}

.beian p {
    float: left;
}

.beianfr {
    position: absolute;
    right: 10px;
    top: 5px;
}
</style>
