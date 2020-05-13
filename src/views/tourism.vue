<template>
  <div class="bbox">
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">热门景点</div>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipe" :key="index">
        <img :src="item.imgsrc" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div v-for="(item,index) in list" :key="index">
        <div class="tourname">{{item.name}}</div>
        <div class="tourdescription">{{item.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipe: "",
      list: ""
    };
  },
  methods: {
    hotTour() {
      this.$api.hotTour().then(data => {
        console.log(data);
        if (data.code == 1) {
          this.swipe = data.data.imglist;
          this.list = data.results;
        }
      });
    }
  },
  created() {
    this.hotTour();
  }
};
</script>
<style lang="scss" scoped>
// * {
//   color: #fff;
// }

.bbox {
  // position: fixed;
  height: 100vh;
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
    .navtitle {
      color: #fff;
      font-weight: 600;
    }
  }
  .my-swipe {
    width: 96%;
    height: 24vh;
    margin: 0 auto;
    margin-top: 1vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    height: 68vh;
    overflow: scroll;
    // border: 1px solid red;
    .tourname {
      padding: 6px 0px;
      font-size: 1.125rem;
    }
    .tourdescription {
      text-align: left;
      font-size: .875rem;
      padding: 4px 10px;
    }
  }
}
</style>