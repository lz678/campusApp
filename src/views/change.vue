<template>
  <div class="bbox">
    <div class="nav">置换</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "-12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "-12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "-12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "-12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "-12%"
        },
        {
          name: "USDT",
          price: "12￥",
          rate: "12%"
        }
      ]
    };
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
  // overflow: scroll;
  .nav {
    width: 100%;
    height: 6vh;
    color: #FFF;
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