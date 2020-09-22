<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/common/navbar'

export default {
  name: "app",
  components: {
    Navbar
  }
}
</script>