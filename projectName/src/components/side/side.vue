<template>
    <div id="side">
        <div class="return"><i class="fa fa-reply returnimg"></i></div>

        <dl>
            <dt>
                <img src="./user.png" class="musicimg">
                
              
            </dt>
            <dd>
                <span class="name"> {{user}}</span>
                <span class="lv">{{lv}}</span>


            </dd>
            
        </dl>
        <ul class="mine" >
            <li v-for="item in mine">
                <i :class="item.class"></i>
                <span>{{item.message}}</span>
                
                
                </li>



        </ul>
        <ul class="firends" >
            <li v-for="item2 in firends">
                
               <i :class="item2.class"></i>
                <span>{{item2.message}}</span>
                
                
                
                </li>


        </ul>
        <ul class="gongneng">
            <li  v-for="item3 in gongneng">
                
                
                <i :class="item3.class"></i>
                <span>{{item3.message}}</span>
                
                
                
                </li>


        </ul>

        <div class="settimg">
            
            
            <span class="moon">
                
                <i class="fa fa-moon-o"></i>
                <b>夜间模式</b>   
                
            </span>    
            <span >
                
                <i class="fa fa-cog"></i>
                <b>设置</b>   
                
            </span>    
            <span class="out">
                
                <i></i>
                <b>退出</b>   
                
            </span>    
            
            </div>

    </div>
</template>
<script>
   

    export default {
         name:'side',
         
        data(){
            return{
                user:"我不愿一个人",
                lv:"Lv.8",
                mine:[
                  
                    {message:"我的消息",class:"fa fa-envelope-o"},
                    {message:"会员中心", class:"fa fa-heart"},
                    {message:"商城",class:"fa fa-shopping-cart"},
                    {message:"在线免流量",class:"fa fa-folder"},
                ],
                firends:[
                     {message:"我的好友" ,class:"fa fa-user-o"},
                    {message:"附近的人",class:"fa fa-map-marker"},
                   
                ],
                gongneng:[

                    {message:"扫一扫" ,class:"fa fa-barcode"},
                    {message:"听歌识曲",class:"fa fa-microphone"},
                    {message:"定时播放",class:"fa fa-hourglass-o"},
                    {message:"音乐闹钟",class:"fa fa-bell"},
                    {message:"驾驶模式",class:"fa fa-car"},
                    {message:"音乐云盘",class:"fa fa-cloud"}, 
                  

                ],
            }

        }
    }
</script>
<style lang="less">
        @rem:40rem;
        #side{
                overflow:hidden;
                position: absolute;
                width:540/@rem ;
                height:100% ;
                z-index:99;
                font-size: 22/@rem;
                background:#f2f4f5;

        }
        .return{
            position: absolute;
            right:50/@rem;
            top: 120/@rem;
            
        }
        .returnimg{
            width:100/@rem;
            height:60/@rem; 

           
        }
         dl{
                    height:266/@rem ;
                    width:100% ;
                    position:relative;
                    overflow: hidden;
                    background:"http://p1.music.126.net/VTW4vsN08vwL3uSQqPyHqg==/2002210674180199.jpg" ;
                    dt{
                        width:105/@rem;
                        height:105/@rem;
                        overflow: hidden;
                        border-radius:53/@rem; 
                       margin-left:15/@rem ;
                        margin-top: 94/@rem;
                        img{
                        width:105/@rem;
                        height:105/@rem;


                        }
                    }
                    dd{
                        width:100% ;
                        height:70/@rem ;
                        line-height:70/@rem;
                        



                    }
                    
           
            }  

         .name{
                margin-left:15/@rem;
                color: #9aa5a9;
            }
        .lv{    
                padding-left:6/@rem; 
                padding-right:6/@rem; 
                color: #9aa5a9;
                border: 1/@rem solid #9aa5a9;
                border-radius:12/@rem;


        } 

        ul{
            background:white ;

        }
        .mine{
            height: 260/@rem;
            width: 100%;
            display: flex;
            flex-direction:column ; 
           justify-content:space-between;
           margin-bottom: 10/@rem;

        }
         li{
           line-height:65/@rem ;
           flex: 1;
           padding-left:18/@rem; 


        }
        .firends{
            height: 130/@rem;
            width: 100%;
            display: flex;
            flex-direction:column ; 
           justify-content:space-between;
           margin-bottom: 10/@rem;

        }
        .gongneng{
             height: 390/@rem;
            width: 100%;
            display: flex;
            flex-direction:column ; 
           justify-content:space-between;


        }
        .settimg{
            height: 70/@rem;
            line-height:70/@rem;
            padding-left:18/@rem ;
        }
        b{
            font-weight:normal;

        }
        .moon{
            margin-right:105/@rem ;


        }
        .out{

            margin-left: 70/@rem
        }
</style>

