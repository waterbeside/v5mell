<template lang="html">
  <div  v-show="isShow" v-bind:class="[baseClassName,className]">{{text}}</div>
</template>

<script>
import config from '../setting/config'

function computeCase(type,num){

  var data = {text:'',className:''};
  if(!num){
    return data;
  }
  const my_enum = config.enum;
  switch (type) {
    case "hot_cold":
      data.text =  my_enum.hot_cold[num] ? my_enum.hot_cold[num] : '';
      data.className = 'me-tag-hc-'+num;
      break;
    case "toxicity":
      data.text = my_enum.toxicity[num] ? my_enum.toxicity[num]  : '';
      data.className = 'me-tag-tx-'+num;
      break;
    case "odor":
      let odor_array = num.split(',');
      data.text = '';
      odor_array.forEach(function(item,index){
        if(item){
          let text = my_enum.odor[item] ? my_enum.odor[item] : '';
          if(text!=''){
            data.text = data.text ? data.text + ', ' + text : text;
          }
        }
      })
      data.className = '';
      break;
    default:
      data.text = '';
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
    num: {default:0},
    baseClass: {default:'me-tag'},
    noClass: {default:false}
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
        return this.noClass ? '': computeCase(this.type,this.num).className;
    },
    baseClassName (){
      return this.noClass ? '' : this.baseClass;
    },
    isShow () {
      return computeCase(this.type,this.num).text=='' ? false : true;
    }
  }
}
</script>

<style lang="css">
</style>
