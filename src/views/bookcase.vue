<template>
  <div class="bbox">
    <div class="nav">书架</div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipe" :key="index">
        <img :src="item.url" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="menu">
      <div
        class="menuitem"
        v-for="(item,index) in menulist"
        :key="index"
        @click="change(item)"
      >{{item.name}}</div>
    </div>
    <div class="menulist">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="listitem" v-for="(item,index) in list" :key="index" @click="check(item)">
          <div class="boxL">
            <div class="Lname">{{item.name}}</div>
            <div class="Lprice">{{item.phone}}</div>
          </div>

          <div class="boxR">{{item.price}}</div>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {
      isLoading: false,
      swipe: [
        {
          url: require("@/assets/lunbo.png")
        },
        {
          url: require("@/assets/lunbo.png")
        }
      ],
      menulist: [
        {
          name: "工学"
        },
        {
          name: "理学"
        },
        {
          name: "农学"
        },
        {
          name: "医学"
        },

        {
          name: "机械学"
        },
        {
          name: "经济学"
        },
        {
          name: "教育学"
        },
        {
          name: "哲学"
        }
      ],
      list: [
        {
          name: "马克思主义",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "毛概",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "大学英语（一）",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "大学英语（二）",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "公共体育",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "马克思主义",
          phone: 15183848167,
          price: "10元"
        },
        {
          name: "马克思主义",
          phone: 15183848167,
          price: "10元"
        }
      ]
    };
  },
  methods: {
    change(item) {
      console.log(item.name);
    },
    check(item) {
      console.log(item);
    },
    onRefresh() {
      this.$toast("刷新成功！");
      this.isLoading = false;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 6vh;
  color: #fff;
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
  background-color: #fff;
}
.my-swipe {
  width: 96%;
  height: 24vh;
  margin: 0 auto;
  margin-top: 1vh;
  img {
    width: 100%;
  }
}
.menu {
  width: 100%;
  padding: 10px 0px;
  height: 12vh;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ffcc03;
  .menuitem {
    width: 20%;
    height: 4vh;
    line-height: 4vh;
    margin: 6px 2% 6px 2%;
    border-radius: 6px;
    font-size: 0.875rem;
    border: 1px solid #ffcc03;
  }
}
.menulist {
  width: 100%;
  height: 45vh;
  overflow: scroll;
  .listitem {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.375rem 0px;
    border-bottom: 1px solid #e9e8e7;
    .boxL {
      width: 50%;
      text-align: left;
      font-size: 0.875rem;
      font-weight: 600;
      .Lname {
        padding: 4px 0px;
      }
      .Lprice {
        font-size: 0.625rem;
        color: #afadad;
      }
    }
    .boxR {
      width: 20%;
      color: #ffcc03;
    }
  }
}
</style>