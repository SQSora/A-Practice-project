<template>
<div>
<h2>父组件打印：</h2>
<h2>{{zinum}}</h2>
<h2>{{massage}}</h2>
<comments-vue :Zi_num="app_num"/>
</div>
  <!-- //es6单标签 -->
</template>

<script>
  import commentsVue from './commentsVue.vue'
  export default {
  components: { commentsVue },
    name: 'App',
    comments:{
      commentsVue
    },
    data() {
      return {
        massage : '一二三',
        app_num : 0
      }
    },
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
