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
          景点综合得分：<span>4.9</span>
        </div>
        <div class="notice">
          <span>* </span>当前景点好评率较低，建议景区优化服务
        </div>
      </div>
    </section>
    <section class="section-b">
      <div class="scene-info">
        <div class="image-info">
          <img src="https://www.wulihub.com.cn/go/JP3ZDM/images/%E6%90%9C%E7%B4%A2%E6%99%AF%E7%82%B9/u78.png" alt="scene">
          <div class="scene-city">
            <div class="scene">八达岭长城</div>
            <div class="city">在<span>北京</span></div>
          </div>
        </div>
        <div class="introduce">“一定要看那块“不到长城非好汉”碑”</div>
        <div class="open-time">开放时间：06:30-19:00</div>
      </div>
      <div class="scene-praise-rate">
        <div class="title">景点好评率</div>
        
      </div>
      <div class="fare-rank">
        <div class="title">八达岭长城在北京的票价排行</div>
        
      </div>
    </section>
  </div>
</template>

<script>
import VueAMap from 'vue-amap'
let amapManager = new VueAMap.AMapManager()

export default {
  name: "scene",
  data() {
    return {
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
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
      }]
    }
  },
  methods: {
    toDetailPage() {
      this.$router.push({
        name: 'city_detail'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/views/scene.scss';
</style>
