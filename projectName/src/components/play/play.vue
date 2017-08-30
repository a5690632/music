<template>
    <div  class="play">
       <div class="touming"    :style="{backgroundImage: 'url(' + data.audio.albumPic+ ')'}">

       </div>
        <div class="content">
            <div class="message">
            <span class="close" @touchstart="close"><i class="fa fa-reply returnimg"></i></span>
            <div class="musicmessage">
                <h3>{{data.audio.name}}</h3>
                <h4>{{data.audio.singer}}</h4>
            </div>
            
        </div>
        <div class="img">
            <img src="../../../static/images/backcd.png" class="back">
            <img :src="data.audio.albumPic" class="albumPic">

        </div>
        <div class="gundongtiao">
            <span>3:00</span>
            <div class="gundong">
                <div class="jindutiao"></div>    


            </div>
            <span>3:00</span>
        </div>
        <div class="menu">
            <div class="loop"><i class="fa fa-random"></i></div>
            <div class="prev" @touchstart="prev(data.index)"><i class="fa fa-step-backward"></i></div>
            <div class="play" @touchstart="tapButton"><i class="fa fa-play" ></i></div>
            <div class="next" @touchstart="next(data.index)"><i class="fa fa-step-forward"></i></div>
            <div class="musiclist" @touchstart="show"><i class="fa fa-list"></i></div>
        </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    computed:{
        data(){
            return this.$store.state
        },
        
    },
    methods:{
        close(){
             this.$store.commit("isShowIndex",true)
        },
        tapButton(event) {
      
  
          this.$store.commit("play",!this.$store.state.isplay)
          this.$store.commit("dom",)
      },
      show(){
       this.$store.commit("showlist",true)
        },
        prev(index){
            
          
            if(index-1<0){
                index=0;
            }else{
               index=index-1;
            }
             this.$store.commit("index",index)
            
              console.log(this.data.playlist.length)
            this.$store.commit("togglemusic",index)
           
        },
         next(index){
            
            if(index+1>this.data.playlist.length){
                index=this.data.playlist.length-1;
            }else{
                 index=index+1;
            }
             this.$store.commit("index",index)
            console.log(this.data.playlist.length)
             this.$store.commit("togglemusic",index)
           
            
        }
         
    },
    mounted(){
      

    }

}



</script>                                  
<style lang="less" scoped>
    @rem:40rem;
    .play{
        position: relative;
    }
    .touming{
        background-size: cover;
        opacity: 0.1;
        height: 1136/@rem;
    }
    .content{
        position: absolute;
        z-index: 4;
        width: 100%;
        height:1136/@rem ;
        top: 0;
        left:0; 
    }
    .message{
        width: 100%;
        height: 120/@rem;
        position: relative;
        border-bottom:1/@rem solid #414343 ;
        

    }
    .close{
        position: absolute;
        top: 30/@rem;
        left: 20/@rem;
    }
    .musicmessage{
       position: absolute;
       top:30/@rem;
       left:100/@rem ;      
    }
    h3{
        font-size:22/@rem ;

        font-weight: bold;

    }
    h4{
        font-size:20/@rem ;
        color:#929798; 
    }
    .img{
        height: 750/@rem;
        position: relative;
        border:1/@rem;  
    }   
    .img img {
        position: absolute;
        margin: auto;
        left:0 ;
        top: 0;
        bottom: 0;
        right:0 ;
    }
    .back{
        width:410/@rem ;
        height:410/@rem ;

    }
    .albumPic{
        width:280/@rem ;
        height:280/@rem ;
        border-radius:140/@rem; 

    }
    .menu {
        display: flex;
        justify-content: space-around;
        text-align:center;
    }
    .menu div{
        flex-grow: 1

    }
    .gundongtiao{
        height: 80/@rem;
        width:600/@rem ;
        position: relative;
        margin: auto;
    }
    .gundong{
        width:490/@rem ;
        height: 4/@rem;
        background-color: #3e3d3d;
        margin-top:40/@rem;
        margin-left:5/@rem ;
        margin-right: 5/@rem;
        position: relative;
        float: left;

    }
    .gundongtiao span{
        width:50/@rem ;
        height:20/@rem ;
        font-size:20/@rem ;
        float: left;
        margin-top:30/@rem; 
    }
    .jindutiao{
        position:absolute;
        height: 4/@rem;
        background-color:red;
        width: 0/@rem;
    }
</style>

