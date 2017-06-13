<template lang="html">
  <section class="me-st-box ">
    <div class="heading h7">结果</div>
    <div class="body">
      <ul class="me-list-herb">
        <li>
          <h5 class="title">紫苏
            <div class="me-tag me-tag-hc-12">温</div>
            <div class="me-tag">辛</div>
          </h5>
          <div class="latin">1.Perilla frutescens(L.)Britt. Var .crispa (Thumb.) Hand.-Mand .-Mazz.2.Perilla frutescens (L.) Britt.var.acuta (Thunb.) Kudo</div>
          <div class="summary">为唇形科植物紫苏和野紫苏的叶或带叶小软枝。 功效：解表散寒，行气和胃。用于风寒感冒，咳嗽呕恶，妊娠呕吐，鱼蟹中毒。</div>
        </li>
        <li>
          <h5 class="title">澤瀉
            <div class="me-tag me-tag-hc-8">寒</div>
            <div class="me-tag">甘</div>
          </h5>
          <div class="latin">Alisma orientale (Sam.) Juz. [A. plantago-aquatica L. var. orientale Sam.]</div>
          <div class="summary">为泽泻科植物泽泻的块茎。</div>
        </li>

      </ul>
      <loading :hideLoading="hideLoading"></loading>
      <div class="me-showMore-btn">
        加载更多
      </div>
      <div class="me-pagination  pagination-sm">
        <a class="page-link disabled ">上一页</a>
        <div class="page-jump">
          当前第
          <input type="number" class="page-input" value="1" min="1" max="80">/80
          页
        </div>
        <a class="page-link">下一页</a>
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
      keyword:'',
      page:1,
      hideLoading:1
    }
  },
  components:{
    herbTags,loading
  },
  methods:{
    getListDatas (keyword,page){
      var that = this;
      this.hideLoading = 0
      this.$ajax.get(config.api.herb_result,{params:{keyword,page}}).then(function(response){
        console.log(response);
        that.hideLoading = 1;
        that.result_list = response.datas;
      }, function(error){

      })
    }
  },
  mounted () {
    let keyword = this.$route.params.keyword;
    this.keyword = keyword ;
    this.getListDatas(keyword,1)
  }
}
</script>
