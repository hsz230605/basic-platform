<template>
    <div class="loginPage">
        <el-container>
            <el-header>
                <img src='../assets/logo1.png'>
            </el-header>
            <el-main>
                <div class="loginContent">
                    <h3>登录</h3>
                    <el-input v-model="input" placeholder="请输入您的电子邮箱"></el-input>
                    <el-button @click="login"type="primary">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    <span>没有帐号？<a href="#">立即注册</a></span>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods:{
      login:function(){
          this.$router.replace('map')
      }
  }
}
</script>
<style scoped>
.el-header{
    margin:0 auto;
    margin-top:150px;
}
button {
    margin:10px 0;
    width:500px;
    }
.loginContent{
    margin:0 auto;
    width: 500px;
}
.loginPage{
    position:absolute;
    top:0;
    bottom: 0;
    width: 100%;
    background: url('../assets/bg.png') no-repeat;
}
</style>
