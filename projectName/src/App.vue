<template>
  <div id="app">
     <div v-show="isShowIndex" class="index clearfix" >
        <side v-show="side" ></side>
      
        
          <router-view></router-view>
    
        
        <vfooter v-if="data.audio.id"></vfooter>
      </div>

      
      <play v-show="!isShowIndex"></play>
      <showlist v-show="showlist"></showlist>
  
  
      
      <audio :src="src" autoplay  ref="audio"></audio>

  
  
  
  
  
  
  
  
  </div>
</template>

<script>

var pixelRatio = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + ',user-scalable=no" />')
var html = document.getElementsByTagName("html")[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 16 + "px";
import showlist from "./components/showlist/showlist"

import vfooter from "./components/foot/footer"
import side from "./components/side/side"
import play from "./components/play/play"
export default {
  name: 'app',
  components: {
    showlist,
    play,
    side,
    vfooter,
    showlist,
  },
  data() {
    return {
      data:this.$store.state
      
   
    }
    

  },
  mounted(){
  this.$store.commit('findDOM', {name: 'audio', dom: this.$refs.audio});

  },
  methods:{
     
   },
  computed:{
    side(){
      
      return this.$store.state.side

    },
    isShowIndex(){
      return this.$store.state.isShowIndex
    },
    showlist(){
      return this.$store.state.showlist

    },
    src(){
       return  this.$store.state.audio.url
     },
  }
}
</script>

<style lang="less" >
@import '/static/font-awesome/css/font-awesome.min.css';
@import '/static/base.css';
@rem: 40rem;

</style>








