<template>
  <div class="bbox">
    <div class="nav">详情</div>
    <div class="mapname">今日气温：体感：{{now.fl}}℃,风向：{{now.wind_dir}}</div>
     <div class="mapname">当前天气：{{now.cond_txt}},{{now.tmp}}℃</div>
      <!-- <div class="mapname"> -->
        <!-- <div class="upnum">风向：{{now.wind_dir}}</div> -->
        <div class="mapname">风速：{{now.wind_spd}}公里/小时</div>
        <div class="mapname">空气湿度：{{now.hum}}%</div>
      <!-- </div> -->
    <!-- <div>{{now}}</div> -->
  </div>
</template>

<script>
import { getStore, setStore } from "@/utils/index.js";

export default {
  data() {
    return {
         city: getStore("city").name || "北京",
         now:''
    };
  },
  methods: {
    getWeatherDedail(city) {
      //   const me = [];
      //   this.axios
      //     .get("https://free-api.heweather.net/s6/weather/forecast", {
      //       params: {
      //         location: this.city,
      //         key: "54fe7c4881b942b9b2b32ae14bd7ec54"
      //       }
      //     })
      //     .then(data => {
      //       console.log(data);
      //       // console.log(data.HeWeather6[0].daily_forecast);
      //       data.HeWeather6[0].daily_forecast.forEach(item => {
      //         this.opinionData.push(item.tmp_max);
      //         this.opinion.push(item.date.substr(5));
      //       });
      //       this.drawLine();
      //     });
      this.axios
        .get(`https://free-api.heweather.net/s6/weather/now`, {
          params: {
            location: this.city,
            key: "54fe7c4881b942b9b2b32ae14bd7ec54"
          }
        })
        .then(data => {
          console.log(data);
          this.now = data.HeWeather6[0].now;
        });
    }
  },
  created() {
    this.getWeatherDedail(this.city);
  }
};
</script>
<style lang="scss" scoped>
.bbox {
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
.mapname {
  font-size: 14px;
  padding: 6px;
}
</style>