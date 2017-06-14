<template lang="html">
  <div class="me-tag" v-show="isShow" v-bind:class="className">{{text}}</div>
</template>

<script>
import config from '../setting/config'

function computeCase(type,num){

  var data = {};
  const my_enum = config.enum;
  switch (type) {
    case "hot_cold":
      data.text = my_enum.hot_cold[num];
      data.className = 'me-tag-hc-'+num;
      break;
    case "toxicity":
      data.text = my_enum.toxicity[num];
      data.className = 'me-tag-tx-'+num;
      break;
    case "odor":
      let odor_array = num.split(',');
      data.text = '';
      odor_array.forEach(function(item,index){
        if(item){
          let text = my_enum.odor[item];
            data.text = data.text ? data.text + ', ' + text : text;
        }
      })
      data.className = '';
      break;
    default:
      data.text = num;
      data.className = '';
  }
  if(("").trim){
    data.text = data.text.trim();
  }
  return data;
}
export default {
  props: {
    type: {default:''},
    num: {default:0}
  },
  data () {
    return {
    }
  },
  computed: {
    text () {
      return computeCase(this.type,this.num).text;
    },
    className () {
        return computeCase(this.type,this.num).className;
    },
    isShow () {
      return computeCase(this.type,this.num).text=='' ? false : true;
    }
  }
}
</script>

<style lang="css">
</style>
