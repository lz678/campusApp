<template>
  <div class="bbox">
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">详情</div>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: "",
    };
  },
  methods: {
    getBookDetails() {
      this.$api.getBookDetail({
          orderid:this.$route.params.Mid
      })
      .then((data)=>{
          console.log(data);
      })
      
    },
  },
  created(){
      this.getBookDetails()
      
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  // position: fixed;
  height: 92vh;
  overflow: scroll;
  background-color: #fff;
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
}
</style>>

 