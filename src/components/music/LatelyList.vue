<template>
<div class="BigBox">
 <!-- 顶部 -->
  <header>
    <!-- <span>返回</span> -->
     <i class="el-icon-arrow-left " @click="back"></i>
    <span>最近播放的歌曲</span>
   <img src="./icon/find_play.png" alt="" class="head_img">
  </header>
<!-- 选择 -->
  <div class="select">
    <p>播放全部（共{{LatelyList.length}}首）</p>
    <img src="./icon/mony.png" alt="" class="option_img">
  </div>
 <!-- 内容 -->
     <div v-for="(item,index) in LatelyList" :key="item._id" class="center" @click="click_song(item.index)">
        <span class="order_number">{{ Number(index)+1}}</span>    
        <div>
            <p class="song_name">{{item.song_name}}</p>
            <span class="singer">{{item.singer}}</span>
        </div>
       <i class="el-icon-caret-right"></i>
    </div>

  <ul>
      <li v-for="item in LatelyList" :key="item._id">
         
      </li>
  </ul>
</div>

</template>

<script>
export default {
  name: "Friend",
  methods: {
    click_song(id){
      this.$router.push({ path: "/current_song", query: { id: id } });
    },
     back(){
        this.$router.go(-1);
     }
  },

  //获取状态
  computed: {
    LatelyList() {
      return this.$store.state.music.LatelyList.reverse();
    }
  }
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
  padding:.2rem .5rem;
}
header>span{
    line-height: 2.6rem;
    flex-grow: 2;
}
header>img{
    width: 2rem;
    height: 2rem;
}
ul{
  list-style-type: none;
}
.select{
  display: flex;
  padding:.5rem;
}
.select>p{
  flex-grow: 2;
  text-align: left;
  margin-top: .2rem
}
.option_img{
  width: 1.5rem;
  height: 1.5rem;
}
.el-icon-arrow-left:before {
    margin-top: .6rem;
    display: inline-block;
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
.BigBox{
  margin-bottom: 5rem;
}

</style>