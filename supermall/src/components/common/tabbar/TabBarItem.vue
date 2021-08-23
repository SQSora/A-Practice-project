<template>
  <div class="tab-bar-item" @click="itemclick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
  <!-- 插槽替换时候会把class覆盖掉，所以使用要包裹一个div -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{ //props 接收父组件传值用
      link:String,
      activeColor:{
        type:String,
        default:'#FF5777'
      }
    },
    data() {
      return {
        // isActive:true,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link) !== -1 //要写大写O
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods: {
      itemclick(){
        this.$router.replace(this.link)
      }
    },
  }
</script>

<style >
    .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
