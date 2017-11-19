<style scoped>
  .caseDetail{
    background: rgba(0,0,0,0.3);
    width: 100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index:100;
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
    min-width: 25%;
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
  .caseInfoBoxAdress{
    position: relative;
    display:inline-block;
    width: 50%;
  }
  .caseInfoBoxTitle{
    width: 70px;
    display: inline-block;
  }
  .caseInfoBoxInfo{
    position: absolute;
    left: 75px;
    top: 0;
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
                <div class="caseInfoBoxAdress" >
                  <span class="caseInfoBoxTitle" >事故地点：</span>
                  <div class="caseInfoBoxInfo">
                    <i style="display:inline-block;">北京市双井大队23号</i>
                    <img @mouseenter="enter" @mouseleave="leave" src="../images/adress.png"/>
                    <div id="detailMap" class="hide" style="height:250px;width:250px;"></div>
                  </div>
                </div>

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
                <ul id="scaleImg">
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
          <div class="thirdCar AimCar" v-for="(item,index) in thirdCar">
            <div class="aimheader">三者车(京A123454)</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>京啊222</td><td>发动机号:</td><td>12333333333</td><td>车架号:</td><td>12222222222</td></tr>
                <tr><td>车主姓名:</td><td>杭亚军</td><td>车主电话: </td><td>1323333</td><td>驾驶证号:</td><td>4544444444444444444</td></tr>
                <tr><td>保险公司:</td><td> 阳光保险集团 阳光保险集团</td><td>保险公司城市： </td><td>杭州</td><td> 处理机构：</td><td>中车北京查勘定损中心 </td></tr>
              </table>
              <div class="aimCarImg">
                <ul class="suibian">
                  <li>
                    <img data-src="../images/kefuBlue.png" src="http://api.accidentx.zhongchebaolian.com/photobase/photos/didisurvey/2017-10-24/845990/f05d6f3b2ffc42f894f3df7f9757d29c_1508816033514.jpg">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img data-src="http://api.accidentx.zhongchebaolian.com/photobase/photos/didisurvey/2017-10-24/845990/f05d6f3b2ffc42f894f3df7f9757d29c_1508816033514.jpg" src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img data-src="http://api.accidentx.zhongchebaolian.com/photobase/photos/didisurvey/2017-10-24/845990/f05d6f3b2ffc42f894f3df7f9757d29c_1508816041149.jpg" src="../images/car.png">
                    <br>
                    <span>但是人与车合影</span>
                  </li>
                  <li>
                    <img data-src="http://api.accidentx.zhongchebaolian.com/photobase/photos/didisurvey/2017-10-24/845990/f05d6f3b2ffc42f894f3df7f9757d29c_1508816033514.jpg" src="../images/car.png">
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
                <tr><td>现场查勘员:</td><td @click="mapRouter">京啊222<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>12333333333</td><td>预计到达时间:</td><td>12222222222</td>
                  <td>实际到达时间</td><td>2017-01-01  12:38:00</td></tr>
                <tr><td> 后台坐席: </td><td>杭亚军</td><td>处理开始时间: </td><td>1323333</td><td>处理结束时间:</td><td>4544444444444444444</td><td></td><td></td></tr>
                <div class="mapBox hide" id="mapContent" style="width:80%;height:300px;"> </div>
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
import Viewer from 'viewerjs';
export default {
  data() {
      return{
        thirdCar: [{

        },{

        },{

        }],
        longitude: "116.468453",
        latitude: "39.899186",
      }
    },
    created(){
    },
    mounted() {
      this.$nextTick(() => {
        new Viewer(document.getElementById('scaleImg'), {
            url: 'src',
            navbar:false,
            toolbar:true,
            loop: true
          })
        for (let i in this.thirdCar) {
          new Viewer(document.getElementsByClassName('suibian')[i], {
            url: 'data-src',
            navbar:false,
            toolbar:true,
            loop: true
          })
        }
      })
    },
      methods: {
        closCaseDetail(){
          $(".caseDetail").addClass("hide")
        },
        enter(){
          $("#detailMap").removeClass("hide")
          var map = new BMap.Map("detailMap");
          map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
          map.enableScrollWheelZoom(true);

          // 用经纬度设置地图中心点
            if(this.longitude != "" && this.latitude!= ""){
              map.clearOverlays();
              var new_point = new BMap.Point(this.longitude,this.latitude);
              var marker = new BMap.Marker(new_point);  // 创建标注
              map.addOverlay(marker);              // 将标注添加到地图中
              map.panTo(new_point);
            }
        },
        leave(){
          $("#detailMap").addClass("hide")
        },
        mapRouter(){
          var data =  [
            {
              "id": 274,
              "siOperator": "348",
              "siSurveyNo": "117b72a87ab145c59628baa6a0f9d4a7",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "12345676",
              "siCityCode": "1401",
              "siReportLicenseNo": "京A000001",
              "siReporterName": "杨",
              "siAccidentTime": 1509954556000,
              "siAccidentAddress": "中华保险大厦",
              "siAccidentLng": "120.15305",
              "siAccidentLat": "30.300236",
              "siInsureCode": "110000003007",
              "siInsureName": "中华联合财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "543695",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "18519768056",
              "siSurveyorName": "张扬",
              "siFirstTime": 1509954603000,
              "siReassignTime": null,
              "siArriveTime": 1509955923000,
              "siActualTime": null,
              "siLeftNum": 1,
              "siInitLng": "120.14838630134",
              "siInitLat": "30.302565888426",
              "siReassignment": 0,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1510152837000,
              "siCancelReason": null,
              "siCreateTime": 1509954556000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "12",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-11-06 15:49:16"
            },
            {
              "id": 273,
              "siOperator": "348",
              "siSurveyNo": "7833efb3b3d44752b0b1693d4b8c0c25",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "234543",
              "siCityCode": "1401",
              "siReportLicenseNo": "京123456",
              "siReporterName": "Y",
              "siAccidentTime": 1509953729000,
              "siAccidentAddress": "中华保险大厦",
              "siAccidentLng": "120.15305",
              "siAccidentLat": "30.300236",
              "siInsureCode": "110000003039",
              "siInsureName": "浙商财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "543695",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "18519768056",
              "siSurveyorName": "张扬",
              "siFirstTime": 1509953742000,
              "siReassignTime": null,
              "siArriveTime": 1509954933000,
              "siActualTime": null,
              "siLeftNum": 1,
              "siInitLng": "120.15312047908",
              "siInitLat": "30.300646621245",
              "siReassignment": 0,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1509953772000,
              "siCancelReason": null,
              "siCreateTime": 1509953729000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "12",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-11-06 15:35:29"
            },
            {
              "id": 272,
              "siOperator": "348",
              "siSurveyNo": "6489fad37b43473c821a40fa5bace803",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13810514396",
              "siReportNo": "bbbb0204",
              "siCityCode": "1402",
              "siReportLicenseNo": "京BBBB02",
              "siReporterName": "毛毛",
              "siAccidentTime": 1508816356000,
              "siAccidentAddress": "双井",
              "siAccidentLng": "116.468453",
              "siAccidentLat": "39.899186",
              "siInsureCode": "110000003059",
              "siInsureName": "长安责任保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "845990",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "13810514396",
              "siSurveyorName": "毛毛",
              "siFirstTime": 1508816404000,
              "siReassignTime": null,
              "siArriveTime": 1508817723000,
              "siActualTime": 1508816413000,
              "siLeftNum": 1,
              "siInitLng": "116.47390256836",
              "siInitLat": "39.90110226121",
              "siReassignment": 0,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1508816419000,
              "siCancelReason": null,
              "siCreateTime": 1508816356000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "13",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-24 11:39:16"
            },
            {
              "id": 271,
              "siOperator": "348",
              "siSurveyNo": "f05d6f3b2ffc42f894f3df7f9757d29c",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13810514396",
              "siReportNo": "bbbb0103",
              "siCityCode": "1401",
              "siReportLicenseNo": "京BBBB01",
              "siReporterName": "毛毛",
              "siAccidentTime": 1508815915000,
              "siAccidentAddress": "双井",
              "siAccidentLng": "116.468453",
              "siAccidentLat": "39.899186",
              "siInsureCode": "110000003015",
              "siInsureName": "永安财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "845990",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "13810514396",
              "siSurveyorName": "毛毛",
              "siFirstTime": 1508815925000,
              "siReassignTime": null,
              "siArriveTime": 1508817243000,
              "siActualTime": 1508815932000,
              "siLeftNum": 1,
              "siInitLng": "116.47373239441",
              "siInitLat": "39.900650258049",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "0",
              "siStartTime": 1508815983000,
              "siEndTime": 1508816316000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508815915000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-24 11:31:55"
            },
            {
              "id": 270,
              "siOperator": "348",
              "siSurveyNo": "205a9725472a48f8ae47bdce44b92ab7",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "V45646",
              "siCityCode": "6401",
              "siReportLicenseNo": "京M45352",
              "siReporterName": "YANG",
              "siAccidentTime": 1508746728000,
              "siAccidentAddress": "杭州市人力资源国际产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000003045",
              "siInsureName": "安诚财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "332631",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "13655803354",
              "siSurveyorName": "曾泽志",
              "siFirstTime": 1508746733000,
              "siReassignTime": null,
              "siArriveTime": 1508747933000,
              "siActualTime": 1508746741000,
              "siLeftNum": 1,
              "siInitLng": "120.17245820328",
              "siInitLat": "30.321247749237",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "10",
              "siStartTime": 1508747818000,
              "siEndTime": 1508749266000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508746728000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:18:48"
            },
            {
              "id": 269,
              "siOperator": "348",
              "siSurveyNo": "6220166757f94321950790d1640ba155",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "234ASD",
              "siCityCode": "1101",
              "siReportLicenseNo": "京M24242",
              "siReporterName": "YANGNING",
              "siAccidentTime": 1508746634000,
              "siAccidentAddress": "杭州国际人力产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000004602",
              "siInsureName": "泰山财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "847167",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "18658150670",
              "siSurveyorName": "马森",
              "siFirstTime": 1508746643000,
              "siReassignTime": null,
              "siArriveTime": 1508747843000,
              "siActualTime": 1508746765000,
              "siLeftNum": 1,
              "siInitLng": "120.17268896385",
              "siInitLat": "30.3212038544",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "9",
              "siStartTime": 1508747730000,
              "siEndTime": 1508749475000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508746634000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:17:14"
            },
            {
              "id": 268,
              "siOperator": "348",
              "siSurveyNo": "cd206ff19aab4d78a72c4eca29a60d88",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "C234345",
              "siCityCode": "1402",
              "siReportLicenseNo": "京N23425",
              "siReporterName": "YNA",
              "siAccidentTime": 1508746558000,
              "siAccidentAddress": "杭州国际人力资源产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000003037",
              "siInsureName": "华农财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "803517",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "18537015062",
              "siSurveyorName": "李传贵",
              "siFirstTime": 1508746563000,
              "siReassignTime": null,
              "siArriveTime": 1508747763000,
              "siActualTime": 1508747192000,
              "siLeftNum": 1,
              "siInitLng": "120.17269097226",
              "siInitLat": "30.321200829865",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "9",
              "siStartTime": 1508747597000,
              "siEndTime": 1508749266000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508746558000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:15:58"
            },
            {
              "id": 267,
              "siOperator": "348",
              "siSurveyNo": "05a5fb1c29494a07bc8ba22e7893e625",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "0",
              "siReportPhone": "13910284063",
              "siReportNo": "S457474",
              "siCityCode": "1401",
              "siReportLicenseNo": "京N33664",
              "siReporterName": "杨",
              "siAccidentTime": 1508746003000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.14591",
              "siAccidentLat": "30.274324",
              "siInsureCode": "110000003037",
              "siInsureName": "华农财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": null,
              "siSurveyorOrgcode": null,
              "siSurveyorPhone": null,
              "siSurveyorName": null,
              "siFirstTime": null,
              "siReassignTime": null,
              "siArriveTime": null,
              "siActualTime": null,
              "siLeftNum": null,
              "siInitLng": null,
              "siInitLat": null,
              "siReassignment": null,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1508748985000,
              "siCancelReason": null,
              "siCreateTime": 1508746003000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "11",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:06:43"
            },
            {
              "id": 266,
              "siOperator": "348",
              "siSurveyNo": "a4307a63c2a045caad63d969be4fe32c",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "C24256",
              "siCityCode": "1401",
              "siReportLicenseNo": "京M24353",
              "siReporterName": "YANG",
              "siAccidentTime": 1508745851000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000003039",
              "siInsureName": "浙商财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "319357",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "13165957003",
              "siSurveyorName": "唐立虎",
              "siFirstTime": 1508746013000,
              "siReassignTime": null,
              "siArriveTime": 1508747213000,
              "siActualTime": 1508746429000,
              "siLeftNum": 1,
              "siInitLng": "120.17244416537",
              "siInitLat": "30.3212379289",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "9",
              "siStartTime": 1508748249000,
              "siEndTime": 1508749328000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508745851000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:04:11"
            },
            {
              "id": 265,
              "siOperator": "348",
              "siSurveyNo": "9716759796674bed977b797fbdc523b0",
              "siTaskNo": null,
              "siStatus": "09",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "132536",
              "siCityCode": "1311",
              "siReportLicenseNo": "京M34656",
              "siReporterName": "杨",
              "siAccidentTime": 1508745782000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000004029",
              "siInsureName": "国泰财产保险有限责任公司",
              "siGetType": null,
              "siJobNumber": "248519",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "15325716513",
              "siSurveyorName": "董四龙",
              "siFirstTime": 1508746023000,
              "siReassignTime": null,
              "siArriveTime": 1508747223000,
              "siActualTime": 1508746435000,
              "siLeftNum": 1,
              "siInitLng": "120.17245218754",
              "siInitLat": "30.321242826344",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "9",
              "siStartTime": 1508748226000,
              "siEndTime": 1508749244000,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508745782000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "15",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:03:02"
            },
            {
              "id": 264,
              "siOperator": "348",
              "siSurveyNo": "4ff46b86298c4e4da6aa87ce9ed14144",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "A234455",
              "siCityCode": "1401",
              "siReportLicenseNo": "京M14324",
              "siReporterName": "YANG",
              "siAccidentTime": 1508745674000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000003037",
              "siInsureName": "华农财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "904983",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "18257165342",
              "siSurveyorName": "童建华",
              "siFirstTime": 1508746003000,
              "siReassignTime": null,
              "siArriveTime": 1508747203000,
              "siActualTime": 1508746246000,
              "siLeftNum": 1,
              "siInitLng": "120.17263267126",
              "siInitLat": "30.321370528215",
              "siReassignment": 0,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1508749032000,
              "siCancelReason": null,
              "siCreateTime": 1508745674000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "13",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:01:14"
            },
            {
              "id": 263,
              "siOperator": "348",
              "siSurveyNo": "d661e50ac2454fd985e5f2003444d929",
              "siTaskNo": null,
              "siStatus": "07",
              "siUseFlag": null,
              "siCasePlatform": "110100000001",
              "siReportPhone": "13910284063",
              "siReportNo": "C34253865",
              "siCityCode": "1401",
              "siReportLicenseNo": "京M12345",
              "siReporterName": "杨",
              "siAccidentTime": 1508745603000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.172351",
              "siAccidentLat": "30.321002",
              "siInsureCode": "110000003015",
              "siInsureName": "永安财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": "552336",
              "siSurveyorOrgcode": "110100000001",
              "siSurveyorPhone": "13777402296",
              "siSurveyorName": "黄兆造",
              "siFirstTime": 1508746053000,
              "siReassignTime": null,
              "siArriveTime": 1508748993000,
              "siActualTime": 1508746322000,
              "siLeftNum": 1,
              "siInitLng": "120.21354539227",
              "siInitLat": "30.285018192076",
              "siReassignment": 0,
              "siReasonCode": "0",
              "siAccreasonCode": "9",
              "siStartTime": 1508746557000,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": null,
              "siCancelReason": null,
              "siCreateTime": 1508745603000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "14",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 16:00:03"
            },
            {
              "id": 262,
              "siOperator": "348",
              "siSurveyNo": "09d9e35beef74aed9217b3e9171637c2",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "0",
              "siReportPhone": "13910284063",
              "siReportNo": "C34235395",
              "siCityCode": "1401",
              "siReportLicenseNo": "京M12485",
              "siReporterName": "YANG",
              "siAccidentTime": 1508745512000,
              "siAccidentAddress": "杭州市国际人力资源产业园",
              "siAccidentLng": "120.14591",
              "siAccidentLat": "30.274324",
              "siInsureCode": "110000003043",
              "siInsureName": "中国人寿财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": null,
              "siSurveyorOrgcode": null,
              "siSurveyorPhone": null,
              "siSurveyorName": null,
              "siFirstTime": null,
              "siReassignTime": null,
              "siArriveTime": null,
              "siActualTime": null,
              "siLeftNum": null,
              "siInitLng": null,
              "siInitLat": null,
              "siReassignment": null,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1508749025000,
              "siCancelReason": null,
              "siCreateTime": 1508745512000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "11",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 15:58:32"
            },
            {
              "id": 261,
              "siOperator": "348",
              "siSurveyNo": "f1e07283f98c48dead81412436acdafe",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "0",
              "siReportPhone": "13810514396",
              "siReportNo": "aaaa03aaaa03",
              "siCityCode": "1402",
              "siReportLicenseNo": "京AAAA03",
              "siReporterName": "毛猫",
              "siAccidentTime": 1508737888000,
              "siAccidentAddress": "双井",
              "siAccidentLng": "116.468453",
              "siAccidentLat": "39.899186",
              "siInsureCode": "110000003059",
              "siInsureName": "长安责任保险股份有限公司",
              "siGetType": null,
              "siJobNumber": null,
              "siSurveyorOrgcode": null,
              "siSurveyorPhone": null,
              "siSurveyorName": null,
              "siFirstTime": null,
              "siReassignTime": null,
              "siArriveTime": null,
              "siActualTime": null,
              "siLeftNum": null,
              "siInitLng": null,
              "siInitLat": null,
              "siReassignment": null,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1508738144000,
              "siCancelReason": null,
              "siCreateTime": 1508737888000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "11",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 13:51:28"
            },
            {
              "id": 260,
              "siOperator": "348",
              "siSurveyNo": "c92e8963268547859d51f097fa483b25",
              "siTaskNo": null,
              "siStatus": "11",
              "siUseFlag": null,
              "siCasePlatform": "0",
              "siReportPhone": "13810514396",
              "siReportNo": "aaaa02aaaa02",
              "siCityCode": "1311",
              "siReportLicenseNo": "京AAAA02",
              "siReporterName": "吗啊",
              "siAccidentTime": 1508737855000,
              "siAccidentAddress": "双井",
              "siAccidentLng": "116.468453",
              "siAccidentLat": "39.899186",
              "siInsureCode": "110000003039",
              "siInsureName": "浙商财产保险股份有限公司",
              "siGetType": null,
              "siJobNumber": null,
              "siSurveyorOrgcode": null,
              "siSurveyorPhone": null,
              "siSurveyorName": null,
              "siFirstTime": null,
              "siReassignTime": null,
              "siArriveTime": null,
              "siActualTime": null,
              "siLeftNum": null,
              "siInitLng": null,
              "siInitLat": null,
              "siReassignment": null,
              "siReasonCode": null,
              "siAccreasonCode": null,
              "siStartTime": null,
              "siEndTime": null,
              "siRepeat": null,
              "siCancelTime": 1509436012000,
              "siCancelReason": null,
              "siCreateTime": 1508737855000,
              "siRemarkOne": null,
              "siRemarkTwo": null,
              "siRemarkThree": null,
              "accidentSence": null,
              "resonCode": null,
              "statueString": null,
              "surveyStatueString": null,
              "siSurveyorStatus": "11",
              "siIsvalid": 1,
              "siAccidentTimeStr": "2017-10-23 13:50:55"
            }
          ]
          $(".mapBox").toggleClass("hide");
          if($('.mapBox').attr('class').indexOf('hide') < 0){
            var map = new BMap.Map("mapContent");
            var length = data.length;
            map.enableScrollWheelZoom(true);
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
//                                                          	for(var i =0;i<length;i++){
//                                                          	    driving.search(new BMap.Point(data.data[0].longitude,data.data[0].latitude),new BMap.Point(data.data[length-1].longitude,data.data[length-1].latitude),{waypoints:[new BMap.Point(data.data[i].longitude,data.data[i].latitude)]});//waypoints表示途经点
//                                                          	}
            for(var i =0;i<length;i++){
              driving.search(new BMap.Point(data[0].siInitLng,data[0].siInitLat),new BMap.Point(data[length-1].siInitLng,data[length-1].siInitLat));
            }
            driving.setSearchCompleteCallback(function() {
              //得到路线上的所有point
              data = driving.getResults().getPlan(0).getRoute(0).getPath();

              //画面移动到起点和终点的中间
              centerPoint = new BMap.Point((data[0].siInitLng + data[data.length - 1].siInitLat) / 2, (data[0].siInitLng + data[data.length - 1].siInitLat) / 2);
              map.panTo(centerPoint);
              //连接所有点
              map.addOverlay(new BMap.Polyline(data.data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));
            })

          }
//          if((data.data.surveyInfo.surveyStatueString != '暂无状态信息')&&((data.data.surveyInfo.siJobNumber != null))){
//            console.log(23)
//            if(data.data.surveyInfo.siStatus == '09'){
//              alert('服务已结束，此功能暂停使用。')
//            }else{
//              $.ajax({
//                url: "../../platform/didi/survey/coordinate",
//                type: "POST",
//                dataType: "json",
//                data: dataParam,
//                contentType: 'application/json;utf-8',
//                success: function (data) {
//                  if(data.rescode == 4000){
//                    if(data.data!=null){
//                      $(".mapBox").toggleClass("none");
//                      if($('.mapBox').attr('class').indexOf('none') < 0){
//                        var map = new BMap.Map("allmap");
//                        var length = data.data.length;
//                        map.enableScrollWheelZoom(true);
//                        var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
////                                                          	for(var i =0;i<length;i++){
////                                                          	    driving.search(new BMap.Point(data.data[0].longitude,data.data[0].latitude),new BMap.Point(data.data[length-1].longitude,data.data[length-1].latitude),{waypoints:[new BMap.Point(data.data[i].longitude,data.data[i].latitude)]});//waypoints表示途经点
////                                                          	}
//                        for(var i =0;i<length;i++){
//                          driving.search(new BMap.Point(data.data[0].longitude,data.data[0].latitude),new BMap.Point(data.data[length-1].longitude,data.data[length-1].latitude));
//                        }
//                        driving.setSearchCompleteCallback(function() {
//                          //得到路线上的所有point
//                          data.data = driving.getResults().getPlan(0).getRoute(0).getPath();
//
//                          //画面移动到起点和终点的中间
//                          centerPoint = new BMap.Point((data.data[0].longitude + data.data[data.data.length - 1].longitude) / 2, (data.data[0].latitude + data.data[data.data.length - 1].latitude) / 2);
//                          map.panTo(centerPoint);
//                          //连接所有点
//                          map.addOverlay(new BMap.Polyline(data.data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));
//
//                        })
//
//                      }
//                    }else{
//                      alert('暂无状态信息')
//                    }
//                  }else{
//                    alert(data.resdes)
//                  }
//
//                }
//              })
//            }
//          }else{
//            alert('暂无状态信息')
//          }
        }
      },
      components: {
      },
    }
</script>
