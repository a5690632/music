<template>
  <div id="index">
    <swiper :options="swiperOption"  ref="mySwiper" class="clearfix swiper-box" >
        <swiper-slide v-for="item in img"  class="swiper-item">
          <img v-lazy="item['pic']">
          
         
        </swiper-slide>


    </swiper>
    
      <div class="recommend-resource">
        <h1>推荐歌单</h1>
       <ul  >
          <li v-for="item in list"   @touchstart="getPlaylistDetailResource(item['id'])">  
            <img v-lazy="item['picUrl']">
            <h2>{{item['name']}}</h2>
          </li>

      </ul>

      </div>
  
     
    
      <div class="personalized-newsong">
        <h1>最新音乐</h1>
         <ul >
          <li v-for="item in newsong" >
            <img v-lazy="item['song']['album']['picUrl']">
            <h2>{{item['name']}}</h2>
          </li>

        </ul>
      
      </div>
   
      <div class="personalized-mv">
      <h1>推荐mv</h1>
      <ul >
          <li  v-for="item in mv">
            <img v-lazy="item['picUrl']">
            <h2>{{item['name']}}</h2>
          </li>

      </ul>
       </div>

  
  </div>
</template>
<script>
 


import {swiperSlide ,swiper} from 'vue-awesome-swiper';

import api from "../../api/api";
export default {
  name:"index",
  components: {
    swiper,
    swiperSlide,
  },
  data(){
      return{
          list:[],
          newsong:[],
          mv:[],
          img:[],
          swiperOption:{
              
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              paginationClickable :true,
              mousewheelControl : false,
              observeParents:true,

        }
      }


  },
 mounted(){
    this.getPersonalized()
    this.getNewSong() 
    this.getPersonalizedMv()
    this.getbanner()
 
  },

  methods:{

    getbanner(){
      api.getbanner().then(response=>{
        this.img=response.data.banners
        
    

      })


    },
    //推荐歌单
    getPersonalized() {
      api.getPersonalized().then(response=>{
          this.list=response.data.result;


      });


    },
      
      getNewSong(){
        api.getNewSong().then(response=>{
          this.newsong=response.data.result.slice(0, 6);

        })


      },
      getPersonalizedMv(){
          api.getPersonalizedMv().then(response=>{
            this.mv=response.data.result


          })

      },
      getPlaylistDetailResource(id){
         this.$router.push({
          path: '/playLists/'+id,
        });
      



      }



    }

  }


</script>
 <style lang="less" scoped>
  @rem:40rem;
  #index{
    
    background-color: #f3f4f6;
  }
    .swiper-box{
      width: 100%;
      overflow: hidden;

    }
   .swiper-item {
  
    height:314/@rem ;
    text-align: center;

   
    width: 100%;
    float: left;
  

 
  }
  .swiper-item img{
    width: 100%;
    height: 100%;

  }
  .recommend-resource ,.personalized-newsong{
      width: 100%;
      height: 680/@rem;
    
   

  }
  .recommend-resource ul ,.personalized-newsong ul{
    display: flex;
    height:600/@rem ;
    width: 100%;
    flex-wrap: wrap;
    
  }
   .recommend-resource li,.personalized-newsong li{
      width:210/@rem ;
      flex-grow:1;
   
      
   }
  

  #index h1{
    font-size: 22/@rem;
    color:#303231 ;
    font-weight: bold;
    padding-left:20/@rem;
    height: 80/@rem;
    line-height: 80/@rem;
    
  }


  
  .recommend-resource img , .personalized-newsong img{
      width:210/@rem ;
      height:210/@rem ;



  }
  #index h2{
    color:#3a3c3b ;
    font-size: 20/@rem;
    
    margin: auto;
    font-weight: bold;
    height:76/@rem;
    padding-top: 10/@rem

 

  }

  
  
  .personalized-mv{
     width: 100%;
   
     
    height: 640/@rem
  }

  .personalized-mv  img{
      width:318/@rem ;
      height:180/@rem ;



  }
  .personalized-mv ul{
      display: flex;
      flex-wrap: wrap;
      height:520/@rem ;
      


  }
  .personalized-mv li{
      flex-grow:1;
      width: 320/@rem
      

  }
</style>




