<template>
  <div class='food'>
    美食
    <el-button type="primary" round @click="toDetailPage()">美食详情</el-button>
  </div>
</template>

<script>
export default {
  name: "food",
  methods: {
    toDetailPage() {
      this.$router.push({
        name: 'food_detail'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/views/food.scss';
</style>
