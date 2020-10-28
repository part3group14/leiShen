<template>
  <div class="box">
    <img class="img1" src="../../../public/reg/assistant_member.png" alt="">
    <div class="img2-box">
      <img class="img2" src="../../../public/reg/qq.png" alt="">
    </div>
    <div class="img3-box">
      <img class="img3" src="../../../public/reg/logo_copy.png" alt="">
      <p>青岛雷神科技股份有限公司 提供技术支持</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qlog',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
  .img1{
    width:80%;
  }
  .img2-box{
    text-align: center;
        margin: 1rem 17%;
        height: auto;
  }
  .img2{
    display: block;
    width:40px;
    height:40px;
  }
  .img3-box{
    text-align: center;
    padding: 10px 0 10px;
    font-size: 12px;
  }
  .img3-box p{
    padding-top: 5px;
    display: block;
    color:#898989;
  }
  .img3{
    width: 90px;
    height: auto;
    display: block;
    margin: 0 auto;
    object-fit: cover;
    min-height: 15px;
    }
</style>
