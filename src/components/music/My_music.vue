<template>
<div>
  <!-- 顶部 -->
  <header>
    <span>更多</span>
    <span>我的音乐</span>
   <img src="./icon/find_play.png" alt="" class="head_img">
  </header>
<!-- 内容 -->
   <div>
      <div class="local">
        <img src="./icon/music.png" alt="" >
        <span>本地音乐</span>
    <p>
     121
      <i class="el-icon-arrow-right"></i>
    </p>
      </div>
   </div>
<!-- 最近播放 -->
   <div>
      <div class="local" @click="Lately">
        <img src="./icon/music.png" alt="" >
        <span>最近播放</span>
    <p>
     {{LatelyList}}
      <i class="el-icon-arrow-right"></i>
    </p>
      </div>
   </div>
<!-- 我的电台 -->
   <div>
      <div class="local">
        <img src="./icon/diantaipng.png" alt="" >
        <span>我的电台</span>
    <p>
     1
      <i class="el-icon-arrow-right"></i>
    </p>
      </div>
   </div>
<!-- 我的收藏 -->
   <div>
      <div class="local">
        <img src="./icon/geren.png" alt="" >
        <span>我的收藏</span>
    <p>
    4
      <i class="el-icon-arrow-right"></i>
    </p>
      </div>
   </div>
<!-- 我创建的歌单 -->
  <div class="music_form">
      <p @click="click_found">
        <i class="el-icon-arrow-right" v-if="found_right"></i>
        <i class="el-icon-arrow-down" v-if="found_down"></i>
          我创建的歌单(2)</p>
      <div v-if="found_form" class="found_form">
         <p>1.我们说好了</p>
         <p>2.秋天的稻田</p>
      </div>
  </div>
<!-- 我收藏的歌单 -->
    <div class="music_form">
      <p @click="click_like">
        <i class="el-icon-arrow-right" v-if="like_right"></i>
        <i class="el-icon-arrow-down" v-if="like_down"></i>
        我收藏的歌单</p>
          <div v-if="like_form" class="found_form">
      </div>
  </div>

</div>
</template>

<script>


export default {
  name: "My_music",
  data(){
    return {
      found_form:false,
      like_form:false,
      found_right:true,
      found_down:false,
      like_right:true,
      like_down:false
    }
  },
  methods: {
    click_found(){
      this.found_form=!this.found_form;
      this.icon_right=!this.icon_right;
      this.icon_down=!this.icon_down;
    },
    click_like(){
      this.like_form=!this.like_form;
      this.like_right=!this.like_right;
      this.like_down=!this.like_down;
    },
    Lately(){
      this.$router.push({ path: "/music/latelyList" });
    }
  },
  //初始化
  created(){
    
  },
    //获取状态
  computed:{
      LatelyList() {
      return this.$store.state.music.LatelyList.length;
    }

  },
};
</script>


<style scoped>
*{
  padding:0;
  margin:0;
}
header {
  background: rgb(241, 102, 102);
  color:rgb(241, 240, 240);
  display: flex;
  justify-content: space-around;
  padding:.5rem 0;
}
header>span{
    line-height: 2.6rem;
}
header>img{
    width: 2rem;
    height: 2rem;
}
.local{
display: flex;
justify-content: space-around;
margin:1.5rem .5rem;
}
.local>img{
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
}
.local>span{
  flex-grow: 2;
  text-align: left;
}
p{
  text-align: left;
}
.music_form{
  background:rgb(223, 222, 222);
  padding:.5rem;
  color:rgb(131, 128, 128);
}
.found_form{
  padding-left: .5rem;
}
</style>