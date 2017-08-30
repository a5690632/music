<template>
  <div id="footer" class="clearfix">
    <dl class="clearfix"  @click="showplay">
        <dt class="songimg"><img :src="data.albumPic" v-show="data.albumPic"></dt>
        <dd class="musicmessage">
          <p class="songname">{{data.name}}</p>
          <p class="musican">{{data.singer}}</p>
       
        </dd>
    </dl>

      <span id="player" @touchstart="tapButton">
      <i class="fa fa-play"></i>

    </span>
    <span id="list" @touchstart="show">

      <i class="fa fa-list" ></i>
    </span>
  </div>

</template>
<script>
 
export default {
  data(){
    return{


    }


  },
  computed:{
      data(){
        return this.$store.state.audio
      },
      play(){

        return this.$store.state.isplay
      },
  


  },
  methods:{
    tapButton(event) {
      
  
          this.$store.commit("play",!this.$store.state.isplay)
          this.$store.commit("dom",)
      },
    showplay(){
     
      this.$store.commit("isShowIndex",false)
    },
    show(){
       this.$store.commit("showlist",true)
    }

  } 

}
</script>
<style lang="less" scoped>
@rem:40rem;
  #footer{
      height: 96/@rem;
      width: 100%;
      background-color: #ffffff;
      position: fixed;
      bottom: 0;
      
  }

  .songimg{
      width:96/@rem ;
      height:100% ;
      float: left;

  }
  .songimg img{
    width:74/@rem ;
    height:74/@rem ;
    margin:10/@rem auto

  }
  .musicmessage{
    margin-left:10/@rem;
    float: left;
    height: 100%;
    width:340/@rem ;
    font-size:20/@rem ;
    overflow: hidden;

  }
  .musicmessage p:nth-child(1){
      color: #3c3c3c;
      margin-top:20/@rem;
      margin-bottom:15/@rem ;
      height: 20/@rem;
      line-height: 20/@rem;



  }
  .musicmessage p:nth-child(2){
      color:#8e8e8e;
      height: 20/@rem;
      line-height: 20/@rem;

  }
  #player{
    position: absolute;
    right:104/@rem;
    top: 22/@rem;
    

  }
  
  #list{
    position: absolute;
    right:23/@rem;
    top: 22/@rem;

  }
  </style>


