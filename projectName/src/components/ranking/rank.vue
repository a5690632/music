<template>
  <div class="rankimg">
      <div class="guanfang">
       <h3>官方榜</h3>
       <dl class="crearfix"  @touchstart="jump('0')">
          <dt>
              <img v-lazy="newsong.coverImgUrl">
          </dt>
          <dd>
            <ul>
              <li v-for="(item,index) in newlist">{{index+1}}  {{item.name}}--{{item.artists[0].name}} </li>
            
             
            </ul>


          </dd>
       </dl>
        <dl class="crearfix"  @touchstart="jump('1')">
          <dt>
              <img v-lazy="hotsong.coverImgUrl">
          </dt>
          <dd>
            <ul>
              <li v-for="(item,index) in hotlist">{{index+1}}  {{item.name}}--{{item.artists[0].name}} </li>
            
             
            </ul>


          </dd>
       </dl>
        <dl class="crearfix"  @touchstart="jump('3')">
          <dt>
              <img v-lazy="surgesong.coverImgUrl">
          </dt>
          <dd>
            <ul>
              <li v-for="(item,index) in surgelist">{{index+1}}  {{item.name}}--{{item.artists[0].name}} </li>
            
             
            </ul>


          </dd>
       </dl>
        <dl class="crearfix" @touchstart="jump('2')" >
          <dt>
              <img v-lazy=" originalsong.coverImgUrl">
          </dt>
          <dd>
            <ul>
              <li v-for="(item,index) in originallist">{{index+1}}  {{item.name}}--{{item.artists[0].name}} </li>
            
             
            </ul>


          </dd>
       </dl>
      </div>
       <div class="quanqiu">


      <h3>全球榜</h3>
      <ul >
        <li v-for="item in qiyu" @touchstart="jump(item.idx)">
            <img v-lazy="item.coverImageUrl">
            <h5>{{item.title}}</h5>
        </li>


      </ul>

  </div>
  </div>
</template>
<script>
import api from "../../api/api"
import data from "../../../static/mock/wRL.json"
export default {
  name:"rank",  
  data(){
    return{
      newsong:[],
      newlist:[],
      hotsong:[],
      hotlist:[],
      originalsong:[],
      originallist:[],
      surgesong:[],
      surgelist:[],
      qiyu:data.rankingList,

    }
  },
  mounted(){
    this.gethotsong();
    this.getnewsong();
    this.getoriginalsong();
    this.getsurgesong()


  },
  methods:{
       gethotsong(){
         api.getTopListResource(1).then(Response=>{
              this.hotsong = Response.data.result;
              this.hotlist = Response.data.result.tracks.slice(0, 3);

         }) 
         .catch((response) => {
          console.log(response);
        });

       },
       getnewsong(){
         api.getTopListResource(0).then(Response=>{
              this.newsong = Response.data.result;
              this.newlist = Response.data.result.tracks.slice(0, 3);
           
         }) 
         .catch((response) => {
          console.log(response);
        })

       },
         getoriginalsong(){
         api.getTopListResource(2).then(Response=>{
              this.originalsong = Response.data.result;
              this.originallist = Response.data.result.tracks.slice(0, 3);

         })
          .catch((response) => {
          console.log(response);
        });

       },
         getsurgesong(){
         api.getTopListResource(3).then(Response=>{
              this.surgesong = Response.data.result;
              this.surgelist = Response.data.result.tracks.slice(0, 3);

         }) 
         .catch((response) => {
          console.log(response);
        });

       },
       jump(id){
        this.$router.push({
             path: '/rankLists/'+id,

         })

       }
  }
}
</script>
<style lang="less" scoped>
@rem:40rem;
  h3{
  
    height:78/@rem;
    line-height:78/@rem ;
    font-size:25/@rem ;
    color:black ;

  }
  .guanfang dl{
    width:100% ;
    height: 186/@rem;


  }
  .guanfang dl dt{
    float: left;
    margin-right: 15/@rem;
  }
   .guanfang dl img{
    width:184/@rem ;
    height:184/@rem ;

  }
  .guanfang  dl dd{
    float: left;

  }
  .guanfang dl dd ul{
    display: flex; 
    align-content:space-around;
    flex-direction:column;
    width:438/@rem ;
    height:184/@rem ;
  }
   .guanfang dl dd ul li{
    flex-grow: 1;
    font-size: 22/@rem;



  }
  .quanqiu{
    margin-top: 28/@rem
  } 
  .quanqiu ul{
    display: flex;
    width:100% ;
    height: 1500/@rem;
       flex-wrap: wrap;
       justify-content: space-;
  }
  .quanqiu ul li{
    flex-grow:1 ;
 
    
  }
   .quanqiu ul li img{
     width: 200/@rem;
     height:200/@rem ;
     margin: auto;
   }
   .quanqiu ul li h5{
     font-size:18/@rem ;
     text-align: center;
     line-height: 60/@rem;


   }
</style>



