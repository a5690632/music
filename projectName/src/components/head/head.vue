<template>
<div class="header">
  <span class="side"  @click="side">
    <i class="fa fa-align-justify"></i>
  </span>

  <span class="music" @click="music">
    <icon name="music" scale="3"  ></icon>
  </span>

<span class="search" @click="search">
  <i class="fa fa-search">
  </i>

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
    side(){
       

    },
    music(){


    },
    search(){


    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .header{
      width:100% ;
      height:50px ;
      background-color:#d33a32 ;
      position: relative;

    }
    .side{
        position: absolute;
        width:28px; ;
        height:18px ;
        left: 15px;
        top:17px ;


    }
    .side i{
      width:24px ;
      height:15px ;
      color:white ;

    }
    .music{
        width:28px ;
        position: absolute;
        height:18px ;
        left:50% ;
        top:50% ;
        margin-left:-14px ;
        margin-top: -9px;
        color:white ;
    }
    
    .search{
        width:28px; ;
        height:18px ;
        position: absolute;
       right: 14px;
        top: 17px;


    }
    .search i{
      width:24px ;
      height:15px ;
      color:white ;

    }
</style>
