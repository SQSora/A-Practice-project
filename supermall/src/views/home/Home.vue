<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"/>
  </div>

</template>

<script>
  import {getHomeMultidata,getHomeGoods} from 'network/home'

  import NavBar from '@/components/common/Navbar/Navbar'
  import tabControl from '@/components/comtent/tabControl/TabControl' 
  import GoodsList from '@/components/comtent/goods/GoodsList'

  import HomeSwiper from './HomeSwiper/HomeSwiper'
  import RecommendView from './HomeSwiper/RecommendView'
  import FeatureView from './HomeSwiper/FeatureView.vue'

  

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      tabControl,
      GoodsList,
    },
    data(){
      return{
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop'
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      this.getHomeMultidata()     //请求多个数据，加上this才是调用methods的定义 
      
      this.getHomeGoods('pop');   //请求商品数据
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      //事件监听
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      //网络请求
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
            // console.log(res); 
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;        
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;

        getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list);//将.list的元素依次解析出来放到goods对应的地方
        this.goods[type].page + 1        
        console.log(res); 
      })
      }
    },
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  
}
</style>
