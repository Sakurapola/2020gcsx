<template>
  <div class='city'>
    城市
    <el-button type="primary" round @click="toDetailPage()">城市详情</el-button>
  </div>
</template>

<script>
export default {
  name: "city",
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
  @import '../../assets/scss/views/city.scss';
</style>
