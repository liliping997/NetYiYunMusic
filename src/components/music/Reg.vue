<template>
<div>
    <header>
        <i class="el-icon-arrow-left back" @click="back"></i>
        <span>手机号注册</span>
    </header>
            <div class="center">
              <span v-if="show" class="show">账号密码不能为空</span>
                <p>
                  <i class="el-icon-mobile-phone"></i>
                        <input type="text" placeholder="请输入手机号" name="phone" v-model="phone">
                </p>
                <p>
                   <i class="el-icon-sold-out"></i>
                        <input type="password" placeholder="设置登录密码，不少于6位" name="pwd" v-model="pwd">
                </p>
                <span  class="submit" @click="submit">立即注册</span >
                <!-- <input type="button" value="立即注册" class="submit" @click="submit">   -->
             </div >
             <div class="to_login">
                 <router-link to="music_login">已有账号,直接登录</router-link>
             </div>

<!-- 底部 -->
<footer>
    <div class="footer_title">其他注册方式</div>
<div class="footer_center">
    <div>
    <img src="./icon/wx.png" alt="">
    <p>微信</p>
    </div>
    <div>
     <img src="./icon/qq.png" alt="">
    <p>QQ</p>
    </div>
    <div>
    <img src="./icon/wb.png" alt="">
    <p>微博</p>
    </div>
    <div>
   <img src="./icon/email.png" alt="">
    <p>网易邮箱</p>
    </div>   
</div>
</footer>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "Reg",
  data() {
    return {
      phone: "",
      pwd: "",
      show:false
    };
  },
  methods: {
    //注册
    submit() {
      if (this.phone != "" && this.pwd != "") {
        let inputtext = {
          phone: this.phone,
          pwd: this.pwd
        };
        this.$store.dispatch({
          type: "Reg",
          data: inputtext
        });
        this.$router.push("music_login");
      }
      else{
          this.show=true
      }
    },
    //返回上一页
    back() {
      this.$router.go(-1);
    }
  },
  //初始化
  created() {},
  //获取状态
  computed: {
    //IP
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

header {
  background: rgb(241, 102, 102);
  color: white;
  font-size: 1rem;
  padding: 1rem;
  display: flex;
}
header > span {
  flex-grow: 2;
  text-align: center;
}
input {
  display: inline-block;
  border-style: none;
  line-height: 3rem;
  width: 88%;
  outline: none;
  font-size: 1rem;
  margin-top: 0.5rem;
}
.center > p {
  border-bottom: 0.01rem solid rgb(182, 180, 180);
  padding: 0.5rem;
  margin: 0 1rem;
}
.show{
  color:red;
}
button,
.submit {
  display: inline-block;
  border-style: none;
  width: 6rem;
  background: rgb(241, 102, 102);
  width: 90%;
  line-height: 3rem;
  margin-left: calc(50% - 48%);
  color: white;
  font-size: 1rem;
  outline: none;
  border-radius: 1.5rem;
  margin-top: 2rem;
}
.to_login {
  margin: 1rem 0.5rem 0 0;
  text-align: right;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer_center {
  display: flex;
  justify-content: space-around;
}
.footer_center > div > img {
  width: 3rem;
}
.footer_center > div > p {
  margin: 1rem 0;
}
.footer_title {
  margin-bottom: 1rem;
  color: rgb(150, 146, 146);
}
a {
  text-decoration: none;
  color: red;
}
</style>