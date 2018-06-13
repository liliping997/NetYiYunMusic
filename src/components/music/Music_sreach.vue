<template>
<div class="center">
              <header>
      <!-- 导航 -->
       <form action="" onsubmit="return false">
         <input type="search" @input="input_sreach" autocomplete="off" @change="change_sreach" placeholder="输入您想查询的关键词" v-model="value" id="myInput" class="header_input"/>
       </form>
     <span>{{operation}}</span>
    </header>
           <ul v-if="sreach">
             <!-- <li v-if="show">抱歉，暂无搜索内容</li>  -->
            <li v-for="item in Sreach_music" :key="item._id" @click="sreach_song(item.song_name)" >
            {{item.song_name}}
              </li>
       </ul>
    <!-- 分栏 -->

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">单曲</el-menu-item>
    <el-menu-item index="2">歌手</el-menu-item>
    <el-menu-item index="3" >专辑</el-menu-item>
    <el-menu-item index="4">歌单</el-menu-item>
    <el-menu-item index="5">视频</el-menu-item>
</el-menu>

<!-- 内容 -->
<div>
 <div class="song_list">
    <div  v-for="(item,index) in Sreach_music" :key="item._id" class="song_list_center" @click="click_song(item._id)">
        <span class="order_number">{{ Number(index)+1}}</span>    
        <div>
            <p class="song_name">{{item.song_name}}</p>
            <span class="singer">{{item.singer}}</span>
        </div>
       <i class="el-icon-caret-right"></i>
    </div>
</div>
</div>


</div>
</template>

<script>
export default {
  data() {
    return {
      sreach: false,
      show: false,
      operation: "搜索",
      value: "",
      activeIndex: "1",
      activeIndex2: "1"
      // Sreach_music:[]
    };
  },

  methods: {
    input_sreach() {
      // if (this.value) {
      //   this.sreach = true;
      //   this.$store.dispatch({
      //     type: "getMusic_sreach",
      //     music_type: "song_name",
      //     value: this.value
      //   });
      // }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击歌曲跳转到播歌页面
    click_song(id) {
      this.$router.push({ path: "/current_song", query: { id: id } });
    },
    change_sreach() {
      this.$store.dispatch({
        type: "getMusic_sreach",
        music_type: "song_name",
        value: this.value
      });
    },
    sreach_song(song_name) {
      this.value = song_name;
      this.sreach = false;
    }
  },
  computed: {
    //IP
    IP() {
      return this.$store.state.music.IP;
    },
    //  //获取歌曲
    Sreach_music() {
      // this.Sreach_music=this.$store.state.music.Music_sreachSong;
      return this.$store.state.music.Music_sreachSong;
    }
  },
  created() {
    //获取与输入值相似的歌曲
    this.$store.dispatch({
      type: "getMusic_sreach",
      music_type: "song_name",
      value: this.$route.query.value
    });
  }
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
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

header > span {
  color: white;
  margin-top: 0.4rem;
}
form {
  flex-grow: 2;
}
ul {
  position: absolute;
  list-style: none;
  background: rgb(255, 255, 255);
  width: 100%;
  top: 3.6rem;
  text-align: left;
  z-index: 3;
}
li {
  padding: 0.5rem;
  border-bottom: 0.01rem solid rgb(219, 216, 216);
  z-index: 2;
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

.select {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
}
.song_list_center {
  display: flex;
  margin: 0.5rem;
  border-bottom: 0.01rem solid rgb(206, 200, 200);
  padding: 0.6rem 0;
}
.song_list_center > span {
  padding-top: 0.5rem;
}
.song_list_center > div {
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