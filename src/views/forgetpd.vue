<template>
  <div class="bbox">
     
    <div class="logobox">
      <img src="@/assets/logo.png" alt />
    </div>
    <div class="type">忘记密码</div>
    <!-- <van-cell-group> -->
    <div class="inputbox">
      <div class="title">手机号</div>
      <van-field v-model="value" placeholder="请输入您的手机号">
        <!-- <template #button>
          <div class="codebtn">获取验证码</div> -->
          <!-- <van-button size="small" type="primary">发送验证码</van-button> -->
        <!-- </template> -->
      </van-field>
      <!-- <div class="title">验证码</div>
      <van-field v-model="value" placeholder="请输入您的验证码" /> -->
      <div class="title">登录密码</div>
      <van-field v-model="value" placeholder="请输入您的密码" />
      
      <div></div>
    </div>

    <!-- </van-cell-group> -->
    <div class="btn">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      // bgimg: "url(" + require("@/assets/BJ.png") + ")"
    };
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  //  background-image: url(require('~@/assets/BJ.png'));
  // background-image: url("~@/assets/BJ.png");
  // background-repeat: no-repeat;
  background-position: center;
  //  background-image: 'url('+require('@/assets/BJ.png')+')';
  // :style="{backgroundImage:'url('+require('@/assets/BJ.png')+')'}"
  .type {
    width: 60%;
    margin: 0 auto;
    // margin-top: 60px;
    text-align: center;
    // font-size: 18px;
    padding: 10px;
     font-size: 1.25rem;
    color: orange;
    font-weight: 600;
    // color: #fff;
  }
  .logobox {
    width: 24%;
    margin: 0px auto;
    margin-top: 5rem;
    // margin-top: 100px;
    img {
      width: 100%;
    }
  }
  .van-cell {
    // width: 80%;
    background: transparent;
  }
  .inputbox {
    width: 80%;
    margin: 0 auto;
    .title {
      width: 88%;
      margin: 10px auto;
      font-size: 12px;
      text-align: left;
      // color: #fff;
    }
    .codebtn {
      border-left: 1px solid #b5b5b5;
      font-size: 12px;
      // padding: 4px;
      padding-left: 6px;
      // color: #fff;
    }
  }
  .btn {
    width: 74%;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 4px;
    padding: 6px;
    color: #fff;
    background-color: #ffcc03;
  }
}
</style>