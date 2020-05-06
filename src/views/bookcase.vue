<template>
  <div class="bbox">
    <div class="nav">书架</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipe" :key="index">
        <img :src="item.url" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="menu">
      <div v-for="(item,index) in menulist" :key="index">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {
      swipe: [
        {
          url: require("@/assets/lunbo.png")
        },
        {
          url: require("@/assets/lunbo.png")
        }
      ],
      menulist:[
        {
          name:'建筑'
        },
        {
          name:'英语'
        },
        {
          name:'小说'
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
 
.nav {
  width: 100%;
  height: 6vh;
  color: #fff;
  font-weight: 600;
  line-height: 6vh;
  // font-size: 0.875rem;
  background: linear-gradient(
    to right,
    rgb(198, 255, 221),
    rgb(251, 215, 134),
    rgb(247, 121, 125)
  );
}
.bbox {
  height: 92vh;
  overflow: scroll;
  background-color: #fff;
}
.my-swipe {
  width: 96%;
  height: 24vh;
  margin: 0 auto;
  margin-top: 1vh;
  img {
    width: 100%;
  }
}
.menu{
  width: 100%;
  height: 61vh;
  
  // border: 1px solid red  
}
</style>