<template>
  <div class='city'>
    <section class="section-a">
      <el-amap 
        ref="map" 
        vid="amapDemo" 
        :amap-manager="amapManager" 
        :center="center" 
        :zoom="zoom" 
        :plugin="plugin" 
        :events="events" 
        class="amap-demo"
      >
      </el-amap>
      <div class="city-info">
        <div class="score">
          城市出游综合得分：<span>{{(cityInfo.score * 100).toString().slice(0, 4)}}</span>🤡
        </div>
        <div class="notice">
          <span>* </span>{{cityInfo.note}}
        </div>
      </div>
    </section>
    <section class="section-b">
      <div class="city-name">{{cityInfo.name}}</div>
      <div class="words-cloud">
        <ve-wordcloud 
          :data="chartData" 
          shape="star"
        >
        </ve-wordcloud>
      </div>
      <div class="desc">
        <div class="title">城市简介</div>
        <p>{{cityInfo.desc}}</p>
      </div>
      <div class="hot-scenes">
        <div class="title">热门景点</div>
        <ve-bar :data="barChartData" :settings="chartSettings"></ve-bar>
      </div>
      <div class="nav" @click="toFoodPage">去看看有什么美食&gt;&gt;</div>
    </section>
  </div>
</template>

<script>
import VueAMap from 'vue-amap'

import { getCityDetail, getHotList } from '@/api'
import { getLocationByCityName } from '@/api/map-api'

export default {
  name: "city",
  data() {
    this.chartSettings = {
      metrics: ['heat'],
      dataOrder: {
        label: 'heat',
        order: 'desc'
      }
    }
    return {
      amapManager: null,
      zoom: 10,
      center: [116.512885, 39.84746],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          console.log(e)
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(o) {
            console.log(o)
          }
        }
      }],
      chartData: {
        columns: ['word', 'count'],
        rows: []
      },
      barChartData: {
        columns: ['name', 'heat'],
        rows: []
      },
      cityInfo: {}
    }
  },
  methods: {
    toFoodPage() {
      this.$router.push({
        name: 'food'
      })
    }
  },
  async created() {
    this.cityInfo = (await getCityDetail({ cityName: this.$route.params.city || '北京' })).data
    this.chartData.rows = this.cityInfo.hotwords.map(item => {
      return {
        word: item[0],
        count: item[1]
      }
    })

    this.barChartData.rows = (await getHotList({ 
      type: 'scene',
      cityName: this.$route.params.city || '北京'
    })).data.data
  },
  mounted() {
    this.center = [116.512885, 39.84746]
    this.amapManager = new VueAMap.AMapManager()
  }
  // async created() {
  //   let city = this.$route.params.city || '北京'
  //   const res = await getLocationByCityName(city)
  //   const location = res.data.result.location
  //   this.center.push(location.lng, location.lat)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/views/city.scss';
</style>
