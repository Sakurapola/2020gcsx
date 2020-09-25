<template>
  <div class='area'>
    <div class="placeholder"></div>
    <div class="heat-map">
      <ve-heatmap 
      :data="chartData" 
      :settings="chartSettings" 
      pointSize="30"
      style="width: auto; height: 800px; position: relative;"
      ></ve-heatmap>
    </div>
    <div class="operates">
      <el-button type="primary" @click="modal = 1">查看城市热度</el-button>
      <el-button type="primary" @click="modal = 2">热门城市景区概览</el-button>
      <el-button type="primary" @click="modal = 3">筛选3-5A级景区</el-button>
    </div>
    <div class="modal modal-city" v-if="modal === 1">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">旅游城市热度排行</div>
      <ve-bar :data="chartData3"></ve-bar>
    </div>
    <div class="modal modal-scene" v-if="modal === 2">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">景点热度排行</div>
      <ve-radar :data="chartData2"></ve-radar>
    </div>
    <div class="modal modal-5A" v-if="modal === 3">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">各城市3-5A景区数量</div>
      <ve-bar :data="chartData1"></ve-bar>
    </div>
  </div>
</template>

<script>
import { cityScenes } from '@/assets/js/data'
import { getHotList } from '@/api'

export default {
  name: "area",
  data() {
    this.chartSettings = {
      position: 'china',
      type: 'map',
      geo: {
        label: {
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#fff',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#f00'
          }
        }
      }
    }
    return {
      modal: 0,
      chartData: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          { 'lat': 115.892151, 'lng': 28.676493, '人数': 10000 },
          { 'lat': 117.000923, 'lng': 36.675807, '人数': 4000 },
          { 'lat': 113.665412, 'lng': 34.757975, '人数': 8000 },
          { 'lat': 114.298572, 'lng': 30.584355, '人数': 2000 },
          { 'lat': 112.982279, 'lng': 28.19409, '人数': 1000 },
          { 'lat': 113.280637, 'lng': 23.125178, '人数': 3000 },
          { 'lat': 110.33119, 'lng': 20.031971, '人数': 8000 },
          { 'lat': 104.065735, 'lng': 30.659462, '人数': 7000 },
          { 'lat': 108.948024, 'lng': 34.263161, '人数': 3000 },
          { 'lat': 103.823557, 'lng': 36.058039, '人数': 5000 }
        ]
      },
      chartData1: {
        columns: ['city', 'A3', 'A4', 'A5'],
        rows: cityScenes.reverse()
      },
      chartData2: {
        columns: ['type', '北京', '上海', '杭州','重庆','厦门'],
        rows: [
          { 'type': '3A', '北京': 1393, '上海': 1093, '杭州': 678,'重庆':893,'厦门':298 },
          { 'type': '4A', '北京': 1093, '上海': 793, '杭州': 578,'重庆':942,'厦门': 485},
          { 'type': '5A', '北京': 893, '上海': 693, '杭州': 378,'重庆':547,'厦门': 158},
          { 'type': '热门景区数', '北京': 893, '上海': 693, '杭州': 378,'重庆':1054,'厦门': 458 },
        ]
      },
      chartData3: {
        columns: ['name', 'heat'],
        rows: []
      }
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
    this.chartData3.rows = (await getHotList({
      type: 'city',
      cityName: 'regional'
    })).data.data.reverse().map(item => {
      return {
        name: item.name,
        heat: (item.heat - 0.7) * 10,
      }
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/scss/views/area.scss';
</style>
