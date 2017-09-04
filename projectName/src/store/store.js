import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)



const store = new Vuex.Store({　
    state: {　　
        side: false,
        audio: {
            id: "",
            name: 'asd',
            singer: 'asd',
            albumPic: '',
            url: '',
            album: ''
        },
        lylic: "",
        endtime: "",
        playlist: [],
        isplay: false,
        DOM: [],
        isShowIndex: true,
        showlist: false,
        index:0,

    },

    mutations: {
        side(state, flag) {
            state.side = flag
        },
        playlist(state, flag) {
            state.playlist = flag


        },
        playMusic(state) {
            state.audio.id = state.playlist[state.index].id
            state.audio.name = state.playlist[state.index].name
            state.audio.singer = state.playlist[state.index].singer
            state.audio.url = state.playlist[state.index].url
            state.audio.album = state.playlist[state.index].album
            state.audio.albumPic = state.playlist[state.index].imgurl
        },
        removeall(state){
            state.playlist=[]
            stat.audio={
                id: "",
                name: 'asd',
                singer: 'asd',
                albumPic: '',
                url: '',
                album: ''
    
    
            },
            state.isplay=false;

        },
        remove(state,index){
            state.playlist.splice(index,1)
            state.audio.url = state.playlist[index-1].url
            if(state.playlist.length==0){
                stat.audio={
                    id: "",
                    name: 'asd',
                    singer: 'asd',
                    albumPic: '',
                    url: '',
                    album: ''
        
        
                }
                state.isplay=false;

            }
        },
       
       addmusic(state, payload) {
        if(state.playlist.length==0){
            state.playlist.push(payload);
        }
        let items = Array.prototype.concat.call(payload);
        items.forEach(item => {
            let flag = false;
            state.playlist.forEach(function(element, index) { // 检测歌曲重复
                if (element.id === item.id) {
                    flag = true;

                    
                }
            });
            if (!flag) {
                state.playlist.push(item);
                state.index=state.playlist.length-1;
          
            }
        })
           
            
       
            },
       
        addlylic(state, flag) {
            if (flag) {
                state.lylic = "暂无歌词"

            } else {
                state.lylic = flag

            }



        },
        index(state, flag) {
            state.index = flag
        },
        play(state, flag) {
            state.isplay = flag


        },
        findDOM(state, payload) {
            state.DOM[payload.name] = payload.dom;
        },
        dom(state) {
            if (!state.isplay) {
                state.DOM.audio.pause()

            } else {
                state.DOM.audio.play();

            }



        },
        isShowIndex(state, flag) {
            state.isShowIndex = flag;
        },
        showlist(state, flag) {
            state.showlist = flag

        }



        },
    actions: {


    },


})




export default store