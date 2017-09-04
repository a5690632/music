<template>
<div class="showlist">
    <div class="message"> <span class="fanhui" @touchstart="show"> <i class="fa fa-reply returnimg"></i></span>    <span class="clear" @touchstart="removeall">清空</span> </div>
    <ul>
        <li v-for="(item,index) in deta" @touchstart="play()">
           <h3 class="fl"> <span class="name">{{item.name}}</span> <span class="singer">{{item.singer}}</span></h3> <span class="fl close" @touchstart="remove(index)"><i class="fa fa-close"></i></span>


        </li>
    </ul>

</div>



</template>
<script>
export default {
    data(){
        return{
            deta:this.$store.state.playlist
        }
    },
    computed:{
        

    },
    methods:{

      show(){
        
          this.$store.commit("showlist",false)
      },
      play(){
          this.$store.commit("playMusic")
      },
      remove(){
          this.$store.commit("remove",index)
      },
      removeall(){
           this.$store.commit("removeall")
      }

    },
    mounted(){
       
    }
}
</script>

<style lang="less" scoped>
    @rem:40rem;
    .showlist{
        height: 672/@rem;
        background-color: #f3f3f3;
        position: fixed;
        bottom: 0;
        width:100% ;
        


    }
    li {
       height:70/@rem ;
       border-bottom:1/@rem  solid #eeeeee;
       position: relative;

    }
    .name{
        font-size:20/@rem ;
        color:#343434 ;
        margin-left: 15/@rem;
        font-weight: bold;

    }
    .singer{
        font-size:15/@rem;
        color: #666666;

    }
    .close{
        position: absolute;
        right: 20/@rem;
        top: 20/@rem;
        width:20/@rem ;
        height:20/@rem ;
        color: #909090;
    }
    .message{
        position: relative;
        height: 70/@rem;
    }
    .clear{
        position: absolute;
        right:20/@rem ;
        height: 70/@rem;
        line-height:70/@rem ;
        font-size:20/@rem ;
        
     
    }
    .fanhui{
        width:20/@rem ;
        height:20/@rem ;
        top:20%;
        left:20/@rem ;
        position: absolute;
        

    }
</style>
