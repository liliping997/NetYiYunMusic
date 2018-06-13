import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(Router)
Vue.use(ElementUI);


//------------------------------------------一级路由
//网易云歌单
import Music from "@/components/music/Music"

//网易云音乐-歌单列表 Music_list 
import Music_list from "@/components/music/Music_list"
// 网易云音乐-当前歌曲 Current_song
import Current_song from "@/components/music/Current_song"
// 网易云音乐-注册 Current_song
import Music_reg from "@/components/music/Reg"
// 网易云音乐-注册 Current_song
import Music_login from "@/components/music/Login"
//Music_sreach
import Music_sreach from "@/components/music/Music_sreach"
// 网易云音乐-注册 Music_sreach Music_list
import LatelyList from "@/components/music/LatelyList"



//-----------------------------------------二级路由

//网易云音乐-发现音乐 Music_list 
import Music_collection from "@/components/music/Music_collection"
//网易云音乐-我的音乐 My_music
import My_music from "@/components/music/My_music"
//网易云音乐-朋友  
import Friend from "@/components/music/Friend"
//网易云音乐-朋友  Account_number
import Account_number from "@/components/music/Account_number"




//-----------------------------------------三级路由
//网易云音乐-我的音乐-音乐
import Music_form from "@/components/music/Music_collection/Music_form"
//网易云音乐-我的音乐-电台
import Music_transceiver from "@/components/music/Music_collection/Transceiver"
//网易云音乐-我的音乐-视频
import Music_video from "@/components/music/Music_collection/Music_video"



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //音乐
    {
      path: '/music',
      name: 'music',
      component: Music,
      children: [
        //发现音乐
        {
          path: '/',
          component: Music_collection,
          children:[
            //发现音乐之音乐
            {
            path: '/',
            component: Music_form,
          },
           //发现音乐之视频
          {
            path: 'music_video',
            component: Music_video,
          },
           //发现音乐之电台
          {
            path: 'transceiver',
            component: Music_transceiver,
          },
        ]
        },
        //我的音乐
        {
          path: 'my_music',
          component: My_music,
        },
        //朋友 Friend
        {
          path: 'friend',
          component: Friend
        },
        {
          path: 'latelyList',
          component: LatelyList
        },
        //账号
        {
          path: 'account_number',
          component: Account_number
        },
        //视频
        {
          path: 'music_video',
          component: Music_video
        },
        //电台
        {
          path: 'music_transceiver',
          component: Music_transceiver
        },
       //搜索页面
               {
                path: 'music_sreach',
                component: Music_sreach
              },
        //歌单歌曲列表
        {
          path: '/music_list',
          name: 'music_list',
          component: Music_list
        },
      ]
    },
    //当前播放歌曲  Current_song
    {
      path: '/current_song',
      name: 'Current_song',
      component: Current_song
    },
    //注册 Music_reg
    {
      path: '/music_reg',
      name: 'Music_reg',
      component: Music_reg
    },
    //登录
    {
      path: '/music_login',
      name: 'Music_login',
      component: Music_login
    },
  ]
})
