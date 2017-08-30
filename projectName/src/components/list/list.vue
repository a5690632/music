<template>
  <div id="list">
        <div class="tab">
            <div class="hot" @touchstart="getTopPlaylistResource('hot')">最热</div>
            <div class="new" @touchstart="getTopPlaylistResource('new')">最新</div>
        </div>
        <ul>
            <li v-for="item in list">
                <dl @touchstart="jump(item.id)">
                    <dt><img :src="item.coverImgUrl"></dt>
                    <dd><p>{{item.name}}</p></dd>
                    

                </dl>


            </li>


        </ul>


  </div>
</template>
<script>
import api from "../../api/api"
export default {
    name:"list",

    data(){
        return{
            list:[]

        }

    },
    methods:{
         getTopPlaylistResource(type){
             api.getTopPlaylistResource(type).then(Response=>{
                 this.list=Response.data.playlists


             })


         },
         jump(id){
             this.$router.push({
                  path: '/playLists/'+id,
             })
         }
    },
    mounted(){
        this.getTopPlaylistResource()

    }


}
</script>

 <style lang="less" scoped>

    @rem:40rem;
    
    .tab{
        margin:auto;
        width:210/@rem ;
        height:60/@rem ;
        border:2/@rem solid black;
        border-radius:16/@rem; 
        margin-bottom:40/@rem;  

    }
    .tab div{
        float: left;
        width:100/@rem ;
         height:60/@rem ;
         text-align: center;
         

        
    }
    .new {
         border-left:2/@rem solid black;
    }
    ul{ 
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height:2400/@rem ;
        overflow-y: auto;
     
        
    }
    li{
        flex-grow:1;
        justify-content: space-between; 
        align-content: space-between;
        
    }
   
    img{
        width: 300/@rem;
        height: 300/@rem;

    }
    dd{ 
      
        text-align: center;
       
        height: 90/@rem;
        

    }
    dd p{
        width:300/@rem;
        font-size:26/@rem;
        line-height: 45/@rem;
        height: 90/@rem;

    }
</style>

