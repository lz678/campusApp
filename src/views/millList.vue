<template>
  <div class="millcontent">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="itemone" v-if="tab==0">
        <div class="itemsLeft">
          <div class="onename">体验云矿机</div>
          <span>租价：100</span>
          <span>产量：150</span>
          <div>算力：100</div>
          <span>限量：0/3</span>
          <span>时间：30天</span>
        </div>
        <div class="itemsRight">租用</div>
      </div>
      <div class="itemtwo" v-if="tab==1">
        <div class="itemtwoL">
          <span class="twoname">体验云矿机</span>
          <span class="twonum">总产量：150</span>
        </div>
        <div class="itemtwoR">到期时间：2020-20-21 12:00:00</div>
      </div>
      <div class="itemthree" v-if="tab==2">
        <div class="itemtwoL">
          <div class="twoname">体验云矿机</div>
          <div class="twonum">已到期</div>
        </div>
        <div class="itemtwoR">
          <div class="twoname">总产量：150</div>
          <div class="twonum">算力：100</div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },
  props: {
    tab: Number
  },
  methods: {
    onRefresh() {
      this.isLoading = false;
      this.count++;
    }
  }
};
</script>

<style lang="scss" scoped>
.millcontent {
  width: 100%;
  height: 100%;
  overflow: scroll;
  // border: 1px solid red;
  .itemone {
    width: 94%;
    display: flex;
    margin: 1rem auto;
    padding: 1rem 0px 1rem 0px;
    //   justify-content: space-evenly;
    justify-content: flex-end;
    align-items: center;
    background-color: #1b1b21;
    .itemsLeft {
      width: 50%;
      text-align: left;
      font-size: 0.625rem;
      color: #e6e6e6;
      .onename {
        font-weight: 600;
        font-size: 0.9rem;
      }
      span {
        padding: 0px 10px 0px 0px;
      }
    }
    .itemsRight {
      width: 60px;
      height: 60px;
      font-size: 14px;
      //   font-family: 'SourceHanSansCN';
      font-weight: 600;
      color: black;
      margin-right: 2rem;
      text-align: center;
      line-height: 60px;
      border-radius: 50%;
      background-color: #ffcc03;
    }
  }
  .itemtwo {
    width: 94%;
    // display: flex;
    margin: 10px auto;
    padding: 1rem 0px 1rem 0px;
    //   justify-content: space-evenly;
    // justify-content: flex-end;
    // align-items: center;
    background-color: #1b1b21;
    .itemtwoL {
      .twoname {
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0px 20px 0px 20px;
      }
      .twonum {
        font-size: 12px;
        color: #ffcc03;
        margin: 0px 20px 0px 20px;
      }
    }
    .itemtwoR {
      margin-top: 8px;
      font-size: 0.6rem;
      color: #e6e6e6;
    }
  }
  .itemthree {
    width: 94%;

    margin: 1rem auto;
    padding: 1rem 0px 1rem 0px;

    background-color: #1b1b21;
    .itemtwoL {
        display: flex;
        justify-content: flex-end;
      .twoname {
          width: 60%;
        font-size: 0.9rem;
        font-weight: 600;
        margin-right: 50px;
      }
      .twonum {
        font-size: 10px;
        color: #e6e6e6;
         margin-right: 30px;
      }
    }
    .itemtwoR {
         display: flex;
        justify-content: center;
      margin-top: 8px;
      font-size: 0.6rem;
      color: #e6e6e6;
       .twoname {
          width: 30%;
    //    margin-right: 40px;
      }
      .twonum {
        font-size: 0.6rem;
         margin-right: 10px;
         
      }
    }
  }
}
</style>