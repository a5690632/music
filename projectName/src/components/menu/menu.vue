<template>
  <ul class="menu">
        <li class="index" >
            <span>首页</span>

        </li>
        <li class="song-list" >
            <span>歌单</span>
        </li>
        <li class="ranking-list" >
            <span>排行榜</span>

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

<style>
    .menu{
          width:100% ;
          height:38px ;
          display: flex;
            

    }
    .menu li{
        height:38px;
        flex: 1;
        text-align: center;
        line-height:38px ;
        color:#656565 ;
        font-size:14px ;

    }

</style>
