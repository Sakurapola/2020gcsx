<template>
  <div class="epidemic">
    <div class='main'>
      <div class="content">
        <div class="title">疫情大数据</div>
        <dl>
          <dt>2020/1/20 ~ 2020/6/14</dt>
          <dd>累计确诊 / 当前确诊 —— 演进动画</dd>
        </dl>
      </div>
    </div>
    <div class='btn'>
      <button @click="goback">返   回</button>
    </div>
    <section>
      <div class="echarts1">
        <div id="myChartChina1" :style="{width: '60%', height: '1000px'}"></div>
        <div class="section">
          <div class="title">各省市累计病例</div>
          <div class="date" id='date1'>2020/6/14</div>
          <el-button type="primary" round @click="start1" v-if="btn1">开始演示</el-button>
        </div>
      </div>
      <div class="echarts1">
        <div id="myChartChina2" :style="{width: '60%', height: '1000px'}"></div>
        <div class="section">
          <div class="title">各省市现有病例</div>
          <div class="date" id='date2'>2020/6/14</div>
          <el-button type="primary" round @click="start2" v-if="btn2">开始演示</el-button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { init1, execute1 } from '@/assets/epidemic/js/1'
import { init2, execute2 } from '@/assets/epidemic/js/2'

export default {
  name: "ChinaEcharts",
  data() {
    return {
      btn1: true,
      btn2: true
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    start1() {
      this.btn1 = false
      execute1()
    },
    start2() {
      this.btn2 = false
      execute2()
    }
  },
  mounted() {
    init1()
    init2()
  }
}
</script>

<style scoped lang="scss">
  @import '~@/assets/scss/views/epidemic.scss';
</style>