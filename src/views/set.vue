<template>
  <div class="bbox">
    <!-- <div class="nav">历史</div> -->
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">设置</div>
    </van-nav-bar>
    <div class="list"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    webs(){
       
    },

    getinformation() {
    
    }
  },
  created() {
   
    
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  // position: fixed;
  height: 100vh;
  overflow: scroll;
  .nav {
    width: 100%;
    height: 6vh;
    line-height: 6vh;
    color: #fff;
    font-weight: 600;
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
  .list {
    width: 100%;
    height: 94vh;
  }
}
</style>