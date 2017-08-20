<template>
  <div id="index">
    <swiper>
        <swiper-slide v-for="item in img"  class="swiper-item">
          <img :src="item['pic']">
          
         
        </swiper-slide>


    </swiper>
    <div class="day">

    </div>
      <div class="recommend-resource">
        <h1>推荐歌单</h1>
       <ul  >
          <li v-for="item in list">  
            <img :src="item['picUrl']">
            <h2>{{item['name']}}</h2>
          </li>

      </ul>

      </div>
  
     
    
      <div class="personalized-newsong">
        <h1>最新音乐</h1>
         <ul >
          <li v-for="item in newsong">
            <img>
            <h2></h2>
          </li>

        </ul>
      
      </div>
   
      <div class="personalized-mv">
      <h1>推荐mv</h1>
      <ul >
          <li  v-for="item in mv">
            <img>
            <h2></h2>
          </li>

      </ul>
       </div>

  
  </div>
</template>
<script>
 


import {swiperSlide} from 'vue-awesome-swiper';
import swiper from "../common/swiper";
import api from "../../api/api";
export default {
  name:"index",
  components: {
    swiper,
  },
  data(){
      return{
          list:[],
          newsong:[],
          mv:[],
          img:[],
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
          this.newsong=response.data.result

        })


      },
      getPersonalizedMv(){
          api.getPersonalizedMv().then(response=>{
            this.mv=response.data.result


          })

      }



    }

  }


</script>
 <style lang="less" scoped>
  @rem:40rem;
  #index{
    
    background-color: #f3f4f6;
  }
  .day{
    width:100%;
    height: 198/@rem;
    border-bottom: 1/@rem solid #dfe0e2; 
    display: flex;
    background-color: red;


  }
   .swiper-item {
    float: left;
    height:314/@rem ;
    text-align: center;

   
    width: 100%;
    float: left;
  

    display: flex;
    
    justify-content: center;
   
    align-items: center;
  }
  .swiper-item img{
    width: 100%;
    height: 100%;

  }
  .recommend-resource{
      width: 100%;
      height: 870/@rem;
    
     background-color: green;

  }
  #index ul{
    display: flex;

  }
  #index h1{
    font-size: 30/@rem;
    color:#303231 ;
    font-weight: bold;
    padding-left:20/@rem;
    height: 86/@rem;
    line-height: 86/@rem;

  }
 
  
  .recommend-resource img{
      width:268/@rem ;
      height:268/@rem ;



  }
  #index h2{
    color:#3a3c3b ;
    padding-left: 12/@rem;
    font-size: 20/@rem;
    text-align: center;
    margin: auto;
    font-weight: bold;
  }

  .personalized-newsong{
      width: 100%;
      height: 840/@rem;
     
      background-color: blue;
       overflow: hidden;

  }
  .personalized-newsong img{
      width:268/@rem ;
      height:268/@rem ;



  }
  .personalized-mv{
     width: 100%;
   
     background-color: pink;
    height: 768/@rem
  }
  .personalized-mv  img{
      width:404/@rem ;
      height:228/@rem ;



  }
</style>




