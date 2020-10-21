<template>
<div class="classify-content">
    <ul class="primary-classification">
        <li v-for="(item,index) in itemTheme" :key="index" :class="{'ns-text-color':index===current}" @click="change(index)"> <a @click="showToggle(item)">{{item.title}}</a>
            <ul class="two-stage-classification" v-if="item.isShowSub">
                <li v-for="(subItem,index) in item.subItems" :key="index"><a>{{subItem.con}}</a></li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            current: 0,
            itemTheme: [{
                    "title": "全部分类"
                },
                {
                    "title": "游戏笔记本",
                    "isShowSub": false,
                    "subItems": [{
                        "con": "hahahha"
                    }]
                },
                {
                    "title": "八核心专区",
                    "isShowSub": false,
                    "subItems": [{
                        "con": "asdfg"
                    }]
                },
                {
                    "title": "游戏台式机",
                    "isShowSub": false,
                    "subItems": [{
                        "con": "asdfgh"
                    }]
                },
                {
                    "title": "电竞显示器"
                },
                {
                    "title": "游戏鼠标"
                },
                {
                    "title": "游戏耳机"
                },
                {
                    "title": "电竞箱包"
                },
                {
                    "title": "周边配件"
                },
                {
                    "title": "雷域商城"
                },
                {
                    "title": "神级服务"
                }
            ]
        }
    },
    methods: {
        change(index) {
            this.current = index;
        },
        showToggle: function (item) {
            item.isShowSub = !item.isShowSub;
        }
    }
}
</script>

<style>
.classify-content {
    position: absolute;
    height: 470px;
    width: 100%;
    z-index: 10;
}

.primary-classification {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
}

.primary-classification>li {
    height: 40px;
    line-height: 40px;
    width: 30%;
    padding: 0 2% 0 4%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

.ns-text-color {
    color: #FF0036 !important;
}

.two-stage-classification {
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    height: 100%;
    overflow-y: scroll;
}

.two-stage-classification>li {
    margin-left: 2%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    color: #333;
}
</style>
