<template>
<div class="">
<!-- 导航 -->
<header>
  <el-row :gutter="10">
  <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple ">
        <i class="el-icon-arrow-left back" @click="back" style="font-size: 1.5rem;padding-top: .5rem"></i>
      </div></el-col>
  <el-col :xs="16" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple-light">
       <span class="title">歌单</span>
      </div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple header_right">
          <i class="el-icon-more" style="font-size: 1.5rem"></i>
          <i class="el-icon-share" style="font-size: 1.5rem"></i>
        </div>
        </el-col>
</el-row>
</header>
     
<div class="nav">
<img :src="IP+Music_list.form_img" alt="" class="nav_img">
<span>{{ Music_list.form_name}}</span>
</div>
<!-- 选项 -->
<div class="option">
    <!-- 收藏 -->
    <div>
      <img src="./icon/mony.png" alt="" class="option_img">
     <!-- <i class="el-icon-circle-plus-outline"></i> -->
        <p>{{ Music_list.like}}</p>
    </div>
    <!-- 评论 -->
     <div>
    <img src="./icon/pinlun.png" alt="" class="option_img">
        <p>{{length}}</p>
    </div>
    <!-- 转发 -->
     <div>
       <i class="el-icon-share" style="font-size: 1.5rem"></i>
      <!-- <img src="./icon/fenxiang.png" alt="" class="option_img"> -->
        <p>{{ Music_list.share}}</p>
    </div>
    <!-- 下载 -->
     <div>
      <img src="./icon/download.png" alt="" class="option_img">
       <p class="font_size">下载</p>
    </div>
</div>
<!-- 播放列表 -->
<div class="select">
    <!-- <i class="song_number">(共{{length }}首)</i> -->
    <span>播放全部(共{{Music_list.song_list.length }}首)</span>
    <span>多选</span>
</div>
<div class="song_list">
    <div v-for="(item,index) in Music_list.song_list" :key="item._id" class="center" @click="click_song(item._id)">
        <span class="order_number">{{ Number(index)+1}}</span>    
        <div>
            <p class="song_name">{{item.song_name}}</p>
            <span class="singer">{{item.singer}}</span>
        </div>
       <i class="el-icon-caret-right"></i>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "Music_list",
  data() {
    return {
      length: 0
    };
  },
  methods: {
    //点击跳转相应的页面
    click_song(id) {
      this.$router.push({ path: "/current_song", query: { id: id } });
    },
    //返回上一页
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    //IP
    IP() {
      return this.$store.state.music.IP;
    },
    //当前选中歌单
    Music_list() {
      return this.$store.state.music.new_music_form;
    }
  },
  //初始化获取所有歌曲
  created(){
      this.$store.commit({ 
            type: "getMuiscList",
            id:this.$route.query.id
          });
  }
};
</script>


<style scoped>
header {
  margin: 0.8rem 0;
  /* background: black; */
  /* opacity: .8; */
}
.header_right>i{
  display:inline-block;

}
.order_number {
  color: gray;
}
.title {
  flex-grow: 2;
  display: inline-block;
  padding-top:.5rem;
}
.option {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  background: rgb(37, 35, 35);
  color: rgb(189, 186, 186);
}
.option > div > p {
  margin: 0.5rem;
}
.el-icon-share{
      display: inline-block;
    height: 1.2rem;
      margin: .4rem 0;
}
.nav {
  padding: 0.5rem;
  background: rgb(37, 35, 35);
  display: flex;
  justify-content: space-around;
}
.nav_img {
  width: 40%;
  height: 9rem;
  border: 0.2rem solid white;
}
.nav > span {
  display: inline-block;
  width: 58%;
  margin-left: 0.2rem;
  font-size: 1rem;
  padding-top: 3rem;
  color: rgb(192, 185, 185);
  font-weight: bolder;
}
.song_number {
}
.select {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
}
.center {
  display: flex;
  margin: 0.5rem;
  border-bottom: 0.01rem solid rgb(206, 200, 200);
  padding: 0.6rem 0;
}
.center > span {
  padding-top: 0.5rem;
}
.center > div {
  margin-left: 1rem;
  flex-grow: 2;
  text-align: left;
}
.option_img {
  width: 1.5rem;
}
.song_name {
  font-weight: bold;
  margin: 0.05rem 0 0;
}
.singer {
  font-size: 0.8rem;
  color: gray;
}
.song_list {
  margin-bottom: 5rem;
}
</style>