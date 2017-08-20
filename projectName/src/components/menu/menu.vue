<template>
  <ul class="menu">
        <li class="index" >
            <router-link to="/content/index" class="tab">首页 </router-link>

        </li>
        <li class="song-list" >
          <router-link to="/content/list"  class="tab">歌单 </router-link>
        </li>
        <li class="ranking-list" >
           <router-link to="/content/rank"  class="tab">排行榜 </router-link>

        </li>


  </ul>
</template>
<script>
export default {
name: 'menu',
  data(){
    return{


    }

  }


}
</script>

<style lang="less" scoped>



    @rem:40rem;
    .menu{
          width:100% ;
          height:60/@rem ;
          display: flex;
          background: white;
    }
    .menu li{
        height:60/@rem;
        flex: 1;
        text-align: center;
        line-height:60/@rem;
        font-size: 22/@rem;
  

    }
     .menu li a{
        color:#656565 ;

     }
     .menu li .active{
        color:red;


     }
</style>
