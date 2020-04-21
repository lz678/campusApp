<template>
  <div class="bbox">
    <div class="nav">校园</div>

    <div class="map">
      <van-button class="city" type="primary" size="mini" to="/changeCity">更换城市({{city}})</van-button>
      <div class="mapname">当前天气：{{now.cond_txt}},{{now.tmp}}℃</div>
      <div class="upbox">
        <div class="upnum">风向：{{now.wind_dir}}</div>

        <div class="upnum">空气湿度：{{now.hum}}%</div>
      </div>
      <!-- echarts图表 -->
      <div id="myChart"></div>
    </div>
    <div>
      <van-cell
        v-for="(item,index) in checklist"
        :key="index"
        value="GO!"
        is-link
        value-class="icolor"
        @click="toindex(item)"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <div class="custom-title title">{{item.name}}</div>
          <!-- <span class="custom-title title">添加行程</span> -->
        </template>
      </van-cell>
    </div>
    <!-- <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />-->
  </div>
</template>

<script>
import { getStore, setStore } from "@/utils/index.js";
import echarts from "echarts";
export default {
  data() {
    return {
      checklist: [
        { name: "历史上的今天", path: "/history" },
        { name: "今日天气", path: "/register" },
        { name: "添加行程", path: "/register" }
      ],
      opinionData: [],
      opinion: [],
      // opinio:[1,2,3],
      now: "",
      weather: "",
      city: getStore("city").name||"北京"
      //       areaList:{
      //   province_list: {
      //     110000: '北京市',
      //     120000: '天津市'
      //   },
      //   city_list: {
      //     110100: '北京市',
      //     110200: '县',
      //     120100: '天津市',
      //     120200: '县'
      //   },
      //   county_list: {
      //     110101: '东城区',
      //     110102: '西城区',
      //     110105: '朝阳区',
      //     110106: '丰台区',
      //     120101: '和平区',
      //     120102: '河东区',
      //     120103: '河西区',
      //     120104: '南开区',
      //     120105: '河北区',

      //   }
      // }
    };
  },
  methods: {
    toindex(item) {
      this.$router.push(item.path);
    },
    getweather(city) {
      const me = [];
      this.axios
        .get(
          `https://free-api.heweather.net/s6/weather/forecast?location=${city}&key=54fe7c4881b942b9b2b32ae14bd7ec54`
        )
        .then(data => {
          // console.log(data.HeWeather6[0].daily_forecast);
          data.HeWeather6[0].daily_forecast.forEach(item => {
            this.opinionData.push(item.tmp_max);

            this.opinion.push(item.date.substr(5));
          });
          // console.log(this.opinionData, 5656);
          this.drawLine();
        });
      this.axios
        .get(
          `https://free-api.heweather.net/s6/weather/now?location=${city}&key=54fe7c4881b942b9b2b32ae14bd7ec54`
        )
        .then(data => {
          // console.log(data);
          this.now = data.HeWeather6[0].now;
        });
    },
    drawLine() {
      this.charts = echarts.init(document.getElementById("myChart"));
      this.charts.setOption({
        grid: {
          top: "14%",
          bottom: "14%",
          right: "4%",
          left: "4%",
          containLabel: true
        },
        //x轴的配置
        xAxis: {
          type: "category",
          // name:"最近三天气温变化",
          // nameLocation: "center",
          data: this.opinion,
          nameRotate: 0,
          // position:"bottom",
          // nameTextStyle: {
          //   color: "#fff"
          // },
          // minorTic:{
          //   show:false
          // },
          axisLine: {
            lineStyle: {
              color: "#666666",
              width: 2
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            interval: 0,
            rotate: 20,
            textStyle: {
              color: "#666"
              // color: "#FFCC03"
            }
          }
        },
        yAxis: {
          type: "value",
          name: "单位(摄氏度)",
          nameTextStyle: {
            // color: "#fff",
            fontSize: 10,
            fontWeight: 600
          },
          nameLocation: "end",
          // position:"right",
          axisLine: {
            lineStyle: {
              color: "#666666",
              width: 2
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 2,
            // rotate: 45,
            textStyle: {
              color: "#666"
              // color: "#FFCC03"
            }
          }
        },

        series: [
          {
            type: "line",
            stack: "总量",
            data: this.opinionData,
            smooth: true,
            lineStyle: {
              color: "#FFCC03" //折线的颜色
            }
            // itemStyle: {
            //   normal: {
            //     color: "#fff" //折线点的颜色
            //   }
            // }
          }
        ]
      });
    }
  },
  mounted() {
    this.getweather(this.city);
    this.drawLine();

    // console.log(getStore("token"));
    // console.log(this.$route);
    // this.$toast('暂未开放，敬请期待！')
  }
};
</script>

<style lang="scss" scoped>
.bbox {
  // position: fixed;
  height: 92vh;
  overflow: scroll;
}
// .my-swipe {
//   width: 96%;
//   margin: 0 auto;
//   margin-top: 7vh;
//   img {
//     width: 100%;
//   }
// }
* {
  // color: #fff;
}
.nav {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  color: #fff;
  font-weight: 600;
  // border-bottom: 1px solid #1B1B21;
  //  color:orange;
  background: linear-gradient(
    to right,
    rgb(198, 255, 221),
    rgb(251, 215, 134),
    rgb(247, 121, 125)
  );
  // background-color: #1B1B21;
}
#myChart {
  width: 94%;
  height: 40vh;
  margin: 0 auto;
  // background-color: #1b1b21;
}
.mapname {
  font-size: 14px;
  padding: 6px;
}
.map {
  width: 100%;
  // background-color: #1b1b21;
  text-align: left;
  border-bottom: 1px solid rgb(251, 215, 134);
}
.upbox {
  width: 100%;

  display: flex;
  justify-content: flex-start;
}
.upnum {
  line-height: 24px;
  font-size: 10px;
  color: #44d967;
  padding: 0px 0px 0px 10px;
}
.city {
  margin: 6px 4px;
  padding: 0px 2px;
}
.title {
  color: #007acc;
  font-weight: 600;
}
.icolor {
  color: orange;
}
// .upimgbox {
//   width: 14px;
//   height: 24px;

//   background-image: url("~@/assets/shujia1.png");
//   background-position: center;
//   background-size: cover;
// }
// .notice {
//   width: 40%;
//   padding: 6px;
//   span {
//     font-size: 12px;
//     padding-left: 4px;
//     color: #d0cfcf;
//   }
// }
// .van-notice-bar {
//   background: transparent;
// }
</style>