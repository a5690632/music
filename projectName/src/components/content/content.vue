<template>
    <div id="content" class="clearfix">
  
        <vmenu class="menu"></vmenu>
        <router-view class="content"></router-view>
    </div>
</template>
<script>
import vmenu from '../menu/menu';

export default {

  name:"content",
  components:{
    vmenu,

  },
  data(){
    return{



    }

  }

}
</script>
<style lang="less" scoped>
    @rem:40rem;
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
</style>


