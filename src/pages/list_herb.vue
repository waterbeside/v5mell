<template>
  <div class="g-mainer p-list-herb">
    <div  class="g-head-banner " >
     <div class="container-fluid d-flex ">

         <div class="search-form-wrap ">
           <form @submit="submitForm">
               <input type="search" placeholder="Search for..." class="form-control form-control-sm form-control-icon" ref="j-search-input" @focus="focusInputAction"  v-model='keyword'>
               <i class="fa fa-times-circle" @click="clearInput"></i>
               </form>
         </div>



     </div>
    </div>
    <div style="margin-top:80px"> </div>
    <section class="me-st-box" v-show="showHistory">
      <div class="heading h7">历史查询</div>
      <div class="body">
        <ul class="me-search-history" >
          <li v-for="item in history_list" @click="submitHistory">{{item}}</li>
        </ul>
        <div class="me-btn-wrap">
          <a class="btn btn-secondary " @click="clearHistory">清除历史记录</a>
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
      showHistory : 0,
      history_list: [],
      keyword :''
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
      }
      this.showHistory = 1;
    },
    submitKeyword (keyword) {
      this.addHistory(keyword)
      this.$router.push({name: 'list_result',params: { keyword: keyword }});
      this.showHistory = 0;
    },
    submitForm () {
      let $searchInput = this.$refs['j-search-input'];
      var keyword = $searchInput.value;
      if(keyword){
        $searchInput.blur();
        this.submitKeyword(keyword);
      }
    },
    submitHistory (event) {
      var keyword = event.currentTarget.innerText
      this.keyword = keyword;
      this.submitKeyword(keyword);
    },
    addHistory: function (data) {
      var that = this;
      var hisDataString = localStorage.getItem('herb_history') || '';

      var hisData = hisDataString == '' ? [] : JSON.parse(hisDataString);
      var hisData_temp = hisData;

      if (hisData && hisData.length > 0) {
        hisData.map(function (item, index) {
          if (item == data || index > 15 ) {
            hisData_temp.splice(index, 1);
          }
        });
        hisData_temp.unshift(data);
      }else{
        hisData_temp = [data]
      }
      this.history_list = hisData_temp;
      var storageData = JSON.stringify(hisData_temp) ;
      localStorage.setItem('herb_history',storageData);

    },
    clearHistory : function(){
      this.history_list = [];
      localStorage.setItem('herb_history',null);
    }
  },
  mounted () {

  },
  created () {
    var data = JSON.parse(localStorage.getItem('herb_history'));
    this.history_list = data;
  },
  activated (){
    if(this.$route.name === "list_herb"){
      this.showHistory = 1;
      this.$refs['j-search-input'].focus();
    }else{
      this.showHistory = 0;
    }
  }
}
</script>
