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
        :class="isactive(item,index)?'active':''"
        v-for="(item,index) in menulist"
        :key="index"
        @click="change(item)"
      >{{item.name}}</div>
    </div>
    <div class="menulist">
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <div class="listitem" v-for="(item,index) in list" :key="index">
          <div class="boxL">
            <div class="Lname">{{item.name}}</div>
            <div class="Lprice">{{item.contact}}</div>
          </div>
          <div class="boxR">{{item.price}}元</div>
        </div>
      <!-- </van-pull-refresh> -->
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
export default {
  data() {
    return {
      isLoading: false,
      num:1,
      swipe: [
        {
          url: require("@/assets/lunbo.png")
        },
        {
          url: require("@/assets/lunbo.png")
        }
      ],
      menulist: [
        
      ],
      list: [
       
      ]
    };
  },
  methods: {
    isactive(a,b){
      return b+1==this.num
    },
    change(item) {
      // console.log(item.name);
      this.num=item.num
      this.getbooklist()
    },
    getbooktype(){
        this.$api.getbooktype({

      }).then(data=>{
        // console.log(data,"书籍种类");
        if(data.code==1){
          this.menulist=data.results
        }
      })
    },
    
    getbooklist(){
      this.$api.getbooklist({
        num:this.num
      }).then(data=>{
        // console.log(data,"书籍列表");
        if(data.code===1){
          this.list=data.results
        }
      })
    }
    // check(item) {
    //   console.log(item.target);
    // },

  },
created() {
  this.getbooktype()
  this.getbooklist()
},
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
  .active{
    border: 1px solid red;
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