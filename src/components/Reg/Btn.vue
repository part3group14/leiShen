<template>
  <button class="btn-reg">
    <span>{{title}}</span>
  </button>
</template>

<script>
export default {
  name: 'Agreement',
  props: ['title'],
  data: function () {
    return {}
  }
}
</script>

<style scoped>
  .btn-reg{
    margin: 0 auto 10px;
    border: none;
    border-radius: 2px;
    display: block;
    width: 85%;
    height: 35px;
    background:#00eef3;
    outline: none;
  }
</style>
