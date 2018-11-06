<template>
  <div class="home">

    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  export default {
    //组件名称
    name: 'Home',

    //组件的数据模型
    data () {
      return {
        msg: 'vue的组件'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 如果添加scoped属性, 该css仅在当前组件生效 -->
<style scoped>
  .home{
    color: #e49;
  }
</style>
