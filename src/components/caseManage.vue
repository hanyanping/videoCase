<template>
  <div class="caseManage">
    <div class="caseTab">
      <span class="caseJiankong active" @click="tabChange">案件监控</span>
      <span class="allCase" @click="tabChange">全部案件</span>
    </div>
    <div class="manageContent">
        <case-list v-if="allCaseActive"></case-list>
        <case-monitor v-if="jianKongActive"></case-monitor>
    </div>
  </div>
</template>
<script>
  import caseList from './caseList'
  import caseMonitor from './caseMonitor'
  export default {
    data() {
      return{
        jianKongActive: true,
        allCaseActive: false
      }
    },
    methods: {
      tabChange(event){
        var attributes = event.target.attributes
        for(var i=0;i< attributes.length;i++){
          if(i == 1){

            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
               attributes[i].nodeValue = 'caseJiankong active'
               $(".allCase").attr("class","allCase")
               this.jianKongActive = true;
               this.allCaseActive = false;
            }else  if(event.target.attributes[i].nodeValue.indexOf('allCase') > -1){
              $(".caseJiankong").attr("class","caseJiankong");
              attributes[i].nodeValue = 'allCase active';
              this.jianKongActive = false;
              this.allCaseActive = true;
            }

          }

        }

      }
    },
    components: {
      caseList,
      caseMonitor,
    },
  }

</script>
<style scoped>
  .caseManage{
    width: 100%;
    margin-top: 40px;
    margin-left: 40px;
  }
.caseTab{
  width: 80%;
  border-bottom: 1px solid #2EAB3B;
  padding-left: 10px;
}
  .caseJiankong, .allCase{
    display: inline-block;
    height: 35px;
    width: 80px;
    background: #fff;
    color: #2EAB3B;
    line-height: 35px;
    text-align: center;
    border: 1px solid #2EAB3B;
    border-bottom: none;
  }
  .caseJiankong{
    margin-right: -5px;
  }
  .active{
    background: #2EAB3B;
    color: #fff;
  }
  .manageContent{
    margin-left: 10px;
  }
</style>
