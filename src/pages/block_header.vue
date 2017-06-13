<template lang="html">
  <header class="me-topbar navbar navbar-toggleable-sm navbar-inverse  bg-inverse fixed-top" @dblclick="goTop">
    <div class="me-navbar-header">
      <router-link :to="{path:'/'}" class="navbar-brand ">5MELL</router-link>
    </div>
  </header>
</template>

<script>
export default {
  methods : {
    goTop () {
      this.$emit('goTop');
    }
  }
}
</script>
