<template>
  <div class="g-mainer p-show-herb">

    <div  class="g-head-banner " >
     <div class="container-fluid d-flex"  :style="{'backgroundImage': datas.thumb ? 'url('+datas.thumb+')' : 'none'}">>
       <h1>{{datas.title}}</h1>
       <div class="me-tag-wrap">
         <herb-tags type='hot_cold' :num="datas.warm_cold"></herb-tags>
         <herb-tags type='odor' :num="datas.odor"></herb-tags>

       </div>
     </div>
    </div>

    <loading :hideLoading="hideLoading"></loading>
    <div class="me-herb-names">
      <dl v-show="datas.latin_name?true:false">
        <dt>拉丁名</dt>
        <dd>{{datas.latin_name}}</dd>
      </dl>
      <dl v-show="datas.alias?true:false">
        <dt>别 名</dt>
        <dd>{{datas.alias}}</dd>
      </dl>
      <dl v-show="datas.english_name?true:false">
        <dt>英文名</dt>
        <dd>{{datas.english_name}}</dd>
      </dl>
    </div>

    <section class="me-st-box me-herb-baseinfo">
      <div class="heading heading-gray h7">特性</div>
      <div class="body">
        <div class="col-6 info-item">
          <label>性</label>
          <h5><herb-tags type='hot_cold' noClass="true" :num="datas.warm_cold"></herb-tags></h5>
        </div>
        <div class="col-6 info-item">
          <label>味</label>
          <h5><herb-tags type='odor' noClass="true" :num="datas.odor"></herb-tags></h5>
        </div>
        <div class="col-6 info-item">
          <label>毒</label>
          <h5><herb-tags type='toxicity' noClass="true" :num="datas.toxicity"></herb-tags></h5>
        </div>
        <div class="col-6 info-item">
          <label>归经</label>
          <h5 v-html="datas.tropism?datas.tropism:'-'"></h5>
        </div>
      </div>
    </section>
    <section class="me-st-box me-herb-comefrom">
      <div class="heading heading-gray h7">基源</div>
      <div class="body">
        <div class="info-item">
          <label>科别</label>
          <h5>{{datas.families}}科</h5>
        </div>
        <div class="info-item-p" v-show="datas.comefrom?true:false">
          <span>来源：</span>
          <span v-html="datas.comefrom"></span>

        </div>
        <div class="info-item-p " v-show="datas.harvest?true:false">
          采收加工：
          <span v-html="datas.harvest"></span>
        </div>
      </div>
    </section>
    <div class="me-st-box me-herb-comefrom">
      <div class="heading heading-gray h7">详细</div>
      <article class="me-herb-article" v-html="datas.content">

      </article>
    </div>


  </div>

</template>

<script>
import config from '../setting/config';
import herbTags from '../components/herbTags';
import loading from '../components/loading';
const cacheKeyPrefix = "item_herb_";
export default {
  name: 'ShowHerb',
  data () {
    return {
      datas : [],
      id: 0,
      hideLoading:1
    }
  },
  components:{
    herbTags,loading
  },
  methods: {
    init () {
      //document.documentElement.scrollTop=0
      this.id = this.$route.params.id;
      this.datas = [];
      this.getDatas();
    },
    getDatas () { //取得说细数据
      var that = this;
      var id = this.id;
      this.hideLoading = 0;
      var cacheData = this.getCache(id);
      if(cacheData){  //检查是否有缓存
        that.hideLoading = 1;
        that.rendersDatas(cacheData);
      }else{
        this.$ajax.get(config.api.herb_show,{params:{id}}).then(function(response){
          that.hideLoading = 1;
          if(response.data.status){
            that.rendersDatas(response.data.data);
            that.addCache(response.data.data);
          }
        }, function(error){
          console.log(error);
        })
      }

    },
    rendersDatas (datas) {
      this.datas = datas;
      this.$store.commit('setTitle',datas.title);
    },
    addCache (datas) {
      let dataString = JSON.stringify(datas) ;
      let key = cacheKeyPrefix + datas.id;
      localStorage.setItem(key,dataString);
    },
    getCache (id) {
      let key = cacheKeyPrefix + id;
      let dataString = localStorage.getItem(key);
      return dataString ?  JSON.parse(dataString) : false ;
    }
  },
  mounted () {
    this.init()
  },
  activated () {
    document.documentElement.scrollTop=0
    this.$store.commit('setGo',-1);
    if(this.id != this.$route.params.id){//如两次id不同，始重新加载本页数据
      this.init()
    }else{
      if(this.datas.title){
          this.$store.commit('setTitle',this.datas.title);
      }

    }

  }
}
</script>
