<template>
  <nav class='navbar'>
    <ul class='ul'>
      <li class='ul-li'>
        个人展示
        <ul class='ul-li-ul'>
          <li class='ul-li-ul-li' @click="toPesonalPage('long')">胡健龙</li>
          <li class='ul-li-ul-li' @click="toPesonalPage('feng')">袁乾峰</li>
          <li class='ul-li-ul-li' @click="toPesonalPage('xingyu')">陈星羽</li>
          <li class='ul-li-ul-li' @click="toPesonalPage('yun')">张凤云</li>
          <li class='ul-li-ul-li' @click="toPesonalPage('caiyu')">李才宇</li>
        </ul>
      </li>
      <li class='ul-li'>
        可视化
        <ul class='ul-li-ul'>
          <li class='ul-li-ul-li' @click="toPage('sort')">排序算法</li>
          <li class='ul-li-ul-li' @click="openPage('hanota')">汉诺塔</li>
          <li class='ul-li-ul-li' @click="toPage('stack-queue')">栈 / 队列</li>
          <li class='ul-li-ul-li' @click="toPage('linklist')">链表</li>
        </ul>
      </li>
      <li class='ul-li' @click="toPage('epidemic')">疫情大数据</li>
      <div class='btn' @click="toPage('index')">首页</div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
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
