<template>
  <div class="bbox">
    <div class="nav">矿机</div>
    <div class="hr"></div>
    <div class="mytabs">
      <div :class="{select:Tab==index?true:false}" v-for="(item,index) in tablist" :key="index" @click="aa(item.id)">{{item.name}}</div>
    </div>
    <div class="content">
      <mill-list :tab='Tab'/>
    
    </div>
  </div>
</template>

<script>
import millList from './millList.vue'
export default {
  components:{millList},
  data() {
    return {
      tablist: [
        {
          name: "云矿商城",
          id: 0
        },
        {
          name: "运行中",
          id: 1
        },
        {
          name: "已到期",
          id: 2
        }
      ],
      active: 0,
      Tab: 0,
       count: 0,
      isLoading: false
    };
  },
  methods: {
    aa(a) {
      this.Tab = a;
      // console.log(this.Tab);
    },
     onRefresh() {
      
        this.isLoading = false;
        this.count++;
    
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: #fff;
}

.bbox {
  height: 92vh;
  .hr {
    height: 0.5vh;
    background-color: #1b1b21;
  }
}
.nav {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  font-size: 0.875rem;
  // padding: 6px;
  // position: fixed;
  // top: 0px;
  // z-index: 999;
  background-color: #0e0e11;

  // border: 1px solid red;
}
.mytabs {
  width: 100%;
  height: 4vh;
  line-height: 4vh;
  // border: 1px solid red;
  display: flex;
  justify-content: space-around;
  div {
    // padding: 6px 0px 6px 0px;
    padding: 0px 6px 0px 6px;
    font-size: 0.8rem;
    color: #a8a8a8;
  }
  .select{
    color: #fff;
    font-size: .875rem;
    border-bottom: 10px solid #FFCC03;

  }
}
.content{
width: 100%;
height: 81vh;
overflow: scroll;
  // border: 1px solid red;

}
</style>