<template lang="html">
  <header class="me-topbar navbar navbar-toggleable-sm navbar-inverse  bg-inverse fixed-top" @dblclick="goTop">
    <div class="me-navbar-header">
      <a class="me-goback" @click="goBack" v-show="showGoBack" ><i class="fa fa-angle-left"></i></a><div class="navbar-brand ">{{title}}</div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      defaultTitle:'5MELL'
    }
  },
  computed: {
    title () {
      return this.$store.state.title ? this.$store.state.title : this.defaultTitle;
    },
    showGoBack () {
      return this.$store.state.headGo == 0 ? false : true ;
    }
  },
  methods : {
    goTop () {
      this.$emit('goTop');
    },
    goBack () {
      let goWhere = this.$store.state.headGo;
      if(typeof(goWhere)=='number'){
        this.$router.go(goWhere);
      }else{
        this.$router.push(goWhere);
      }

    }
  },

}
</script>
