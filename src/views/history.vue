<template>
  <div class="bbox">
    <div class="nav">历史</div>
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
      
      // this.axios
      //   .get("", {
      //     params: {
             
      //       channel: '头条',
      //       num: '10',
      //       start: '0',
      //       appkey: "e372dc9924a53757c01a6394036ee2d5"
      //     }
      //   })
      //   .then(data => {
      //     console.log(data);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  },
  created() {
    // this.getinformation();
    
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
  }
  .list {
    width: 100%;
    height: 94vh;
  }
}
</style>