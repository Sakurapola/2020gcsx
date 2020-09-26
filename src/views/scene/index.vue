<template>
  <div class='scene'>
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
          景点综合得分：<span>{{(sceneDetail.heat * 100).toString().slice(0, 4)}}</span>🤡
        </div>
        <div class="notice">
          <span>* </span>{{sceneDetail.note.slice(0, 50)}}
        </div>
      </div>
    </section>
    <section class="section-b">
      <div class="scene-info">
        <div class="image-info">
          <img :src="sceneDetail.img" alt="scene">
          <div class="scene-city">
            <div class="scene">{{sceneDetail.name}}</div>
            <div class="city">在<span>{{sceneDetail.city}}</span></div>
          </div>
        </div>
        <div class="introduce">
          <div class="title">简介</div>
          {{sceneDetail.longdesc}}
        </div>
        <div class="open-time">开放时间：06:30-19:00</div>
      </div>
      <div class="scene-praise-rate">
        <div class="title">景点好评率</div>
        <ve-gauge :data="circleChartData" :settings="chartSettings1"></ve-gauge>
      </div>
      <div class="fare-rank">
        <div class="title">城市热门景点票价排行</div>
        <ve-bar :data="barChartData" :settings="chartSettings"></ve-bar>
      </div>
    </section>
  </div>
</template>

<script>
import VueAMap from 'vue-amap'

import { sceneRankList } from '@/assets/js/data'
import { getSceneDetail } from '@/api'

export default {
  name: "scene",
  data() {
    this.chartSettings = {
      metrics: ['price'],
      dataOrder: {
        label: 'price',
        order: 'desc'
      }
    }
    this.chartSettings1 = {
      dataType: {
        '占比': 'percent'
      },
      seriesMap: {
        '占比': {
          min: 0,
          max: 1
        }
      }
    }
    return {
      amapManager: null,
      zoom: 12,
      center: [],
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
          alert('map clicked')
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
      circleChartData: {
        columns: ['type', 'value'],
        rows: [
          { 
            type: '占比', 
            value: 0
          },
        ]
      },
      barChartData: {
        columns: ['scene', 'price'],
        rows: []
      },
      sceneDetail: {}
    }
  },
  methods: {
    toDetailPage() {
      this.$router.push({
        name: 'city_detail'
      })
    }
  },
  async mounted() {
    this.barChartData.rows = sceneRankList[localStorage.getItem('city') || '北京']

    this.sceneDetail = (await getSceneDetail({
      sceneName: localStorage.getItem('scene') || '故宫',
      cityName: localStorage.getItem('city') || '北京'
    })).data

    this.circleChartData.rows[0]['value'] = this.sceneDetail.hotwords[2][1] / (this.sceneDetail.hotwords[0][1] + this.sceneDetail.hotwords[1][1] + this.sceneDetail.hotwords[2][1])

    this.center = [121.59996, 31.197646]
    this.amapManager = new VueAMap.AMapManager()
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/views/scene.scss';
</style>
