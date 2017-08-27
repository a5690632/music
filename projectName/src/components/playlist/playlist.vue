<template>
  <div class="playlist">
      <div class="message">
        <div class="title">
            <span class="close"><i class=""></i></span>
            <h2>歌单</h2>


        </div>
        <dl>
            <dt><img ></dt>
            <dd>
                <p></p>
                <p></p>
            </dd>
        </dl>
        <ul>
            <li>
                <p><i></i></p>
                <p> </p>
            </li>

        </ul>
      </div>
        <ul class="list">
            <li>
                <div></div>
                <div>
                    <p></p>
                    <p></p>	
                </div>

            </li>

        </ul>

  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="less" scoped>
    @rem:40rem;
    .message{
        width:100% ;
        height:426/@rem ;
        padding-left: 34/@rem;

    }
    .title{
        height: 100/@rem;
        position:relative;
    }
    .title span{
        position: absolute;
        top:60/@rem ;
        left:28/@rem ;

    }
    .title h2{
        font-size: 24/@rem;
        position: absolute;
        top: 66/@rem;
        left:88/@rem ;


    }
</style>

