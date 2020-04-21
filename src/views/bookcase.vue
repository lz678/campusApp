<template>
  <div class="bbox">
    <div class="nav">书架</div>
  
   
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  mounted() {
   
  }
};
</script>

<style lang="scss" scoped>
* {
  // color: #fff;
}
.nav {
  width: 100%;
  height: 6vh;
 color: #FFF;
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
}
 
</style>