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
    //   this.axios
    //   .post("https://v.juhe.cn/toutiao/index?type=top&key='51d3f2baa25bc61f31ad93f5572fa79a'",

    //   )
    //   .then(data => {
    //     console.log(data);
    //   })
      //   let param = {
      //     key: "0629b4f94ed419ad3ea56ce5429020f4",
      //     v: "1.0",
      //     month: 10,
      //     day: 1
      //   };
      this.axios
        .get("http://api.juheapi.com/japi/toh", {
          params: {
            key: "0629b4f94ed419ad3ea56ce5429020f4",
            v: "1.0",
            month: 10,
            day: 1
          }
        })
        .then(data => {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getinformation();
    //   getinformation(){
    //   this.axios.post('http://api.juheapi.com/japi/toh',{
    //   })
    //   }
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