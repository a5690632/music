import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)



const store = new Vuex.Store({　
    state: {　　
        side: false,
        audio: {
            id: "",
            name: '',
            singer: '',
            albumPic: '',
            url: '',
            album: ''


        },
        lylic: "",
        endtime: "",
        playlist: [],
        isplay: false,
        DOM: [],

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



        }



    },
    actions: {


    },


})




export default store