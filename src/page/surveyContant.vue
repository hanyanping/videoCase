<template>
  <div class="contanter">
    <head-top head-title="" go-back='true'></head-top>
    <footer-foot></footer-foot>
  </div>
</template>

<script>
  import headTop from '../components/header'
  import footerFoot from '../components/footer'
  import axios from 'axios'
  export default {
   data() {
      return{
         data:{
         },
        ajaxUrl: "/boot-pub-survey-manage"
      }
    },
    created(){
      axios.post(this.ajaxUrl+"/pub/survey/v1/custom/service/list", this.data)
        .then(response => {
        }, err => {
            console.log(err);
        })
        .catch((error) => {
            console.log(error)
        })
    },
    components: {
      headTop,
      footerFoot,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contanter{
    min-height: 100%;
    width: 100%;
    background: #f4f4f4;
  }

</style>
