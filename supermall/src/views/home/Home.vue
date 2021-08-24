<template>
  <div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" key="">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from '@/components/common/Navbar/Navbar.vue'
  import {getHomeMultidata} from 'network/home'
  import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

  export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return{
        banners:[],
        recommend:[],
      }
    },
    created(){
      getHomeMultidata().then(res =>{
        // console.log(res); 
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;        
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  
}
</style>
