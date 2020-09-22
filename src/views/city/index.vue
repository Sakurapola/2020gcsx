<template>
  <div class='city'>
    <section class="section-a">
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
        <p>北京是一座有着三千多年历史的古都，在不同的朝代有着不同的称谓，大致算起来有二十多个别称。<br/>燕都，据史书记载...</p>
      </div>
      <div class="hot-scenes">
        <div class="title">热门景点</div>
        
      </div>
      <div class="nav">去看看有什么美食&gt;&gt;</div>
    </section>
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
