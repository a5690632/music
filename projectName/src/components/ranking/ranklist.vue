<template>
  <div class="ranklist">
      <div class="message">
        <span class="fanhui" @touchstart="fanhui"><i class="fa fa-reply returnimg"></i></span>
        <dl class="list-message clearfix" >
            <dt class="list-img" v-if="rankmessage.creator.avatarUrl"><img v-lazy="rankmessage.creator.avatarUrl"></dt>
            <dd class="music-message" v-if="rankmessage">
                <h3>{{rankmessage.name}}</h3>
                <p>{{rankmessage.creator.nickname}}</p>
            </dd>
        </dl>
          <ul class="menu" >
            <li v-for="item in menu">
                <p><i :class="item.class"></i></p>
                <p>{{item.message}} </p>
            </li>

        </ul>
      </div>
        <ul class="list">
            <li v-for="(item,index) in ranklist" @touchstart="getmusicResource(item.id,item.name,item.artists[0].name,item.album.name,item.album.picUrl)">
                <div class="index">{{index+1}}</div>
                <div class="songmessage">
                    <p class="songname">{{item.name}}</p>
                    <p class="singer"><span v-for="items in item.artists">{{items.name}}</span></p>	
                </div>

            </li>

        </ul>

  </div>
</template>
<script>
import api from "../../api/api"
export default {
    data(){
        return{
             menu:[
                    {message:"收藏",class:"fa "},
                    {message:"评论", class:"fa "},
                    {message:"分享",class:"fa "},
                    {message:"下载",class:"fa "},
                
                

            ],
           rankmessage :[],
            
            ranklist:[],

        }
    },
    methods:{
        fanhui(){
            this.$router.go(-1);
           
            
        },
         getmusicResource(id,name,singer,album,imgurl){
           
         
            
           api.getMusicUrlResource(id,name,singer,album,imgurl).then(Response=>{
              
               
                this.$store.commit("addmusic",{
                    id:id,name:name,singer:singer,album:album,imgurl:imgurl,url:Response.data.data[0]["url"]


               }),
               this.$store.commit("play",true),
                this.$store.commit("playMusic")


           })
           .catch((response) => {
            console.log(response);
            }),
           api.getLyricResource(id).then(Response=>{
             
               this.$store.commit("addlylic",Response.data.lrc.lyric)


           }) 
           .catch((response) => {
          console.log(response);
            });

        },
         getrank(){
         api.getTopListResource(this.$route.params.id).then(Response=>{
              this.rankmessage = Response.data.result;
              this.ranklist = Response.data.result.tracks
          
              
         }) 
         .catch((response) => {
          console.log(response);
        });

       },

    },
    created(){
        this.getrank()

    },
    watch:{
         '$route'(){
         this.getrank(this.$route.params.id)

         }
    }
}
</script>
<style lang="less" scoped>
    @rem:40rem;
    .message{
        width:100%;
        height:426/@rem;
        background-color:#6a99d1 ;
        overflow: hidden;

    }
    .fanhui{
        position: absolute;
        left:30/@rem;
        top: 30/@rem

    }
    .list-message{
        margin-top:100/@rem ;
        padding-left: 34/@rem;
        width: 100%;
        height: 196/@rem;
        margin-bottom:50/@rem; 
    }
   .list-img{
       float: left;
        
   }
    .list-img img{
        width:196/@rem ;
        height:196/@rem ;

    }
   .music-message{
        float: left;
        margin-left: 10/@rem;
        overflow: hidden;
      
    
    
   }
   .music-message h3{
       font-size: 20/@rem;
 
      
       margin-top:20/@rem ;
       margin-bottom:30/@rem ;
        font-weight: bold;
      
        width:380/@rem ;



   }
    .music-message p{
        font-size: 22/@rem;



   }
    .menu{
       display: flex;
        width: 100%;
       margin-top: 10/@rem;
       height: 94/@rem;


   }
   .menu li{
       flex-grow: 1;
       font-size: 16/@rem;
       

   }
   .menu p{
       text-align: center;

   }
   .menu span{
       font-size:18/@rem ;
       color:white ;

   }
   .list{
       overflow: auto; 


   }
   .list li{
       height: 84/@rem;
       border-top:2/@rem solid gray;

   }
   .index{
        float: left;
        width:78/@rem ;
        height: 84/@rem;
      
        font-size:20/@rem ;
        text-align:center ;
        line-height: 84/@rem;
        color:#98999a ;
   }
   .songmessage{
       float: left;
       height:84/@rem ;
       
       width:562/@rem ;
     

   }
   .songname{
      
      
       font-size:18/@rem ;
       line-height:18/@rem ;
       color: black ;
       font-weight:bold ;
       margin-top: 20/@rem;
       margin-bottom:10/@rem ;


   }
   .singer{
       height:14/@rem ;
       line-height: 14/@rem;
       font-size:14/@rem ;
       color: #aeafb0;

   }
</style>
