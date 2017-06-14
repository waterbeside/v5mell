<template lang="html">
  <section class="me-st-box ">
    <div class="heading h7">结果</div>
    <div class="body">
      <ul class="me-list-herb">
        <li v-for="item in result_list">
          <h5 class="title">{{item.title}}
            <herb-tags type='hot_cold' :num="item.warm_cold"></herb-tags>
            <herb-tags type='odor' :num="item.odor"></herb-tags>

          </h5>
          <div class="latin">{{item.latin_name}}</div>
          <div class="summary">{{item.description}}</div>
        </li>


      </ul>

      <div class="me-loadMore-btn" @click="loadMore">
        <loading :hideLoading="hideLoading"></loading>
        {{text_showMore}}
      </div>

    </div>
  </section>
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
    }
  },
  components:{
    herbTags,loading
  },
  methods:{
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
    loadMore () {
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
    onScroll () {
      var scrollTop = document.body.scrollTop ? document.body.scrollTop : (document.documentElement.scrollTop ? document.documentElement.scrollTop : window.pageYOffset);
      if(scrollTop + window.innerHeight >= document.body.scrollHeight) {
        this.loadMore();
      }

    }
  },
  mounted () {
    this.keyword = this.$route.params.keyword;
    this.getListDatas(1)
  },
  created () {
    this.$nextTick(function () {
     window.addEventListener('scroll', this.onScroll)
    })
  }
}
</script>
