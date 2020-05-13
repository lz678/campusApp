<template>
  <div class="bbox">
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">推荐音乐</div>
    </van-nav-bar>
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
      list:''
    };
  },
  methods: {
    hotMusic(){
      this.$api.hotMusic().then(data=>{
        console.log(data);
        
      })
    }
  },
  created() {
    
  },
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
  .content{
    width: 100%;
    height: 68vh;
    overflow: scroll;
  }
}
</style>