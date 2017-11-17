<style scoped>
  .caseDetail{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top:0;
    left:0
  }
  .caseDetailBox{
    width: 62%;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 76vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
  }
  .detailContent{
    overflow-y: scroll;
    max-height: 65vh;
  }
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .caseInfo{
    font-size: 14px;
    color: #232323;
    margin-top:15px;
  }
  .caseInfo i{
    padding-right: 20px;
    display:inline-block;

  }
  .chakanno, .baoxianNo{
    width: 25%;
  }
  .caseInfoBox{
    padding: 5px 0;
    text-align: left;
  }
  .AimCar{
    width: 100%;
    margin: 15px 0;
  }
  .aimheader{
    height: 30px;
    color: #fff;
    background: #2EAB3B;
    font-size: 15px;
    line-height: 30px;
    padding-left:15px;
  }
  .aimInfo{
    width: 100%;
  }
  .aimInfo .table{
    width:100%;
  }
  .aimInfo .table td{
    padding: 3px;
  }
  .aimCarImg{
    width: 100%;
    border: 1px solid #bbb;
    border-top: none;
    padding: 10px 0;
  }
  .aimCarImg ul{
    display: flex;
    justify-content: space-between;
  }
  .aimCarImg li{
    width: 22%;
    padding:25px 0px;
  }
  .aimCarImg img{
    width: 100%;
    height: 200px;
  }
  .aimCarImg span{
    font-size: 14px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(201,202,204,0.8);
    color: #232323;
    display: block;
    margin-top: -14px
  }
  .videoBox{
    text-align:center;
  }
.videoBox video{
  height: 200px;
  width: 30%;
  padding: 20px;

}
  video::-webkit-media-controls-enclosure {
    overflow:hidden;
  }
  video::-webkit-media-controls-panel {
    width: calc(100% + 30px);
  }
  .reporPerson img, .caseInfoBox img{
    padding-left: 7px;
    height: 16px;
    width: 14px;
  }
  .caseInfoBox img{
    padding-right:0;
  }
  .footerBox{
    text-align: center;
    margin: 40px;
    width: 100%;

  }
  .download{
    display: inline-block;
    height:35px;
    width: 185px;
    color:#fff;
    background: #2EAB3B;
    line-height: 35px;
    text-align: center;

  }
</style>
<template>
  <div class="caseDetail hide">
    <div class="caseDetailBox">
      <span @click="closCaseDetail" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">案件详情</h4>
        <div class="detailContent">
          <div class="caseInfo" id="caseInfo">
              <div class="caseInfoBox">
                <span>查勘号：</span><i class="chakanno">1301201711161708478152382</i>
                <span>保险报案号：</span><i class="baoxianNo">1301201711161708478152382</i>
                <span>事故时间：</span><i >2017-11-16 16:57:00</i>
              </div>
              <div class="caseInfoBox">
                <span>案件状态：</span><i>警用</i>
               <span>事故地点：</span><i>北京市双井大队23号</i><img src="../images/adress.png"/>
              </div>
              <div class="caseInfoBox"><span>异常原因：</span><i>多车</i></div>
          </div>
          <div class="AimCar">
            <div class="aimheader">标的车</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>京啊222</td><td>发动机号:</td><td>12333333333</td><td>车架号:</td><td>12222222222</td></tr>
                <tr><td>车主姓名:</td><td>杭亚军</td><td>车主电话: </td><td>1323333</td><td>驾驶证号:</td><td>4544444444444444444</td></tr>
                <tr><td>保险公司:</td><td> 阳光保险集团 阳光保险集团</td><td>保险公司城市： </td><td>杭州</td><td> 处理机构：</td><td>中车北京查勘定损中心 </td></tr>
              </table>
              <div class="aimCarImg">
                <ul>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="thirdCar AimCar" v-for="item in thirdCar">
            <div class="aimheader">三者车(京A123454)</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>京啊222</td><td>发动机号:</td><td>12333333333</td><td>车架号:</td><td>12222222222</td></tr>
                <tr><td>车主姓名:</td><td>杭亚军</td><td>车主电话: </td><td>1323333</td><td>驾驶证号:</td><td>4544444444444444444</td></tr>
                <tr><td>保险公司:</td><td> 阳光保险集团 阳光保险集团</td><td>保险公司城市： </td><td>杭州</td><td> 处理机构：</td><td>中车北京查勘定损中心 </td></tr>
              </table>
              <div class="aimCarImg">
                <ul>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="thirdCar AimCar " >
            <div class="aimheader">查勘现场视频</div>
            <div class="aimInfo videoBox">
              <video controls="controls">
                <source src="../images/movie.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="AimCar reporPerson" >
            <div class="aimheader">查勘员信息</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>现场查勘员:</td><td>京啊222<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>12333333333</td><td>预计到达时间:</td><td>12222222222</td>
                  <td>实际到达时间</td><td>2017-01-01  12:38:00</td></tr>
                <tr><td> 后台坐席: </td><td>杭亚军</td><td>处理开始时间: </td><td>1323333</td><td>处理结束时间:</td><td>4544444444444444444</td><td></td><td></td></tr>

              </table>
            </div>
          </div>
          <div class="footerBox">
            <span class="download">下载</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
      return{
        thirdCar: [{

        },{

        },{

        }]

      }
    },
    created(){

    },
      methods: {
        closCaseDetail(){
          $(".caseDetail").addClass("hide")
        }
      },
      components: {
      },
    }
</script>
