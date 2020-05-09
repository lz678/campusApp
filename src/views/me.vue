<template>
  <div class="bbox">
    <div class="nav">个人中心</div>
    <div class="boxone">
      <div class="headimg">
        <img src="@/assets/auther.png" alt />
      </div>
      <div class="headname">
        <!-- <div> -->
        <span class="nameone">昵称：小汪汪</span>
        <span class="nametwo">已认证</span>
        <!-- </div> -->
        <div class="namethree">ID:1611020013</div>
      </div>
    </div>
    <div class="boxtwo">
      <div class="two-title">我的资产</div>
      <div class="two-item">金币</div>
      <div class="two-item-num">
        <div>3000.00</div>
        <div class="bgi-fan"></div>
      </div>
    </div>
    <div class="hr"></div>
    <div class="menu">
      <van-cell-group class="cellbox">
        <van-cell title-class="type" title="联系方式" is-link to="/contact">
          <div slot="icon" class="iconbox">
            <img src="@/assets/me_auth.png" alt />
          </div>
        </van-cell>
        <!-- <van-cell title-class="type" title="意见反馈" is-link>
          <div slot="icon" class="iconbox">
            <img src="@/assets/me_fb.png" alt />
          </div>
        </van-cell> -->
        <van-cell title-class="type" title="我的设置" is-link to="/set">
          <div slot="icon" class="iconbox">
            <img src="@/assets/my_set.png" alt />
          </div>
        </van-cell>
        <!-- <van-cell title-class="type" title="系统公告" is-link>
          <div slot="icon" class="iconbox">
            <img src="@/assets/xitong.png" alt />
          </div>
        </van-cell> -->
        <van-cell title-class="type" title="关于我们" is-link to="/aboutUs">
          <div slot="icon" class="iconbox">
            <img src="@/assets/me_about.png" alt />
          </div>
        </van-cell>
        <van-cell title-class="type" title="退出" is-link @click="quite">
          <div slot="icon" class="iconbox">
            <img src="@/assets/me_dividend.png" alt />
          </div>
        </van-cell>
      </van-cell-group>

      <!-- <div class="menuitem" v-for="(item,index) in menulist" :key="index" @click="clickitem(item)">
        <img :src="item.img" alt />
        <div class="menuitem-name">{{item.name}}</div>
      </div>-->
    </div>
  </div>
</template>

<script>
import {removeStore} from '@/utils/index.js'
export default {
  data() {
    return {
      menulist: [
        {
          // img: require("@/assets/m1.png"),
          name: "邀请好友"
        },
        {
          // img: require("@/assets/m2.png"),
          name: "身份认证"
        },
        {
          // img: require("@/assets/m3.png"),
          name: "转账"
        },
        {
          // img: require("@/assets/m4.png"),
          name: "收款"
        },
        {
          // img: require("@/assets/m5.png"),
          name: "推荐有奖"
        },
        {
          // img: require("@/assets/m6.png"),
          name: "团队"
        },
        {
          // img: require("@/assets/m7.png"),
          name: "反馈"
        },
        {
          // img: require("@/assets/m8.png"),
          name: "新手帮助"
        },
        {
          // img: require("@/assets/m9.png"),
          name: "设置"
        },
        {
          // img: require("@/assets/m10.png"),
          name: "工会"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    clickitem(item) {
      alert(item.name);
    },
    quite(){
      removeStore('token')
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
 
.bbox {
  // position: fixed;
  height: 92vh;
  overflow: scroll;
  background-color: #fff;
}
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

  // border: 1px solid red;
}
.boxone {
  width: 100%;
  padding: 20px 0px;
  // padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .headimg {
    width: 50px;
    margin-left: 10%;
    margin-right: 6px;
    img {
      width: 100%;
    }
  }
  .headname {
    padding: 6px;
    text-align: left;
    .nameone {
      font-size: 12px;
      // color: #fefefe;
      // border: 1px solid red;
    }
    .nametwo {
      font-size: 8px;
      padding: 0px 4px;
      margin-left: 6px;
      border-radius: 10%;
      color: #ffcc03;
      border: 1px solid #ffcc03;
    }
    .namethree {
      font-size: 10px;
      padding: 4px 0px;
      // color: #e4e4e4;
    }
  }
}
.boxtwo {
  width: 100%;
  padding: 0px 0px 30px 0px;
  // margin-top: 50px;
  text-align: left;
  .two-title {
    width: 40%;
    margin-left: 10%;
    font-size: 12px;
    margin-top: 10px;
  }
  .two-item {
    width: 40%;
    margin-left: 10%;
    padding: 4px 0px;
    font-size: 10px;
    color: #bcbcc4;
  }
  .two-item-num {
    // width: 100%;
    // width: 40%;
    margin-left: 10%;
    font-size: 14px;
    position: relative;
    color: #bcbcc4;
    .bgi-fan {
      width: 14px;
      height: 100%;
      position: absolute;
      top: 0px;
      right: 34px;
      background-image: url("~@/assets/next.png");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  // & > div{

  //   width: 40%;
  //   margin-left: 10%;
  // }
}
.hr {
  width: 100%;
  height: 2vh;
  background-color: #e7e4e4;
}
.menu {
  // display: flex;
  // justify-content: space-around;
  // justify-content: space-between;
  // flex-wrap: wrap;
  // background-color: #b5b5b5;
  .cellbox {
    width: 90%;
    margin: 0 auto;
  }
  .type {
    text-align: left;
    padding: 0px 16px;
  }
  .iconbox {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: 0.2rem;
    img {
      width: 100%;
    }
  }
  .menuitem {
    width: 16%;

    margin: 20px 4.5% 20px 4.5%;
    img {
      width: 56%;
    }
    .menuitem-name {
      font-size: 10px;
    }
  }
}
</style>