<template>
  <div class="box">
    <router-view></router-view>
    <div class="tabbar" v-if="hidshow">
      <div class="tabarbox" v-for="(item,index) in list" :key="index" @click="jump(item)">
        <div class="imgbox">
          <img :src="isActive(item)?item.icon:item.xicon" alt />
        </div>
        <div class="title" :class="{'fontcolor':isActive(item)}">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "校园",
          path: "/tabbar/campus",
          icon: require("@/assets/xiaoyuan1.png"),
          xicon: require("@/assets/xiaoyuan.png")
        },
        {
          name: "书架",
          path: "/tabbar/bookcase",
          icon: require("@/assets/shujia1.png"),
          xicon: require("@/assets/shujia.png")
        },

        {
          name: "出售",
          path: "/tabbar/sale",
          icon: require("@/assets/zhihuan1.png"),
          xicon: require("@/assets/zhihuan.png")
        },
        {
          name: "个人",
          path: "/tabbar/me",
          icon: require("@/assets/geren1.png"),
          xicon: require("@/assets/geren.png")
        }
      ]
    };
  },
  computed: {
    hidshow(){
      return this.$store.state.hidshow
    }
  },
  methods: {
    isActive(item) {
      return this.$route.path === item.path;
    },
    jump(item) {
      this.$router.push(item.path);
    }
  }
};
</script>

 <style lang="scss" scoped>
.imgbox {
  width: 1.5rem;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.box {
  height: 100vh;
  background-color: #fff;
  overflow: scroll;
}
.tabbar {
  width: 100%;
  height: 8vh;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  border-top: 1px solid #e6e4e4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabarbox {
    width: 20%;
  }
}
.title {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.8rem;
}
.fontcolor {
  color: orange;
}
</style>