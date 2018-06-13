<template>
<div class="center">
    <div v-for="item in music_video" :key="item._id" class="video">
        <video :src="IP+item.src" controls></video>
        <div class="video_text">
          <p>{{item.name}}</p>
           <figure>
         <img src="../icon/icon_08.png" class="small_img">
        <figcaption>{{ item.like}}</figcaption>
      </figure>
           <figure>
         <img src="../icon/pinlun.png" class="small_img">
        <figcaption>{{ item.like}}</figcaption>
      </figure>
      <i class="el-icon-more"></i>
    </div>
 </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
  computed: {
    music_video() {
      return this.$store.state.music.video;
    },
    IP() {
      return this.$store.state.music.IP;
    }
  }
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
}
.center {
  margin-bottom: 5rem;
  /* margin-top:.1rem; */
}
video{
  width: 99%;
      border: .01rem solid rgb(197, 196, 196);
}
.video_text {
  display: flex;
  justify-content: space-around;
}
.small_img {
  width: 1.5rem;
  height: 1.5rem;
}
i {
  /* margin-top: 1.3rem; */
  display: inline-block;
  color: darkgray;
}
figcaption {
  margin: 0.5rem 0;
  color: rgb(179, 174, 174);
}
p {
  width: 50%;
  text-align: left;
}
</style>