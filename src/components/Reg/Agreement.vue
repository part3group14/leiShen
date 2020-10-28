<template>
    <div class="agreement">
        <label class="login-text">
            <input type="checkbox" v-bind:checked="chex">
            我已阅读并同意
            <a href='https://www.leishen.cn/articledetail/6'>《注册协议》</a>
        </label>
    </div>
</template>

<script>
export default {
  name: 'Agreement',
  props: ['chex'],
  data: function () {
    return {}
  }
}
</script>

<style>
  a{
      text-decoration: none;
      color:#0dcecb;
  }
  .agreement{
      padding:0 10px;
      height:43px;
      width:92%;
      box-sizing: border-box;
  }
  .login-text{
      position: relative;
      display: flex;
      align-items: center;
      left: 0;
      height:100%;
      margin-left: 8%;
      font-size: 14px;
  }
</style>
