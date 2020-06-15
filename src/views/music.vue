<template>
  <div class="bbox">
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">推荐音乐</div>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipe" :key="index">
        <img :src="item.musicsrc" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div class="contentitem" v-for="(item,index) in list" :key="index">
        <div :class="'musicid'+index%4">{{index+1}}</div>
        <div class="middle">
          <div class="musicname">{{item.name}}</div>
          <div class="musicauthname">{{item.authname}}</div>
        </div>
        <div class="zhuanji">专辑：</div>
        <div class="musicauth">{{item.auth}}</div>
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
    hotMusic() {
      this.$api.hotMusic().then(data => {
        console.log(data);
        if (data.code == 1) {
          this.swipe = data.data.imglist;
          this.list = data.results;
        }
      });
    }
  },
  created() {
    this.hotMusic();
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
    height: 28vh;
    margin: 0 auto;
    margin-top: 1vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 100%;
    height: 60vh;
    overflow: scroll;
    .contentitem {
      width: 100%;
      height: 8vh;
      // padding: 2px 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
       border-bottom: 1px solid #e9e8e7;
      // div{
      //   padding: 2px 0px;
      // }
      .musicid0 {
        width: 8%;
        color: rgb(255, 0, 0); 
      }
        .musicid1 {
        width: 8%;
        color: rgb(255, 165, 0); 
      }
     
         .musicid2 {
        width: 8%;
        color: rgb(0, 255, 0  ); 
      }
         .musicid3 {
        width: 8%;
        color: rgb(0, 127, 255 ); 
      }
      .middle{
        width: 34%;
        font-size: .84rem;
      }
      .zhuanji{
        width: 12%;
        color: rgb(20, 200, 100  );
        font-size: .8rem;

      }
      .musicauth {
        width: 34%;
        font-size: .8rem;
        text-align: left;
        // border: 1px solid red;
      }
    }
  }
}
</style>