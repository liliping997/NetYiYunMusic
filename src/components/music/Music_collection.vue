
<template>
<div class="center">
        <header>
      <!-- 导航 -->
       <img src="./icon/find_listen.png" alt="" class="head_img">
       <form action="" onsubmit="return false">
         <input type="search" @input="click_sreach" autocomplete="off" @change="change_sreach" placeholder="输入您想查询的关键词" v-model="value" id="myInput" class="header_input"/>
       </form>
     <img src="./icon/find_play.png" alt="" class="head_img">
    </header>
       <ul v-if="sreach">
             <!-- <li v-if="show">抱歉，暂无搜索内容</li>  -->
            <li v-for="item in sreachSong" :key="item._id" @click="sreach_song(item._id)" >
            {{item.song_name}}
              </li>
            
       </ul>

    <!-- 分栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">音乐</el-menu-item>
    <el-menu-item index="2">视频</el-menu-item>
  <el-menu-item index="3" >电台</el-menu-item>
</el-menu>

        <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Music_collection",
  data() {
    return {
      sreach: false,
      show: false,
      value: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    //搜索
    click_sreach(e) {
      this.$store.dispatch({
        type: "sreachSong",
        value: e.target.value
      });
      // this.sreachSong.length == 0 ? (this.show = true) : (this.show = false);
      this.value == "" ? (this.sreach = false) : (this.sreach = true);
    },
    //点击回车键跳转
    change_sreach() {
      this.$router.push({ path: "/music/music_sreach", query: { value: this.value }  });
    },
    //点击搜索出来的歌跳转唱歌页面
    sreach_song(id) {
      this.$router.push({ path: "/music/music_sreach", query: { value: this.value }  });
    },
    handleSelect(key, keyPath) {
      if (key == 1) {
        this.$router.push({ path: "/music" });
      }
      if (key == 2) {
        this.$router.push({ path: "/music/music_video" });
      }
      if (key == 3) {
        this.$router.push({ path: "/music/transceiver" });
      }
    },
  },
  computed: {
    //
    sreachSong() {
      return this.$store.state.music.sreachSong;
    }
  }
};
</script>


<style scoped>
body {
  margin: 0;
}
.center {
  position: relative;
}
.header_input {
  display: inline-block;
  border-style: none;
  outline: none;
  padding: 0.7rem;
  border-radius: 2rem;
  width: 90%;
}
header {
  background: rgb(241, 102, 102);
  padding: 1rem 0.5rem;
  display: flex;
}

header > img {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
}
form {
  flex-grow: 2;
}

ul {
  position: absolute;
  list-style: none;
  background: rgb(255, 255, 255);
  width: 89%;
  top: 3rem;
  text-align: left;
  z-index: 3;
}
li {
  padding: 0.5rem;
  border-bottom: 0.01rem solid rgb(219, 216, 216);
  z-index: 2;
}
.header > span {
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  background: rgb(245, 241, 241);
  border-bottom: 0.01rem solid rgb(211, 207, 207);
}
.header_select {
  color: black;
}

.input-with-select {
  width: 65%;
  margin: 0 0.5rem;
}
.isSelect {
  color: red;
}
.el-menu-demo {
  position: static;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #ff406b;
}
.el-menu--horizontal>.el-menu-item{
    height: 3rem;
    line-height: 2.2rem;
}
li{
  padding:0.5rem 0;
}
</style>