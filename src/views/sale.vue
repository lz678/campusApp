<template>
  <div class="bbox">
    <div class="nav">出售</div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option1" />
    </van-dropdown-menu>
    <van-cell-group>
      <van-field v-model="name" label="书籍名称：" placeholder="请输入书籍名称" />
      <van-field v-model="contact" label="联系方式：" placeholder="请输入联系方式" />
      <van-field v-model="newprice" label="购入价格：" placeholder="请输入购入价格" />
      <van-field v-model="oldprice" label="出售价格：" placeholder="请输入出售价格" />
    </van-cell-group>
    <div class="salebtn" @click="send">发布</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      name: "",
      contact: "",
      newprice: "",
      oldprice: "",
      option1: [
        { text: "工学", value: 0 },
        { text: "理学", value: 1 },
        { text: "农学", value: 2 },
        { text: "医学", value: 3 },
        { text: "经济学", value: 4 },
        { text: "教育学", value: 5 },
        { text: "机械学", value: 6 }
      ]
    };
  },
  methods: {
    send(){
      console.log(this.name,this.contact,this.newprice,this.oldprice);
      this.$toast('发布成功！！！')
    }
  },
};
</script>
<style lang="scss" scoped>
// * {
//   color: #fff;
// }

.bbox {
  // position: fixed;
  height: 92vh;
  background-color: #fff;
  // overflow: scroll;
  .nav {
    width: 100%;
    height: 6vh;
    color: #fff;
    font-weight: 600;
    line-height: 6vh;
    background: linear-gradient(
      to right,
      rgb(198, 255, 221),
      rgb(251, 215, 134),
      rgb(247, 121, 125)
    );
  }
  .salebtn {
    width: 90%;
    margin: 6rem auto;
    padding: 10px 0px;
    border-radius: 4px;
    background-color: rgb(251, 215, 134);
    font-weight: bold;
    color: #fff;
  }
}
</style>