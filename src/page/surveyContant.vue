<template>
  <div class="contanter">
    <head-top head-title="我的优惠" go-back='true'></head-top>
    <div class="menu">
      <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="1" route="/">案件管理</el-menu-item>
        <el-menu-item index="2" route="/page2">坐席管理</el-menu-item>
        <el-menu-item index="3" route="/page3">机构管理</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
    <footer-foot></footer-foot>
  </div>
</template>

<script>
  import headTop from '../components/header'
  import footerFoot from '../components/footer'
  export default {
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
  }

</style>
