<template>
<div>
    <header>
        <i class="el-icon-arrow-left back" @click="back"></i>
        <!-- <img src="./icon/back.png" alt="" class="header_img"> -->
        <span>手机号登录</span>
    </header>
     <div>
       <div class="wrong" v-if="wrong">账号或密码错误，请重新输入</div>
                <p>
                    <i class="el-icon-mobile-phone"></i>
                        <input type="text" placeholder="手机号"  v-model="inputtext.phone">
                </p>
                <p>
                   <i class="el-icon-sold-out"></i>
                        <input type="password" placeholder="密码"  v-model="inputtext.pwd">
                </p>
                <span class="submit" @click="login">登录</span>
                <!-- <input type="button" value="登录" class="submit" @click="login">   -->
        </div >
  <div>
     <router-link to="/music_reg">立即注册</router-link>
  </div>
</div>
</template>

<script>

export default {
  name: "Login",
  data(){
    return {
        inputtext:{},
        wrong:false,
    }
  },
  methods: {
    //登录
    login(){
         this.$store.dispatch({
            type:"Login",
            data:this.inputtext
        });
      if(this.isLogin){
            this.$router.push("music")
      }
      else{
          this.wrong=true;
      }
    },
    //返回上一页
    back(){
       this.$router.go(-1);
    }
  },
  updated(){

  },
  computed:{
      isLogin(){
          return this.$store.state.music.phone;
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
p{
   border-bottom: 0.01rem solid rgb(182, 180, 180);
   padding:.5rem;
   margin:0 1rem;
}
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
  margin: 2rem 0 1rem;
}
a{
  color:rgb(168, 165, 165);
}
.wrong{
  color:red;
  padding:.5rem 0 0;
}

</style>