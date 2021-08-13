<!-- 
tabbar组件，tabbaritem组件设计与结构都已经封装好了，不用再设置。
程序运行时候。。先使用<tab-bar>，然后在这里面使用<tab-bar-item>。
为什么tabbar组件里面是空的，因为用的是tabbat的样式！
-->
<template>
  <div id="app">
        <router-view></router-view>
    <tab-bar>
      <!-- <div>123</div> -->
      <tab-bar-item link="/home" activeColor="#FF5777">
        <img slot="item-icon" src=".\assets\img\tabbar\home.svg">
        <img slot="item-icon-active" src=".\assets\img\tabbar\home_active.svg">  
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="red">
        <img slot="item-icon" src=".\assets\img\tabbar\category.svg">
        <img slot="item-icon-active" src=".\assets\img\tabbar\category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart" activeColor="blue">
        <img slot="item-icon" src=".\assets\img\tabbar\shopcart.svg">
        <img slot="item-icon-active" src=".\assets\img\tabbar\shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="#FF5777">
        <img slot="item-icon" src=".\assets\img\tabbar\profile.svg">
        <img slot="item-icon-active" src=".\assets\img\tabbar\profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
