<template>
  <nav class='navbar'>
    <ul class="navs">
      <li :class="{active: activeStatus === 1}" @click="toPage('city'); activeStatus = 1">城市</li>
      <li :class="{active: activeStatus === 2}" @click="toPage('scene'); activeStatus = 2">景点</li>
      <li :class="{active: activeStatus === 3}" @click="toPage('area'); activeStatus = 3">区域</li>
    </ul>
    <div class="search">
      <el-input 
        v-if="activeStatus === 2"
        placeholder="请输入您想去的景点......" 
        v-model="scene" 
        class="input-with-select"
        @keyup.enter.native="queryScene"
      >
        <el-button slot="append" icon="el-icon-search"  @click="queryScene"></el-button>
      </el-input>
      <el-input 
        v-else
        placeholder="请输入您想去的城市......" 
        v-model="city" 
        class="input-with-select"
        @keyup.enter.native="queryCity"
      >
        <el-button slot="append" icon="el-icon-search"  @click="queryCity"></el-button>
      </el-input>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        activeStatus: 0,
        city: '',
        scene: ''
      }
    },
    methods: {
      toPage(name) {
        this.$router.push({
          name
        })
      },
      queryCity() {
        localStorage.setItem('city', this.city)
        location.reload()
      },
      queryScene() {
        localStorage.setItem('scene', this.scene)
        location.reload()
      }
    },
    mounted() {
      if(this.$route.name === 'scene') {
        this.activeStatus = 2
      } else if (this.$route.name === 'area') {
        this.activeStatus = 3
      } else {
        this.activeStatus = 1
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/assets/scss/common/navbar.scss';
</style>
