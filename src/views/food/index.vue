<template>
  <div class='food'>
    <section class="section-a">
      <div class="words-cloud">
        <div class="title">城市美食好评率</div>
        <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
      </div>
      <div class="hot-scenes">
        <div class="title">城市热门美食</div>
        <ve-bar :data="chartData1"></ve-bar>
      </div>
    </section>
    <section class="section-b">
      <ul class="foods">
        <li class="food-item" v-for="item in foodList" :key="item.fname">
          <el-image
          :src="item.fimg"
          fit="cover"></el-image>
          <div class="content">
            <div class="title-city">
              <div class="title">{{item.fname}}</div>
              <div class="city">去 <span @click="toCityPage">北京</span> 吃</div>
            </div>
            <div class="para">{{item.fdesc}}</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { getFoods } from '@/api'

export default {
  name: "food",
  data () {
    this.chartSettings = {
      roseType: 'radius'
    }
    return {
      chartData: {
        columns: ['type', 'rate'],
        rows: [
          { 'type': '好评', 'rate': 0.632 },
          { 'type': '中评', 'rate': 0.213 },
          { 'type': '差评', 'rate': 0.155 },
        ]
      },
      chartData1: {
        columns: ['name', 'hot'],
        rows: []
      },
      foodList: []
    }
  },
  methods: {
    toCityPage() {
      this.$router.push({
        name: 'city',
        params: { city: this.city }
      })
    }
  },
  async mounted() {
    this.foodList = (await getFoods({
      cityName: localStorage.getItem('city'),
      hot: true
    })).data.foodlist

    this.chartData1.rows = (this.foodList.map(item => {
      return {
        name: item.fname,
        hot: item.fhot
      }
    })).reverse()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/views/food.scss';
</style>
