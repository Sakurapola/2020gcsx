<template>
  <div class='city'>
    <section class="section-a">
      <Navbar />
      <div class="city-info">
        <div class="score">
          城市出游综合得分：<span>4.9</span>
        </div>
        <div class="notice">
          <span>* </span>预计十一期间该地区游客较多，可能影响您的出行体验
        </div>
      </div>
    </section>
    <section class="section-b">
      <div class="city-name">北京</div>
      <div class="words-cloud">
        
      </div>
      <div class="desc">

      </div>
      <div class="hot-scenes">
        <div class="title">热门景点</div>
        
      </div>
      <div class="nav">去看看有什么美食&gt;&gt;</div>
    </section>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar'

export default {
  name: "city",
  components: {
    Navbar
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
  @import '../../assets/scss/views/city.scss';
</style>
