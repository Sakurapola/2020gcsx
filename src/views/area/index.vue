<template>
  <div class='area'>
    <div class="heat-map">

    </div>
    <div class="operates">
      <el-button type="primary" @click="modal = 1">查看城市热度</el-button>
      <el-button type="primary" @click="modal = 2">主要景区热度</el-button>
      <el-button type="primary" @click="modal = 3">筛选5A级景区</el-button>
    </div>
    <div class="modal modal-city" v-if="modal === 1">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">旅游城市热度排行</div>
      
    </div>
    <div class="modal modal-scene" v-if="modal === 2">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">景点热度排行</div>
      
    </div>
    <div class="modal modal-5A" v-if="modal === 3">
      <div class="close" @click="modal = 0">+</div>
      <div class="title">各城市5A/4A景区数量</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "area",
  data() {
    return {
      modal: 0,
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
  @import '../../assets/scss/views/area.scss';
</style>
