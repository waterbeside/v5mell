<template>
<div class="all">
  <block-header @goTop="goTop"></block-header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import blockHeader from './pages/block_header'
export default {
  name: 'app',
  components: {
    blockHeader
  },
  methods: {
    goTop() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
@import "assets/css/font-awesome.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/app.min.css";
</style>
