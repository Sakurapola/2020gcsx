<template>
  <div class='index'>
    <h1>国 庆 去 哪 儿 ？</h1>
    <el-input placeholder="请输入城市名..." v-model="city" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="toCityPage"></el-button>
    </el-input>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      city: ''
    }
  },
  methods: {
    toCityPage() {
      this.$router.push({
        name: 'city',
        params: { city: this.city }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .index {
    position: absolute;
    z-index: 100000;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 60px;
    font-weight: bolder;
    color: #fff;
    padding-top: 200px;
    background-image: url('~@/assets/image/bg-img.jpg');
    background-size: 100% 100%;

    .el-input {
      width: 40%;
      margin-top: 50px;
    }
  }
</style>
