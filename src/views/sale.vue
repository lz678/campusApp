<template>
  <div class="bbox">
    <div class="nav">出售</div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option1" />
    </van-dropdown-menu>
    <van-cell-group>
      <van-field v-model="name" label="书籍名称：" placeholder="请输入书籍名称" />
      <van-field v-model="contact" label="联系方式：" placeholder="请输入联系方式" />
      <!-- <van-field v-model="newprice" label="购入价格：" placeholder="请输入购入价格" /> -->
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
      // newprice: "",
      oldprice: "",
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      // hidshow: true, //显示或者隐藏footer,
      option1: [
        // { text: "工学", value: 1 },
        // { text: "理学", value: 2},
        // { text: "农学", value: 3 },
        // { text: "医学", value: 4 },
        // { text: "经济学", value: 5 },
        // { text: "教育学", value: 6 },
        // { text: "机械学", value: 7 }
      ]
    };
  },
  mounted() {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        // console.log(654);
        console.log(this.$store.state.hidshow);
        this.showHeight = document.body.clientHeight;
      })();
    };
  },
  watch: {
    showHeight: function() {
      if (this.docmHeight > this.showHeight) {
        // this.hidshow = false;
        this.$store.commit("changeShow", false);
      } else {
        // this.hidshow = true;
        this.$store.commit("changeShow", true);
      }
    }
  },
  created() {
    this.getbooktype();
  },
  methods: {
    // 验证手机号
    myauth() {
      let res = true;
      const contact = this.contact;
      const phoneEXP = /^1[3456789]\d{9}$/;
      if (!phoneEXP.test(contact)) {
        this.$toast({ message: "格式不正确！" });
        res = false;
        return false;
      }
      return res;
    },

    getbooktype() {
      this.$api.getbooktype({}).then(data => {
        // console.log(data,"书籍种类");
        if (data.code == 1) {
          // console.log(data);
          // console.log(data.results);
          data.results.forEach(element => {
            this.option1.push({ text: element.name, value: element.num });
          });
        }
      });
    },
    send() {
        console.log(this.value);
      let code =this.name && this.contact && this.oldprice;
      if (!code) {
        this.$toast("信息不完整！");
        return;
      } else {
        const mycode = this.myauth();
        if (!mycode) return false;
      }
      this.$api
        .salebook({
          num: this.value,
          name: this.name,
          contact: this.contact,
          price: this.oldprice
        })
        .then(data => {
          console.log(data);
          this.$toast(data.Msg);
          this.$router.push("/tabbar/bookcase");
        });
    }
  }
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
  overflow: scroll;
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