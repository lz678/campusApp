<template>
  <div class="bbox">
    <!-- <div class="nav">历史</div> -->
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">安全</div>
    </van-nav-bar>
    <div class="list">
      <div class="safetitle">
        安全：
      </div>
      <div class="text">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:''
    };
  },
  methods: {
    getsafeinformation() {
    this.$api.getsafeinformation().then(data=>{
      if(data.code==1){
        console.log(data);
        this.text=data.results[0].txt
      }
    })
    }
  },
  created() {
    this.getsafeinformation()
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  // position: fixed;
  height: 100vh;
  background-color: #fff;
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
    .safetitle{
      padding:.6rem 0 .375rem 1rem;
      color: red;
      text-align: left;
      // font-size: .9rem;
    }
    .text{
      padding: 1rem;
      text-align: left;
      color: red;
    }
  }
}
</style>