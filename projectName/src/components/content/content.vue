<template>
    <div id="content" class="clearfix">

        <vhead></vhead>
        <ul class="menu" >
              <li v-for="(item,index) in list " @touchstart="tab(index)">



                {{item}}
              </li>



        </ul>


            <swiper :options="swiperOption"  ref="mySwiper" class="swiper-box">  
         
            <swiper-slide class="swiper-item">
                 <index class="content" ></index>
            </swiper-slide>
             <swiper-slide class="swiper-item">
                  <list class="content"></list>
            </swiper-slide>
             <swiper-slide class="swiper-item">
                <rank class="content"></rank>
            </swiper-slide>

                 
                 
            </swiper>
            <audio :src="src" autoplay  ref="audio"></audio>
          
            
           
            


       
         
       
        
    </div>
</template>
<script>

import index from "../index/index";
import list from "../list/list"
import rank from "../ranking/rank"
 import {mapMutations, mapState, mapGetters} from 'vuex'
import vhead from "../head/head"
import {swiperSlide ,swiper} from 'vue-awesome-swiper';
export default {

  name:"content",
  components:{
    vhead,
  
    index,
    list,
    rank,
    swiper,
    swiperSlide,

  },
  data(){
    return{
        swiperOption:{
             notNextTick: true,
            direction : 'horizontal',
           grabCursor : true,
           setWrapperSize :true,
           paginationClickable :true,
          mousewheelControl : false,
          observeParents:true,

        },
        list:[
          "首页","歌单","排行"
        ]


    }

  },
  methods:{
    tab(index){
    
      this.swiper.slideTo(index, 0, false);  

    }
    
  },
  computed:{
    swiper() {  
              return this.$refs.mySwiper.swiper;  
            }, 
     src(){
       return  this.$store.state.audio.url
     },
     ...mapState({
        playing:state=>state.isplay
       
     })
      


     


  },
 mounted(){
      this.$store.commit('findDOM', {name: 'audio', dom: this.$refs.audio});


  }

}
</script>
<style lang="less" scoped>
    @rem:40rem;
     .menu{
          width:100% ;
          height:60/@rem ;
          display: flex;
          background: white;
    }
    .menu li{
        height:60/@rem;
        flex: 1;
        text-align: center;
        line-height:60/@rem;
        font-size: 22/@rem;
  

    }
     .menu li a{
        color:#656565 ;

     }
    .menu{
      position: fixed;
      z-index: 2;
   
    }
    #content{
      margin-top:120/@rem; 
      overflow: hidden;
    }
    .content{
        
      margin-top:60/@rem;
      margin-bottom:96/@rem ;

    }
    .swiper-box {
    width: 100%;
  
    margin: 0 auto;
  }
  .swiper-item {
    float: left;
  



    width: 100%;
    
  


  }
</style>


