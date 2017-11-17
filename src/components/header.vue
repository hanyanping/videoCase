<template>
    <div class="header">
      <div style="display:flex">
        <div style="display:flex;margin-top:12px;">
          <img src="../images/logo.png"/>
          <h3 class="headerText"><span>|</span>事故e处理-视频查勘定损平台</h3>
        </div>
        <div class="menu">
          <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="1" route="/">案件管理</el-menu-item>
            <el-menu-item index="2" route="/seatManage">坐席管理</el-menu-item>
            <el-menu-item index="3" route="/institutionManage">机构管理</el-menu-item>
          </el-menu>
        </div>
      </div>

      <div class="headerLeft">
        <span class="userName">站昂扬</span>
        <span class="userInsitu">(中车宝联客服中心)</span>
        <span class="signOut">退出</span>
        <span class="creatCase">创建案件</span>
      </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }

</script>
<style scoped>
  .headerText{
    color: #555555;
    line-height: 45px;
    font-size: 15px;
    margin-left: 15px;
  }
  .headerText span{
    padding-right:10px;
  }
  .header{
    display: flex;
    justify-content: space-between;
    background: #fff;
    width:100%;
    padding:10px 10%;
    margin: 0 auto;
  }
  .header img{
    height: 40px;
    width: 115px;
  }
  .headerLeft{
    height:60px;
    line-height: 60px;
    font-size: 15px;
    color: #555;
  }
  .signOut{
    color: #2EAB3B;
    margin:0 15px;
    cursor: pointer;
  }
  .creatCase{
    height: 35px;
    line-height: 35px;
    width: 80px;
    text-align: center;
    display: inline-block;
    color: #fff;
    background: #2EAB3B;
    cursor: pointer;
  }
</style>
