<template>
  <div class="g-main">
    <div  class="g-head-banner g-head-banner-index" >
     <div class="container-fluid d-flex ">
       <div class="search-form-wrap ">
             <input type="text" placeholder="Search for..." class="form-control form-control-icon" @focus="goSearchPage">
             <i class="fa fa-search"></i>
       </div>
     </div>
    </div>

    <section class="me-st-box ">
      <div class="heading h7" >随便看看</div>
      <div class="body">
        <ul class="me-list-herb">
          <li v-for="item in randomList">
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

      </div>
    </section>
  </div>

</template>

<script>

import config from '../setting/config'
import herbTags from '../components/herbTags'
export default {
  name: 'Home',
  data () {
    return {
      randomList: []
    }
  },
  methods : {
    goSearchPage () {
      this.$router.push({name: 'list_herb'});
    },


  },
  components:{
    herbTags
  },
  mounted () {
    var that = this;
    this.$ajax.get(config.api.radom_list).then(function(response){
      if(response.data.status){
        that.randomList = response.data.datas;
      }
    }, function(error){
      console.log(error);
    })

  }

}
</script>
