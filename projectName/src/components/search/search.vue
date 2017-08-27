<template>
  <div id="search">
    <div class="top">
        <span class="close"> <i class="fa fa-reply returnimg"></i> </span>
        <input type="text" class="search" v-model="txt"> 
        <span class="enter" @click="search(txt)"><i class="fa fa-search"></i> </span>
    </div>
    <ul class="menu" v-show="menu">
        <li v-for="(item,index) in message" @click="tab(index)">{{item.message}}</li>
    </ul>
    <swiper  :options="swiperOption"  ref="mySwiper" class="swiper-box">
        <swiperSlide class="swiper-item">

             <ul class="song">
                     <li v-for="item in song"   @click="getmusicResource(item.id,item.name,item.artists[0].name,item.album.name,item.album.blurPicUrl)">

                        <h3>{{item.name}}</h3>

                        <p> 
                            {{item.artists[0].name}}
                          
                        
                        </p> 

                     </li>

            </ul>
        </swiperSlide>
        <swiperSlide class="swiper-item">

             <ul class="album">
                     <li v-for="item in album">
                         
                             <h3>{{item.name}}</h3> 
                     </li>

            </ul>
        </swiperSlide>
        <swiperSlide class="swiper-item" >

             <ul class="singer">
                     <li v-for="item in singer">
                         
                             <h3>{{item.name}}</h3>
                             <p>{{}}</p>
                     </li>

            </ul>
        </swiperSlide>
         <swiperSlide class="swiper-item">

             <ul class="list">
                     <li v-for="item in list">
                        <h3> {{item.name}}</h3> 
                             
                     </li>

            </ul>
        </swiperSlide>
        
           
    </swiper>

  </div>
</template>
<script>
import api from "../../api/api"
import {swiperSlide ,swiper} from 'vue-awesome-swiper';
export default {
    data(){
        return{
            menu:false,
            swiperOption:{
              
              direction : 'horizontal',
              grabCursor : true,
              setWrapperSize :true,
              paginationClickable :true,
              mousewheelControl : false,
              observeParents:true,

            },
            message:[
                {message:"歌曲"},
                {message:"专辑"},
                {message:"歌手"},
                {message:"歌单"},
               
            ],
            txt:"",
            song:[],
            singer:[],
            album:[],
            list:[],
            id:[]
            
        }

    },

    methods:{
        initSearchList (txt) {
            this.getSingleResource(txt); //  获取搜索单曲
            this.getAlbumResource(txt); //  获取搜索专辑
            this.getSingerResource(txt); //  获取搜索歌手
            this.getPlayListResource(txt); //  获取搜索歌单
          
        
      },
        search(txt){
            this.initSearchList(txt)
            this.menu=true;
           

        },
        getSingleResource(txt){
             api.getSearchResource(txt, 1, 20, 0).then(Response=>{
              
                this.song=Response.data.result.songs
                


            })
        },
        getAlbumResource(txt){
             api.getSearchResource(txt,10 , 20, 0).then(Response=>{
                
                this.album=Response.data.result.albums
                         


            })


        },
        getSingerResource(txt){
             api.getSearchResource(txt,100 , 20, 0).then(Response=>{
                
                this.singer=Response.data.result.artists
               


            })


        },
        getPlayListResource(txt){
             api.getSearchResource(txt,1000 , 20, 0).then(Response=>{
                
                this.list=Response.data.result.playlists
              


            })


        },
        tab(index){
    
            this.swiper.slideTo(index, 0, false);  

        },
        getmusicResource(id,name,singer,album,imgurl){
            this.id=id
            console.log(name)
            
           api.getMusicUrlResource(id,name,singer,album,imgurl).then(Response=>{
              
               this.$store.commit("playMusic",{
                    id:id,name:name,singer:singer,album:album,imgurl:imgurl,url:Response.data.data[0]["url"]


               }),
                this.$store.commit("addmusic",{
                    id:id,name:name,singer:singer,album:album,imgurl:imgurl,url:Response.data.data[0]["url"]


               }),
               this.$store.commit("play",true)



           }),
           api.getLyricResource(id).then(Response=>{
             
               this.$store.commit("addlylic",Response.data.lrc.lyric)


           })

        }
      

    },
    components:{
        swiperSlide ,swiper
    },
    computed:{
        swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  

    }

}
</script>
<style lang="less" scoped>
    @rem:40rem;
    .top{
        width: 100%;
        height: 120/@rem;
        background-color: #d33a31;
        position: fixed;
        overflow: hidden;
        top: 0;
        z-index: 10;
    }
    .search{
        position: absolute;
        left: 86/@rem;
        top: 40/@rem;
        width:486/@rem ;
        height:60/@rem ;
        background-color:#d33a31;
        outline: none;
        border: 0px;
        border-bottom: 2/@rem solid  white;
        font-size: 26/@rem;
        color:white;
       



    }
    .close{
        position: absolute;
        left:28/@rem;
        top:60/@rem;

    }
    .enter{
        position: absolute;
        right: 22/@rem;
        top:55/@rem ;

    }
    .menu{
        
        display: flex;
        width: 100%;
        height: 60/@rem;
        position: fixed;
        z-index: 10;
        top: 120/@rem;
         background: white;

    }
    .menu li{
        flex-grow:1;
        font-size: 20/@rem;
        text-align: center;
        line-height: 60/@rem;


    }
    
     .swiper-box {
    width: 100%;
    
    margin: 180/@rem auto  0;
  }
  .swiper-item {
    float: left;
   



    width: 100%;
    
  


  }
  .song li {
    height: 86/@rem;
    border:1/@rem solid #e6e8e9; 
    padding-left:6/@rem; 
  }
.song h3{
    height:20/@rem;
     color:#4172a8;   
    margin-top: 20/@rem ;
    font-size: 20/@rem;
    line-height:20/@rem ;
} 
.song p{
    font-size: 16/@rem;
    margin-top: 14/@rem;



}
</style>

