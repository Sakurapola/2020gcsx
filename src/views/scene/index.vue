<template>
  <div class='scene'>
    景点
    <el-button type="primary" round @click="toDetailPage()">景点详情</el-button>
  </div>
</template>

<script>

export default {
  name: "scene",
  data() {
    return {
      toDetailPage() {
        this.$router.push({
          name: 'scene_detail'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/assets/scss/views/scene.scss';
</style>
