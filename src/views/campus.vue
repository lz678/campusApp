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
  </div>
</template>

<script>
import { getStore, setStore } from "@/utils/index.js";
import echarts from "echarts";
export default {
  data() {
    return {
      checklist: [
        { name: "今日天气", path: "/today" },
        { name: "热门景点", path: "/tourism" },
        { name: "推荐歌曲", path: "/music" },
        // { name: "历史上的今天", path: "/history" },
      ],
      opinionData: [],
      opinion: [],
      // opinio:[1,2,3],
      now: "",
      weather: "",
      city: getStore("city").name || "北京"
    };
  },
  methods: {
    toindex(item) {
      this.$router.push(item.path);
    },
    getweather(city) {
      const me = [];
      this.axios
        .get("https://free-api.heweather.net/s6/weather/forecast", {
          params: {
            location: this.city,
            key: "54fe7c4881b942b9b2b32ae14bd7ec54"
          }
        })
        .then(data => {
          data.HeWeather6[0].daily_forecast.forEach(item => {
            this.opinionData.push(item.tmp_max);
            this.opinion.push(item.date.substr(5));
          });
          this.drawLine();
        });
      this.axios
        .get(
          `https://free-api.heweather.net/s6/weather/now?location=${city}&key=54fe7c4881b942b9b2b32ae14bd7ec54`
        )
        .then(data => {
          console.log(data);
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
        // 校园页面
        xAxis: {
          type: "category",
          // name:"最近三天气温变化",
          // nameLocation: "center",
          data: this.opinion,
          nameRotate: 0,
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
            }
          }
        },
        yAxis: {
          type: "value",
          name: "单位(摄氏度)",
          nameTextStyle: {
            fontSize: 10,
            fontWeight: 600
          },
          nameLocation: "end",
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
            textStyle: {
              color: "#666"
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
          }
        ]
      });
    }
  },
  mounted() {
    this.getweather(this.city);
    this.drawLine();
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
#myChart {
  width: 94%;
  height: 40vh;
  margin: 0 auto;
}
.mapname {
  font-size: 14px;
  padding: 6px;
}
.map {
  width: 100%;
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
.van-cell {
  background: transparent;
}
</style>