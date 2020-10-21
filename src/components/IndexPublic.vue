<template>
<div id="news">
    <div class="fl">
        <span>
            <img src="../../public/images/kuaibao.png" alt="" />
        </span>
    </div>
    <div class="bx-wrapper">
        <ul class="marquee_list" :class="{ marquee_top: animate }">
            <li v-for="(item, index) in marqueeList" :key="index">
                <span>{{ item.name }}</span>
            </li>
        </ul>
    </div>
    <div class="more">
        <a href="#">更多 &gt;</a>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            animate: false,
            marqueeList: [{
                    name: '官宣，雷神正式成为SN战队新赛季赞助商'
                },
                {
                    name: '全球创业创新生态峰会召开，雷神科技获青岛市高科技高成长企业50强'
                },
                {
                    name: '全球创业创新生态峰会召开，雷神科技获青岛市高科技高成长企业50强'
                },
                {
                    name: '心动不同凡响 雷神首款真无线HL10蓝牙耳机9月9日正式上市'
                },
                {
                    name: '恰同学少年，湘约竞迹！雷神玩家联盟粉丝派对-长沙站圆满落幕'
                },
                {
                    name: '雷动星城 无限竞迹 2020雷神粉丝派对-长沙站即将开启'
                },
                {
                    name: '雷神科技荣登2020年青岛市民营企业百强榜'
                }
            ]
        }
    },
    created: function () {
        setInterval(this.showMarquee, 3000)
    },
    methods: {
        showMarquee: function () {
            this.animate = true
            setTimeout(() => {
                this.marqueeList.push(this.marqueeList[0])
                this.marqueeList.shift()
                this.animate = false
            }, 400)
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}

#news {
    width: 95%;
    margin: 10px 2.5%;
    margin-bottom: -5px;
    display: inline-block;
    overflow: hidden;
}

.bx-wrapper {
    width: 237px;
    height: 30px;
    /* background-color: blueviolet; */
    margin-left: 78px;
    box-sizing: border-box;
    position: relative;
}

.marquee_list {
    display: block;
    position: absolute;
    top: 4px;
    left: 0;
}

.marquee_top {
    transition: all 0.5s;
    margin-top: -30px
}

.marquee_list li {
    height: 30px;
    line-height: 23px;
    font-size: 14px;
    color: #333333;
    width: 220px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.marquee_list li span {
    padding: 0 2px;

}

.fl {
    float: left;
}

.fl span {
    width: 70px;
    height: 30px;
    border-right: 1px solid #eeeeee;
    vertical-align: middle;
    line-height: 40px;
    padding-right: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fl span img {
    width: 100%;
    height: auto;
}

.more {
    width: 43px;
    height: 30px;
    float: right;
    border-left: 1px solid #eeeeee;
    text-align: center;
    line-height: 30px;
    margin-top: -30px;
    padding-left: 5px;
}

.more a {
    cursor: pointer;
    text-decoration: none;
    color: #333333;
    font-size: 14px;
}
</style>
