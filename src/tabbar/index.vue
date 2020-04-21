<template>
  <div class="box">
    <router-view></router-view>
    <div class="tabbar">
      <div class="tabarbox" v-for="(item,index) in list" :key="index" @click="jump(item)">
        <!-- <div> -->
          <div class="imgbox">
            <img :src="isActive(item)?item.icon:item.xicon" alt />
          </div>
          <div class="title" :class="{'fontcolor':isActive(item)}">{{item.name}}</div>
        </div>
      <!-- </div> -->
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
        // {
        //   name: "矿机",
        //   path: "/tabbar/mill",
        //   icon: require("@/assets/33.png"),
        //   xicon: require("@/assets/3.png")
        // },
        {
          name: "置换",
          path: "/tabbar/change",
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
  width: 24px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
.box {
  min-height: 100vh;
}
.tabbar {
  width: 100%;
  height: 8vh;
  position: fixed;
  // background-color: #E4F1C6;
  // background-color: #1B1B21;
  bottom: 0px;
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabarbox{
      width: 20%;
  }
}
.title {
  font-family: SourceHanSansCN-Regular;
  font-size: 0.8rem;
  // color: #fff;
}
.fontcolor{
   color: orange;
 }
</style>