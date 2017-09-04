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
            <img  v-if="data.audio.albumPic" :src="data.audio.albumPic" class="albumPic">

        </div>
        <div class="gundongtiao">
            <span>{{starttime}}</span>
            <div class="gundong"  @touchstart="end"  @touchmove="move($event)" ref="progressBar" >
                <div class="jindutiao"   :style="{width:kuan+'%'}"></div>    


            </div>
            <span >{{endtime}}</span>
        </div>
        <div class="menu">
            <div class="loop"><i class="fa fa-random"></i></div>
            <div class="prev" @touchstart="prev(data.index)"><i class="fa fa-step-backward"></i></div>
            <div class="play" @touchstart="tapButton" ><i class="fa fa-play" :class="[!isplay? 'fa fa-play':'fa fa-pause' ]"></i></div>
            <div class="next" @touchstart="next(data.index)"><i class="fa fa-step-forward"></i></div>
            <div class="musiclist" @touchstart="show"><i class="fa fa-list"></i></div>
        </div>
        <showlist v-if="showlist"></showlist>
        </div>
    </div>
    
</template>
<script>
import showlist from "../showlist/showlist"
export default {
    data(){
        return{
            starttime:"0:00",
            endtime:"0:00",
            kuan:"0",
            
           
        }
    },
    computed:{
        data(){
            return this.$store.state
        },
        dom(){
            return this.$store.state.DOM
        },
        showlist(){
            return this.$store.state.showlist
        },
        isplay(){
            return this.$store.state.isplay
        },
       
        
    },
    components:{
        showlist,
    },
    methods:{
        end($event){
            let progressBar = this.$refs.progressBar;
            let coordStart = progressBar.getBoundingClientRect().left;
           
            let move=($event.touches[0].clientX-coordStart)/490
            if(move>=1){
                move=1;
            }
            this.dom.audio.currentTime=this.dom.audio.duration*move
            this.kuan=move*100
           
        },

        time(seconds){
            let f,m;
            f=Math.floor(seconds/60) 
            m=Math.floor(seconds-f*60)
            if(m.toString().length==1){
                m="0"+m
            }
           return f + ':' + m;

        },
        close(){
             this.$store.commit("isShowIndex",true)
        },
        tapButton(event) {
            
            console.log(this.isplay)
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
           
              this.$store.commit("playMusic")
           
        },
         next(index){
            
            if(index+1>this.data.playlist.length){
                index=this.data.playlist.length-1;
            }else{
                 index=index+1;
            }
             this.$store.commit("index",index)
            console.log(index)
              this.$store.commit("playMusic")
           
            
        },
       
        move(e){
            let progressBar = this.$refs.progressBar;
            let coordStart = progressBar.getBoundingClientRect().left;
           
            let move=(e.touches[0].clientX-coordStart)/490
            if(move>=1){
                move=1;
            }
            this.dom.audio.currentTime=this.dom.audio.duration*move
            this.kuan=move*100
           
        }
         
    },
    mounted(){
        setInterval(()=>{
            this.kuan=this.dom.audio.currentTime/this.dom.audio.duration*100
            this.starttime=this.time(this.dom.audio.currentTime)
            if(this.dom.audio.duration){
                this.endtime=this.time(this.dom.audio.duration)
            }
            
           
        },500)
        
            
             

        
       
    

    },
    
   
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
        width:460/@rem ;
        height: 10/@rem;
        background-color: #3e3d3d;
        margin-top:40/@rem;
        margin-left:10/@rem ;
        margin-right: 20/@rem;
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
        height: 10/@rem;
        background-color:red;
        width: 0/@rem;
       
        
    }
    .jindutiao::after{
        content:"";
        position:absolute;
        top: 50%;
        right: -20/@rem;
        -webkit-transform:translate(-50%,-50%);
        transform:translate(-50%,-50%);
        width:20/@rem;
        height:20/@rem;
        border-radius:50%;
        background-color:#c52f30;
    }
</style>

