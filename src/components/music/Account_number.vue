<template>
<div class="center">
  <!-- 导航 -->
    <header>
        <span>账号</span>
         <img src="./icon/find_play.png" alt="" >
    </header>
    <!-- 用户信息 -->
  <div class="user ">
    <div>
      <img src="./icon/psb4N9CI7XJ.jpg" alt="" class="user_img">
                 <!-- //上传头像 -->
              <!-- <el-upload
                class="avatar-uploader"
                action="http://172.20.10.3:7777/upload_img"
                :show-file-list="false"
                name="importfile"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">

                <img :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
             </el-upload> -->





      <span>{{user}}</span>
    </div>
    <span :class="{ Sign_in:isOk }" @click="login">{{user_name}}</span>
  </div>
  <!-- 动态 -->
<el-row class="dynamic ">
  <el-col :span="6"><div class="grid-content bg-purple">
              <span>动态</span>
              <p>1</p>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
            <span>关注</span>
             <p>2</p>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
            <span>粉丝</span>
             <p>0</p>
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">
            <i class="el-icon-edit"></i>
             <p>我的资料</p>
    </div></el-col>
</el-row>
<!-- 我的消息 -->
  <div class=" news margin">
    <i class="el-icon-message"></i>
    <span>我的消息</span>
    <i class="el-icon-arrow-right"></i>
  </div>
  <!-- 会员中心 -->
  <div class=" news margin">
    <i class="el-icon-message"></i>
    <span>会员中心</span>
    <i class="el-icon-arrow-right"></i>
  </div>
  <!-- 商城 -->
    <div class="news">
    <i class="el-icon-message"></i>
    <span>商城</span>
    <i class="el-icon-arrow-right"></i>
  </div>
    <!-- 在线听歌免流量 -->
    <div class=" news">
    <i class="el-icon-message"></i>
    <span>在线听歌免流量</span>
    <i class="el-icon-arrow-right"></i>
  </div>
    <!-- 设置 -->
    <div class="news margin" >
    <i class="el-icon-message"></i>
    <span>设置</span>
    <i class="el-icon-arrow-right"></i>
  </div>
      <!-- 扫一扫 -->
    <div class=" news">
    <i class="el-icon-message"></i>
    <span>扫一扫</span>
    <i class="el-icon-arrow-right"></i>
  </div>
      <!-- 个性换肤 -->
    <div class=" news">
    <i class="el-icon-message"></i>
    <span>个性换肤</span>
    <i class="el-icon-arrow-right"></i>
  </div>
      <!-- 夜间模式 -->
    <div class=" news">
    <i class="el-icon-message"></i>
    <span>夜间模式</span>
    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      class="switch"
      >
    </el-switch>
  </div>
      <!-- 定时关闭 -->
    <div class=" news">
    <i class="el-icon-message"></i>
    <span>定时关闭</span>
    <i class="el-icon-arrow-right"></i>
  </div>
</div>
</template>

<script>
export default {
  name: "Account_number",
  data() {
    return {
      value1: true,
      value2: true,
      user: "",
      user_name: "登录",
      isOk: false,
      imageUrl:"./icon/psb4N9CI7XJ.jpg"
    };
  },
  methods: {
          handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    //登录
    login() {
      if (this.user) {
        this.user_name = "登录";
        this.isOk = true;
        this.user=''
      } else {
        this.$router.push({ path: "/music_login" });
      }

    }
  },
  //初始化
  created() {
    this.user = this.$store.state.music.phone;
    if (this.user) {
      this.user_name = "退出登录";
      this.isOk = true;
    }
  },
  //获取登录者信息
  computed: {
    // user(){
    //   return  this.$store.state.music.phone;
    // }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
.center {
  background: rgb(224, 222, 222);
  margin-bottom: 5rem;
}

header {
  background: rgb(241, 102, 102);
  color: white;
  padding: 0.5rem;
  display: flex;
  height: 2rem;
}
header > img {
  width: 2rem;
}
header > span {
  flex-grow: 2;
  line-height: 2rem;
  font-size: 1.2rem;
}
.Sign_in {
  color: red;
}
.user {
  background: white;
  display: flex;
  padding: 1rem;
}
.user > div {
  flex-grow: 2;
  text-align: left;
}
.user > span {
  margin-top: 8%;
}
.user_img {
  width: 5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.grid-content > span {
  color: gray;
}
.grid-content > p {
  margin: 0.1rem 0;
}

/* 动态 */
.dynamic {
  background: white;
  padding: 1rem 0;
  border-top: 0.01rem solid rgb(202, 199, 199);
}
/* 我的消息 */
.margin {
  margin-top: 1rem;
}
.news {
  background: white;
  padding: 1rem;
  display: flex;
  /* height: 2rem; */
  border-bottom: 0.01rem solid rgb(170, 168, 168);
}
.news > span {
  flex-grow: 2;
  text-align: left;
  margin-left: 0.5rem;
}
.news > i {
  margin-top: 0.2rem;
}
.switch {
  margin-top: 0.2rem;
}
.avatar-uploader {
  margin: 0.5rem 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #b1acac;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 0.01rem dashed rgb(185, 181, 181);
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>