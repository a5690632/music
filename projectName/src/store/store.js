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
        index: 0,

    },

    mutations: {
        side(state, flag) {
            state.side = flag
        },
        playlist(state, flag) {
            state.playlist = flag


        },
        playMusic(state, payload) {
            state.audio.id = payload.id
            state.audio.name = payload.name
            state.audio.singer = payload.singer
            state.audio.url = payload.url
            state.audio.album = payload.album
            state.audio.albumPic = payload.imgurl

        },
        togglemusic(state, index) {
            state.audio.id = state.playlist[index].id
            state.audio.name = state.playlist[index].name
            state.audio.singer = state.playlist[index].singer
            state.audio.url = state.playlist[index].url
            state.audio.album = state.playlist[index].album
            state.audio.albumPic = state.playlist[index].imgurl

        },
        addmusic(state, payload) {
            state.playlist.push(payload)


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