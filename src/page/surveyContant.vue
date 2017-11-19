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
       data: { sbiDriverlicenseNo: "420683198811214298",
         sbiLicenseNo: "京M45352",
         sbiPhone: "13910284063"
         },
       url: '/insure_survey_web'
      }
    },
    created(){
      axios.post(this.url+"/platform/didi/survey/detail/count", this.data)
        .then(response => {
          console.log(response.data)
          resolve(response.data);
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
