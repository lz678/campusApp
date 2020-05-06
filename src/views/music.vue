<template>
  <div class="bbox">
    <div class="nav">推荐音乐</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
// * {
//   color: #fff;
// }

.bbox {
  // position: fixed;
  height: 92vh;
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
  }
}
</style>