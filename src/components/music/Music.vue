<template>
<div>
     <router-view></router-view>
     <div class="footer">
         <div>
         <router-link to="/music" >
             <img src="./icon/fin_icon.png" alt="" class="footer_img">
              <p>发现音乐</p>
         </router-link>
         <router-link to="/music/my_music">
             <img src="./icon/find_listen.png" alt="" class="footer_img">
              <p>我的音乐</p>
         </router-link>
         <router-link to="/music/friend">
             <img src="./icon/friend_icon.png" alt="" class="footer_img">
              <p>朋友</p>
         </router-link>
       <router-link to="/music/account_number">
             <img src="./icon/acc_icon.png" alt="" class="footer_img">
              <p>账号</p>
         </router-link>
         </div>
     </div>
</div>
</template>
<script>
export default {
  name: "Music",
  created(){
       //初始化获取歌单数据
    this.$store.dispatch({type:"InitMusic"});
     //初始化获取歌曲
    this.$store.dispatch({type:"InitMusic_song"});
    //初始化获取轮播图
    this.$store.dispatch({type:"InitMusic_banner"});
    //初始化获取最近播放
    this.$store.dispatch({ type: "InitLatelyList" });
    //初始化获取视频
    this.$store.dispatch({ type: "InitVideo" });
    
  },
  computed: {
         //IP
    IP(){
      return this.$store.state.music.IP;
    }, 
  }
};
</script>

<style scoped>
a{
    text-decoration: none;
}
.footer{
    background: rgb(83, 74, 74);
    margin-top:auto;
    position: fixed;
    bottom:0;
     left:0; 
    right:0;  
}
.footer>div{
    display: flex;
    justify-content: space-around;
}
.footer_img{
    width: 1.5rem;
    margin-top: .5rem
}
router-link{
    text-decoration: none;
}
p{
    color:white;
    margin:.2rem 0;
}
</style>