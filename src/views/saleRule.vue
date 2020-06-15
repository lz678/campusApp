<template>
  <div class="bbox">
    <van-nav-bar class="nav" left-arrow @click-left="$router.go(-1)">
      <div slot="title" class="navtitle">规则</div>
    </van-nav-bar>
    <div class="list">
      <div class="ruletitle">建议出售规则：</div>
      <div v-html="rule" class="rule"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rule:''
    };
  },
  methods: {
    getSaleRule() {
    this.$api.getSaleRule().then(data=>{
      console.log(data);
      if(data.code==1){
        this.rule=data.results[0].rule
      }
      
    })
    }
  },
  created() {
   this.getSaleRule()
    
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
    .ruletitle{
      padding:.375rem 0 .375rem 1rem;
      text-align: left;
      color: red;
      font-size: .875rem;
    }
    .rule{
      padding: 1rem;
      text-align: left;
    }
  }
}
</style>