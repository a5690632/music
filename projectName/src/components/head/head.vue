<template>
<div class="header">
  <span class="side" @click="side" >
    <i class="fa fa-align-justify"></i>
  </span>

  <span class="music" @click="music" >
    <router-link to="/content"><img src="./music.png"></router-link></router-link>
   
  </span>

<span class="search" @click="search" >
  <router-link to="/search"><i class="fa fa-search">  </i></router-link>


</span>

</div>

</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      
    }
  },
  methods:{
    music(){


    },
    search(){


    },
    side(){
      this.$store.commit("side",true)

    }


  },
  computed:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  secoped>
     @rem:40rem;
    .header{
      width:100% ;
      height:120/@rem;
      background-color:#d33a32 ;
      position: fixed;
      top: 0;
      z-index: 2;

    }
    .side{
        position: absolute;
        width:32/@rem; ;
        height:32/@rem ;
        left: 22/@rem;
        top:60/@rem ;


    }
    .side i{
      width:32/@rem ;
      height:32/@rem ;
      color:white ;

    }
    .music{
      
        position: absolute;
      
        left:50% ;

        margin-left:-30/@rem ;
        margin-top: 60/@rem;
      
    }
    img{
       width: 60/@rem;
       height: 60/@rem;
        
    }
    .search{
        width:32/@rem; 
        height:32/@rem ;
        position: absolute;
        right: 22/@rem;
        top: 60/@rem;


    }
    .search i{
      width:32/@rem ;
      height:32/@rem ;
      color:white ;

    }
</style>
