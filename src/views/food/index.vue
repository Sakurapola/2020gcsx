<template>
  <div class='food'>
    <section class="section-a">
      <div class="words-cloud">
        <div class="title">热门城市美食数量</div>
        
      </div>
      <div class="hot-scenes">
        <div class="title">北京的美食</div>
        
      </div>
    </section>
    <section class="section-b">
      <ul class="foods">
        <li class="food-item" v-for="item in 10" :key="item">
          <el-image
          src="https://www.wulihub.com.cn/go/JP3ZDM/images/%E6%90%9C%E7%B4%A2%E7%BE%8E%E9%A3%9F/u127.png"
          fit="cover"></el-image>
          <div class="content">
            <div class="title-city">
              <div class="title">北京烤鸭</div>
              <div class="city">去 <span @click="toCityPage">北京</span> 吃</div>
            </div>
            <div class="para">烤鸭是在世界上都享有盛名的北京知名菜式，只选用优质北京肉鸭，用带有天然香气的木材烤制，鸭皮色泽透润，肉质肥而不腻，外焦里嫩，令人入口难忘，口齿留香。细分的北京烤鸭又分为挂炉烤鸭和焖炉烤鸭，如今较多的店采用挂炉烤鸭制法。</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "food",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/scss/views/food.scss';
</style>
