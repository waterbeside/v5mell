export default {
  bind (el,binding) {    
    el.onscroll = function(){
      if(typeof binding.value === "function") {
          binding.value(this)
      }
    }
  }
}
