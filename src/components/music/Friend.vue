<template>
<div class="BigBox">
 
</div>

</template>

<script>
export default {
  name: "Friend",
  data() {
    return {
      // initLatelyList:[]
    };
  },
  methods: {
    click_song(id){
      this.$router.push({ path: "/current_song", query: { id: id } });
    },
  },
  //初始化
  created() {
    
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
  padding:.2rem 0;
}
header>span{
    line-height: 2.6rem;
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