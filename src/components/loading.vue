<template>
  <div class="me-loading-center" :class="{'me-loading-hiden': hideLoading}">
    <i class="fa fa-spinner fa-spin" > </i>
  </div>
</template>

<script>
export default {
  props: {
    hideLoading: {
      // default: true
    }
  },
}
</script>

<style >
.me-loading-center {
  text-align: center;
  margin: 10px auto;
  color: #929292;
}
.me-loading-hiden {
  display: none;
}
</style>
