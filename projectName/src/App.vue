<template>
  <div id="app">
     <div v-show="isShowIndex" class="index clearfix">
        <side v-show="side"></side>
        <vhead></vhead>
        <router-view></router-view>
        <vfooter></vfooter>
      </div>

      
      <play v-show="!isShowIndex"></play>
  
  
  
  
  
  
  
  
  
  
  
  </div>
</template>

<script>

var pixelRatio = 1 / window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + ',user-scalable=no" />')
var html = document.getElementsByTagName("html")[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 16 + "px";

import vhead from './components/head/head';
import vfooter from "./components/foot/footer"
import side from "./components/side/side"
import play from "./components/play/play"
export default {
  name: 'app',
  components: {
    vhead,
    play,
    side,
    vfooter,
  },
  data() {
    return {
   
      isShowIndex:true,
   
    }
    

  },
  computed:{
    side(){
      
      return this.$store.state.side

    }

  }
}
</script>

<style lang="less" >
@import '/static/font-awesome/css/font-awesome.min.css';
@import '/static/base.css';
@rem: 40rem;
#app{
  

}
</style>








