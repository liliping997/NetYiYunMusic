<template>
<div>
    <!-- 轮播 -->
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3><img :src="IP+banner[item]"  class="banner" ></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    <!-- <img :src="IP+banner[index]"  class="banner" > -->
    <!-- 小图标 -->
    <div class="select">
       <figure>
         <img src="../icon/QQ20180610182454.jpg" class="small_img">
        <figcaption>私人FM</figcaption>
      </figure>
        <figure>
         <img src="../icon/QQ20180610182534.jpg" class="small_img">
        <figcaption>每日推荐</figcaption>
      </figure>
        <figure>
         <img src="../icon/QQ20180610182542.jpg" class="small_img">
        <figcaption>歌单</figcaption>
      </figure>
        <figure>
         <img src="../icon/QQ20180610182551.jpg" class="small_img">
        <figcaption>排行榜</figcaption>
      </figure>
    </div>
    <!-- 推荐歌单 -->
        <div class="center">
    <h2  class="referee">推荐歌单<i class="el-icon-arrow-right"></i></h2>
    <div class="music_form">
           <div v-for="item in music_form" :key="item._id" class="music_form_center" @click="skip_click(item._id)">
               <img :src="IP+item.form_img" alt="" class="music_form_img">
               <p>{{ item.form_name}}</p>
           </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "Music_form",
  data() {
    return {
     
    };
  },
  methods: {
    skip_click(id) {
      this.$router.push({ path: "/music_list", query: { id: id } });
    }
  },
  //获取状态
  computed: {
     //IP
    IP(){
      return this.$store.state.music.IP;
    },
    //获取歌单
    music_form() {
      return this.$store.state.music.music_form;
    },
    //获取轮播图
    banner() {
      return this.$store.state.music.banner;
    }
  },
  //初始化轮播
  created: function() {
  //   setInterval(() => {
  //     this.index++;
  //     if (this.index == 5) {
  //       this.index = 0;
  //     }
  //   }, 3000);
  }
};
</script>


<style scoped>
.center {
  margin-bottom: 5rem;
  margin-left: 0.2rem;
}
.banner{
    height: 11rem;
   width: 100%;
}
.select{
    display: flex;
    justify-content: space-around;
}
figure>img{
  width: 2rem;
}
figure{
  width: 4rem;
  font-size: .8rem;
  margin:.5rem 0;
}
figcaption{
  width: 4rem;
   margin: .5rem 0;
}
.referee {
  padding: 0 1rem;
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
}
.music_form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.music_form_center {
  width: 31%;
  margin: 0.2rem;
  cursor: pointer;
}
.music_form_img {
  width: 8rem;
  width: 100%;
  height: 5rem;
}
.music_form_center > p {
  font-size: 0.8rem;
  width: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>