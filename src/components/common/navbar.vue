<template>
  <nav class='navbar'>
    <ul class="navs">
      <li :class="{active: activeStatus === 1}" @click="toPage('city'); activeStatus = 1">城市</li>
      <li :class="{active: activeStatus === 2}" @click="toPage('scene'); activeStatus = 2">景点</li>
      <li :class="{active: activeStatus === 3}" @click="toPage('food'); activeStatus = 3">区域</li>
    </ul>
    <div class="search">
      <el-input 
        placeholder="请输入您想去的城市......" 
        v-model="city" 
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"  @click="toCityDetailPage()"></el-button>
      </el-input>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        activeStatus: 1,
        city: ''
      }
    },
    methods: {
      toPesonalPage (name) {
        this.$router.push({
          path: `/personal/${name}`
        })
        // this.$store.dispatch('setRouterState', name)
      },
      toPage(name) {
        this.$router.push({
          name
        })
      },
      openPage(param) {
        location.href =`http://fengblog.xyz/experiments/${param}.html`
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/assets/scss/common/navbar.scss';
</style>
