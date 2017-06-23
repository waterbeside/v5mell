<template>
  <div class="g-mainer p-list-herb">
    <div  class="g-head-banner " >
     <div class="container-fluid d-flex ">
         <div class="search-form-wrap ">
           <form @submit="submitForm">
               <input type="search" placeholder="請輸入植物名.." class="form-control form-control-sm form-control-icon" ref="j-search-input"  v-model='keyword'>
               <i class="fa fa-times-circle" @click="clearInput"></i>
               </form>
         </div>
     </div>
    </div>

    <section class="me-st-box">
      <div style="height:80px"> </div>
      <div class="heading h7" >历史查询</div>
      <div class="body">
        <ul class="me-search-history" >
          <li v-for="item in history_list" @click="submitHistory">{{item}}</li>
        </ul>
        <div class="me-btn-wrap">
          <a class="btn btn-secondary " @click="clearHistory">清除历史记录</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      history_list: [],
      keyword :''
    }
  },
  methods: {
    clearInput () { //清除输入框内容
      let $searchInput = this.$refs['j-search-input'];
      $searchInput.value = '';
    },
    submitKeyword (keyword) { //提交關鍵詞並跳轉
      this.addHistory(keyword)
      this.$router.push({name: 'list_herb',params: { keyword: keyword }});
    },
    submitForm () {  //處理輸入框提交
      let $searchInput = this.$refs['j-search-input'];
      var keyword = $searchInput.value;
      if(keyword){
        $searchInput.blur();
        this.submitKeyword(keyword);
      }
    },
    submitHistory (event) { //點擊歷史關鍵詞之動作
      var keyword = event.currentTarget.innerText
      this.keyword = keyword;
      this.submitKeyword(keyword);
    },
    addHistory: function (data) { //添加歷史記錄
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
    var data = JSON.parse(localStorage.getItem('herb_history')); //從本地緩存中取得歷史記錄并解析成數組對象
    this.history_list = data;
  },
  activated (){
    this.$refs['j-search-input'].focus();
    this.$store.commit('resetTitle');
    this.$store.commit('setGo',{name:'home'});
  }
}
</script>
