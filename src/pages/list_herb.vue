<template>
  <div class="g-mainer p-list-herb">
    <div  class="g-head-banner " >
     <div class="container-fluid d-flex ">
         <div class="search-form-wrap ">
               <input type="search" placeholder="Search for..." class="form-control form-control-sm form-control-icon" ref="j-search-input" @focus="focusInputAction"  v-model='keyword'>
               <i class="fa fa-times-circle" ></i>

         </div>

     </div>
    </div>

    <div style="margin-top:80px"> </div>
    <div ref="j-herblist-scrollBox" class="me-scrollBox"   v-bind:style="{height:scrollBox_height+'px'}">

      <section class="me-st-box ">
        <div class="heading h7">结果</div>
        <div class="body">
          <ul class="me-list-herb">
            <li v-for="item in result_list">
              <router-link :to="{name:'show_herb',params: { id: item.id }}">
                <h5 class="title">{{item.title}}
                  <herb-tags type='hot_cold' :num="item.warm_cold"></herb-tags>
                  <herb-tags type='odor' :num="item.odor"></herb-tags>

                </h5>
                <div class="latin">{{item.latin_name}}</div>
                <div class="summary">{{item.description}}</div>
              </router-link>
            </li>


          </ul>

          <div class="me-loadMore-btn" @click="loadMore">
            <loading :hideLoading="hideLoading"></loading>
            {{text_showMore}}
          </div>

        </div>
      </section>
    </div>

  </div>
</template>


<script>
import config from '../setting/config'
import herbTags from '../components/herbTags'
import loading from '../components/loading'
export default {
  data () {
    return {
      result_list : [],
      total:0,
      keyword:'',
      page:1,
      pagecount:0,
      text_showMore:'加载更多',
      hideLoading:1,
      scrollBox_height:300,
      scrollBox_top:0,
    }
  },
  components:{
    herbTags,loading
  },
  methods:{
    init () { //初始化本页数据
      this.total =0;
      this.page =1;
      this.pagecount = 0;
      this.keyword = this.$route.params.keyword;
      this.scrollBox_top = 0;
      this.getListDatas(1)
    },
    getListDatas (page) {
      var that = this;
      var keyword = this.keyword;
      this.hideLoading = 0;

      this.$ajax.get(config.api.herb_result,{params:{keyword,page}}).then(function(response){
        that.hideLoading = 1;
        if(page==1){
          if(response.data.datas.length == 0){
            that.text_showMore = "檢得 0 條數據。"
          }else{
              var pagecount = Math.ceil(response.data.total / response.data.pagesize);
              that.result_list = response.data.datas;
              that.page = response.data.page;
              that.total = response.data.total;
              that.pagecount = pagecount;
              that.text_showMore = pagecount == 1 ? "全部加載完畢，已無更多": "加載更多";
          }
        }else{
          var list = that.result_list;
          list = list.concat(response.data.datas);
          that.page = page;
          that.result_list = list;
        }

      }, function(error){
        var that = this;
        that.text_showMore = "加載失敗，請檢查您的網絡";
      })
    },
    focusInputAction () {
          this.$router.push({name: 'list_herb_search'})
    },
    loadMore () { //执行加载更多
      if(this.total == 0 ){
        return false;
      }
      if (this.pagecount > this.page && this.hideLoading){
        var page = parseInt(this.page) + 1 ;
        this.getListDatas(page);
      }else{
        this.text_showMore = "全部加载完毕，已无更多";
      }
    },
    onScroll () { //滚动加载更多
      var $scrollBox = this.$refs['j-herblist-scrollBox'];
      //var scrollTop = document.body.scrollTop ? document.body.scrollTop : (document.documentElement.scrollTop ? document.documentElement.scrollTop : window.pageYOffset);
      var scrollTop = $scrollBox.scrollTop;
      this.scrollBox_top = scrollTop;
      if(scrollTop + this.scrollBox_height >= $scrollBox.scrollHeight) {
        this.loadMore();
      }
    }
  },
  mounted () {
    this.scrollBox_height =  window.innerHeight - 80 ; //设定scrollBox高度
    this.init();
  },
  created () {
    this.$nextTick(function () {
     this.$refs['j-herblist-scrollBox'].addEventListener('scroll', this.onScroll); //监听滚动加载更多
    })
  },
  activated (){
    this.$store.commit('resetTitle');
    this.$store.commit('setGo',-1);
    if(this.keyword != this.$route.params.keyword){ //如果两次关键词不一置，重新初始化本页
      this.result_list = [];
      this.$refs['j-herblist-scrollBox'].scrollTop = 0
      this.init();
    }else{
      this.$refs['j-herblist-scrollBox'].scrollTop = this.scrollBox_top;
    }
  }
}
</script>
<style scope>
.me-scrollBox { overflow-y: auto;}
</style>
