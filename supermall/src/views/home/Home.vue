<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/Navbar/Navbar'
  import HomeSwiper from './HomeSwiper/HomeSwiper'
  import {getHomeMultidata} from 'network/home'
  import RecommendView from './HomeSwiper/RecommendView'

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return{
        banners:[],
        recommends:[],
      }
    },
    created(){
      getHomeMultidata().then(res =>{
        // console.log(res); 
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;        
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  
}
</style>
