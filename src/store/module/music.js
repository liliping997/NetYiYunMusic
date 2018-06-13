import axios from "axios"

const LatelyList = [];

export default {
    state: {
        IP: "http://172.20.10.3:7777",
        //歌单
        music_form: [],
        //歌曲
        music_songs: [],
        //当前选中的歌单
        new_music_form: [],
        //获取轮播图
        banner: [],
        //获取视频
        video: [],
        //当前用户
        phone: '',
        //联想搜索
        sreachSong: [],
        //搜索跳转
        Music_sreachSong: [],
        //最近播放
        LatelyList: [],
        //最近播放的id
        id: '',
    },
    mutations: {
        //歌单
        InitMusic_form(state, obj) {
            state.music_form = obj
        },
        //歌曲
        InitMusic_songs(state, obj) {
            state.music_songs = obj
        },
        //当前选中的歌单 getMuiscList
        getMuiscList(state, obj) {
            for (let item of state.music_form) {
                if (item._id == obj.id) {
                    state.new_music_form = item
                }
            }
        },
        //获取轮播图 
        Music_banner(state, obj) {
            state.banner = obj[0].banner
        },
        //获取视频
        initVideo(state, obj) {
            state.video = obj
        },
        //搜索
        SreachSong(state, obj){

            state.sreachSong = obj
            console.log(state.sreachSong)
        },
        //登录
        login(state, obj) {
            state.phone = obj[0].phone
        },
        // //获取最近播放歌曲
        getLatelyList(state, obj) {
            state.LatelyList = obj
        },
        //搜索后跳转的页面 getMusic_sreach
        Music_sreach(state, obj) {
            state.Music_sreachSong = obj;
        }
    },
    actions: {
        //获取歌单
        InitMusic(context) {
            axios.get(context.state.IP + "/getMusic_form", { params: {} }).then(data => {
                context.commit("InitMusic_form", data.data)
            });
        },
        //获取歌曲
        InitMusic_song(context) {
            axios.get(context.state.IP + "/getMusic_songs", { params: {} }).then(data => {
                context.commit("InitMusic_songs", data.data)
            });
        },
        //获取轮播图 InitMusic_banner
        InitMusic_banner(context) {
            axios.get(context.state.IP + "/getMusic_banner", { params: {} }).then(data => {
                context.commit("Music_banner", data.data)
            });
        },
        //获取视频
        InitVideo(context, obj) {
            axios.get(context.state.IP + "/InitVideo", { params: {} }).then(data => {
                context.commit("initVideo", data.data)
            });
        },
        //获取最近播放
        InitLatelyList(context, obj) {
            axios.post(context.state.IP + "/LatelyList", ).then(data => {
                context.state.id = data.data[0]._id
                context.commit("getLatelyList", data.data[0].list);

            })
        },
        //增加最近播放
        addLatelyList(context, obj) {
            for (let item of context.state.music_songs) {
                if (item._id == obj.id) {
                    delete item._id;
                    item.index = obj.id;
                    context.state.LatelyList.push(item);
                    context.commit("getLatelyList", context.state.LatelyList);
                }
            }
            //将数据去重
            for (let i = 0; i < context.state.LatelyList.length; i++) {
                for (let j = i + 1; j < context.state.LatelyList.length; j++) {
                    if (context.state.LatelyList[i].index == context.state.LatelyList[j].index) {
                        context.state.LatelyList.splice(i, 1);
                        i--;
                    }
                }
            }
            axios.post(context.state.IP + "/addLatelyList", { id: context.state.id, list: context.state.LatelyList }).then(data => {
            })
        },

        //搜索
        sreachSong(context, obj) {
            axios.get(context.state.IP + "/sreachSong", { params: { song_name: obj.value } }).then(data => {
                context.commit("SreachSong", data.data);
            });
        },
        //搜索跳转后获取歌曲 getMusic_sreach
        getMusic_sreach(context, obj) {
            axios.get(context.state.IP + "/getMusic_sreach", { params: { type: obj.music_type, value: obj.value } }).then(data => {
                context.commit("Music_sreach", data.data);

            });
        },
        //注册
        Reg(context, obj) {
            axios.post(context.state.IP + "/reg", obj.data).then(data => {
            });
        },
        //登录 Login
        Login(context, obj) {
            axios.post(context.state.IP + "/login", obj.data).then(data => {
                console.log(data.data.length)
                if (data.data.length > 0) {
                    context.commit("login", data.data);
                }
                else {
                    context.state.phone = "";
                }
            });
        },
    }

}