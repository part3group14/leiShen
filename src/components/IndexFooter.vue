<template>
<div class="bottom-menu">
    <ul>
        <li>
            <a>
                <i class="iconfont icon-shouye1"></i>
                <span>首页</span>
            </a>
        </li>
        <li>
            <a>
                <i class="iconfont icon-shangpinfenlei"></i>
                <span>商品分类</span>
            </a>
        </li>
        <li>
            <a>
                <i class="iconfont icon-global_shopcart"></i>
                <span>购物车</span>
            </a>
        </li>
        <li>
            <a>
                <i class="iconfont icon-huiyuan"></i>
                <span>会员中心</span>
            </a>
        </li>
    </ul>
</div>
</template>

<style>
.bottom-menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 998;
    background: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .5);
}

.bottom-menu ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.bottom-menu ul li {
    text-align: center;
}

.bottom-menu ul li:hover {
    color: #1dcfcf;
}

.bottom-menu ul li a {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 5px 0;
}

.bottom-menu ul li .iconfont {
    font-size: 22px;
    font-weight: 500;
    color: rgb(153, 153, 153);
}

.bottom-menu ul li .iconfont.icon-shouye1 {
    font-size: 18px;
    margin-bottom: 2px;
}

.bottom-menu ul li span {
    font-size: 12px;
    line-height: 18px;
}
</style>
