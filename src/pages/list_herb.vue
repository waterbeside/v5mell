<template>
  <div class="g-mainer p-list-herb">
    <div  class="g-head-banner " >
     <div class="container-fluid d-flex ">

         <div class="search-form-wrap ">
           <form @submit="submitForm">
               <input type="search" placeholder="Search for..." class="form-control form-control-sm form-control-icon" ref="j-search-input" @focus="focusInputAction">
               <i class="fa fa-times-circle" @click="clearInput"></i>
               </form>
         </div>



     </div>
    </div>
    <div style="margin-top:80px"> </div>
    <section class="me-st-box" v-show="showHistory">
      <div class="heading h7">历史查询</div>
      <div class="body">
        <ul class="me-search-history">
          <li>紫苏</li>
          <li>测试</li>
        </ul>
        <div class="me-btn-wrap">
          <a class="btn btn-secondary ">清除历史记录</a>
        </div>
      </div>
    </section>

  <router-view></router-view>





  </div>
</template>

<script>


export default {
  data () {
    return {
      showHistory : 0
    }
  },

  methods: {
    clearInput () {
      let $searchInput = this.$refs['j-search-input'];
      $searchInput.value = '';
    },
    focusInputAction () {
      if(this.$route.name === "list_result"){
          this.$router.push({name: 'list_herb'})
          this.showHistory = 1;
      }
    },
    submitForm () {
      let $searchInput = this.$refs['j-search-input'];
      var keyword = $searchInput.value;
      if(keyword){
        $searchInput.blur();
        this.$router.push({name: 'list_result',params: { keyword: keyword }});
        this.showHistory = 0;
      }

    }
  },
  mounted () {
    if(this.$route.name === "list_herb"){
      this.showHistory = 1;
      this.$refs['j-search-input'].focus();
    }else{
      this.showHistory = 0;
    }

  }
}
</script>
