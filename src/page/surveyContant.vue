<template>
  <div class="contanter">
    <head-top head-title="我的优惠" go-back='true'></head-top>
      <div  class="contentBox">
        <el-tabs type="border-card"  @tab-click="changeRouter">
          <el-tab-pane>
            <span slot="label"> 案件管理</span>
            <case-manage></case-manage>
          </el-tab-pane>
          <el-tab-pane label="坐席管理">
            <seat-manage></seat-manage>
          </el-tab-pane>
          <el-tab-pane label="机构管理">
            <institution-manage></institution-manage>
          </el-tab-pane>



        </el-tabs>
      </div>
    <footer-foot></footer-foot>
  </div>
</template>

<script>
  import headTop from '../components/header'
  import footerFoot from '../components/footer'
  import caseManage from '../components/caseManage'
  import seatManage from '../components/seatManage'
  import  institutionManage from '../components/institutionManage'
  export default {
    name: 'surveyContant',
    data () {
      return {
        tabName: [
          {name: "案件管理",router: '1'},
          {name: "坐席管理",router: '2'},
          {name: "机构管理",router: '3'}
        ]
      }
    },
    methods:{
      changeRouter(){
      }
    },
    components: {
      headTop,
      footerFoot,
      caseManage,
      seatManage,
      institutionManage,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../style/reset.css';
  .contanter{
    min-height: 100%;
    width: 100%;
  }

</style>
