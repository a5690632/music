<template>
  <div id="index">
    <swiper>
    </swiper>
    <div class="day">

    </div>
    <div class="recommend-resource">


    </div>
    <div class="personalized-privatecontent">


    </div>
     <div class="personalized-newsong">


    </div>
    <div class="personalized-mv"></div>
  </div>
</template>
<script>
import swiper from "../common/swiper"

export default {
  name:"index",
  components: {
    swiper,
  },
  data(){
      return{
          

      }


  }
}

</script>
 <style lang="less" scoped>
  @rem:40rem;
  .day{
    width:100%;
    height: 198/@rem;
    border-bottom: 1/@rem solid #dfe0e2; 
    display: flex;
    background-color: red;

  }
  .recommend-resource{
      width: 100%;
      height: 870/@rem;
      display: flex;
     background-color: green;

  }
  .personalized-newsong{
      width: 100%;
      height: 840/@rem;
      display: flex;
     background-color: blue;


  }
</style>




