<template>
  <div id="app">
    <el-container>
      <el-header>
        <ul class="navs">
          <li :class="{active: activeStatus === 1}" @click="toPage('city'); activeStatus = 1">城市</li>
          <li :class="{active: activeStatus === 2}" @click="toPage('scene'); activeStatus = 2">景点</li>
          <li :class="{active: activeStatus === 3}" @click="toPage('food'); activeStatus = 3">美食</li>
        </ul>
        <div class="search">
          <el-input 
            placeholder="请输入您想去的城市......" 
            v-model="input" 
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search"  @click="toCityDetailPage()"></el-button>
          </el-input>
        </div>
      </el-header>
      <el-main>
        <!-- 路由 -->
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavBar from './components/common/navbar'

  export default {
    data() {
      return {
        input: '',
        activeStatus: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      toPage(param) {
        this.$router.push({
          name: param
        })
      },
      toCityDetailPage() {
        this.$router.push({
          name: 'city_detail'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
}

#app {

  .el-container {
    min-height: 100vh;
    // background-image: url('~@/assets/image/bg.png'),url('~@/assets/image/bg-box.png');
    background-repeat: no-repeat, repeat;
    background-position: 0 0, 0 100%;
    background-size: 100% 90vh, 100%;

    .el-header {
      min-height: 120px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // background-color: #b190fd;

      .navs {
        display: flex;


        li {
          width: 90px;
          height: 40px;
          box-sizing: border-box;
          border-left: 1px solid rgb(167, 166, 252);
          border-top: 1px solid rgb(167, 166, 252);
          border-bottom: 1px solid rgb(167, 166, 252);
          text-align: center;
          line-height: 40px;
          cursor: pointer;
        }

        li:first-child {
          border-radius: 7px 0 0 7px;
        }

        li:last-child {
          border-radius: 0 7px 7px 0;
          border-right: 1px solid rgb(167, 166, 252);
        }
      }

      .search {
        width: 500px;
      }
    }

    .el-main {
      padding: 0;
      background-image: url('C:/Users/79352/Desktop/final-project/src/assets/image/bg.jpg');
      background-size: 100% 100%;
    }
  }
}

.active {
  color: #fff;
  background-color: rgb(130, 128, 255);
}
</style>
