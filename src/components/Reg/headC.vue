<template>
  <div class="box">
    <div class="zjt">
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import '../../assets/icon/iconfont.css'
export default {
  name: 'headC',
  props: ['title'],
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .box{
    position: absolute;
    top:0;
    width:100%;
    height: 44px;
    z-index: 1000;
    line-height: 44px;
    border-bottom: solid 1px #e2e2e2;
    background: #f7f7f7;
  }
  .zjt{
    float: left;
    padding: 0 15px;
  }
  .zjt>i{
        font-size: 18px;
        display: block;
  }
  h1{
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    overflow: hidden;
    margin: 0 44px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#333;
  }
</style>
