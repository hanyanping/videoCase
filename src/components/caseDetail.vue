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
    width: 1000px;
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
    display: -webkit-box;
  }
  .aimCarImg li{
    width: 22%;
    padding:12px 0px;
    margin-left: 10px;
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
    margin-top: -4px
  }
  .videoBox{
    text-align:center;
  }
.videoBox video{
  height: 200px;
  width: 30%;
  padding: 20px;

}
  /*video::-webkit-media-controls-enclosure {*/
    /*overflow:hidden;*/
  /*}*/
  /*video::-webkit-media-controls-panel {*/
    /*width: calc(100% + 30px);*/
  /*}*/
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
  .download,.cancel{
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
  <div class="caseDetail">
    <div class="caseDetailBox">
      <span @click="closCaseDetail" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">案件详情</h4>
        <div class="detailContent">
          <div class="caseInfo" id="caseInfo">
              <div class="caseInfoBox">
                <span>查勘号：</span><i class="chakanno">{{caseDetailData.accidentInfo .surveyNo }}</i>
                <span>保险报案号：</span><i class="baoxianNo">{{caseDetailData.accidentInfo .insuranceReportNo}}</i>
                <span>事故时间：</span><i >{{caseDetailData.accidentInfo .accidentTime }}</i>
              </div>
              <div class="caseInfoBox">
                <span>案件状态：</span><i>{{caseDetailData.accidentInfo .survey}}</i>
                <div class="caseInfoBoxAdress" >
                  <span class="caseInfoBoxTitle" >事故地点：</span>
                  <div class="caseInfoBoxInfo">
                    <i style="display:inline-block;">{{caseDetailData.accidentInfo .accidentAddr}}</i>
                    <img @mouseenter="enter" @mouseleave="leave" src="../images/adress.png"/>
                    <div id="detailMap" class="hide" style="height:250px;width:250px;"></div>
                  </div>
                </div>
              </div>
              <div class="caseInfoBox" v-if="caseDetailData.accidentInfo.exceptionReason!=null"><span>异常原因：</span><i>{{caseDetailData.accidentInfo.exceptionReason}}</i></div>
          </div>
          <div class="AimCar">
            <div class="aimheader">标的车</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{caseDetailData.reportVehicleInfo.vehicleLicenseNo}}</td><td>车主姓名:</td><td>{{caseDetailData.reportVehicleInfo.reporterName}}</td><td>车主电话: </td><td>{{caseDetailData.reportVehicleInfo.reporterPhoneNo}}</td></tr>
                <tr><td>保险公司:</td><td> {{caseDetailData.reportVehicleInfo.insuranceCompanyName}}</td><td>保险公司城市： </td><td>{{caseDetailData.reportVehicleInfo.insuranceCompanyCity}}</td><td> 处理机构：</td><td>{{caseDetailData.reportVehicleInfo.processOrgName}}</td></tr>
              </table>
              <div class="aimCarImg" v-if="totalCountAim != 0">
                <ul id="scaleImg">
                  <li v-for="item in recordsImg">
                    <img :data-src="item.photoUri" :src="item.smallPhotoUri">
                    <br>
                    <span>{{item.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging" v-if="totalCountAim < 5">
                  <el-pagination  @current-change="handleCurrentChangeAim"
                                  :current-page="1"
                                  :page-size = "1"
                                  layout="prev,next"
                                  :total="totalCountAim">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="thirdCar AimCar" v-if="thirdActive" v-for="(item,index) in thirdCar">-->
          <div class="thirdCar AimCar" v-for="(item,index) in thirdCar">
            <div class="aimheader">三者车({{item.vehicleLicenseNo}})</div>
            <div class="aimInfo">
              <table class="table" border="0" cellspacing="0" cellpadding="0">
                <tr><td>车牌号:</td><td>{{item.vehicleLicenseNo}}</td><td>车主电话: </td><td>{{item.contactPhoneNo}}</td></tr>
              </table>
              <div class="aimCarImg">
                <ul class="suibian">
                  <li v-for="itemImg in item.thirdCarImg">
                    <img :data-src="itemImg.photoUri" :src="itemImg.smallPhotoUri">
                    <br>
                    <span>{{itemImg.photoTypeComment}}</span>
                  </li>
                </ul>
                <div class="phonesPaging" v-if="item.total > 5 ">
                  <el-pagination @click="getThirdImg(item.vehicleLicenseNo)" @current-change='handleCurrentChangethird'
                                  :current-page="1"
                                  :page-size = "4"
                                  layout="prev,next"
                                  :total="item.total">
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <div class="thirdCar AimCar " style="display:none;">
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
                <tr><td>现场查勘员:</td><td @click="mapRouter(coordinates)">{{caseDetailData.sceneSurveyorInfo.sceneSurveyorName}}<img src="../images/adress.png"/></td><td>现场查勘员电话:</td><td>{{caseDetailData.sceneSurveyorInfo.sceneSurveyorPhoneNo}}</td><td>预计到达时间:</td><td>{{caseDetailData.sceneSurveyorInfo.expectArriveTime}}</td>
                  <td>实际到达时间</td><td>{{caseDetailData.sceneSurveyorInfo.actualArriveTime}}</td></tr>
                <tr v-if="webSurveyorInfoActive"><td> 后台坐席: </td><td>{{caseDetailData.webSurveyorInfo.webSurveyorName}}</td><td>处理开始时间: </td><td>{{caseDetailData.webSurveyorInfo.startProcessTime}}</td><td>处理结束时间:</td><td>{{caseDetailData.webSurveyorInfo.endProcessTime}}</td><td></td><td></td></tr>
              </table>
              <div style="width:100%;height:300px;margin:0 auto" class="mapBox hide">
                <div style="width:100%;height:300px;margin:0 auto"  id="mapContent" > </div>
              </div>

            </div>
          </div>
          <div class="footerBox">
            <span class="download" @click="downLoadCase" v-if="caseDetailData.accidentInfo.surveyStatus == '06'">下载</span>
            <span class="cancel" @click="cancelCase" v-if="caseDetailData.accidentInfo.surveyStatus == '07' || caseDetailData.accidentInfo.surveyStatus == '06'">取消订单</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Viewer from 'viewerjs';
import axios from 'axios'
export default {
  data() {
      return{
        currentPageNoAim: 1,//当前页码
        pageSizeAim: 4,//每页记录数
        totalCountAim: 10,//总条数
        recordsImg: [],//标的车图片
        caseDetailData: {},
        surveyNo: "",
        thirdCar: [],
        siStatusText: '',
        webSurveyorInfoActive: false,
        thirdActive: false,
        longitude: "116.468453",
        latitude: "39.899186",
        ViewerAimActive: false,
        coordinates: [],
        mark: '',
        surveyId: '',
      }
    },
  watch:{

  },
    created(){
       this.caseDetailData =  JSON.parse(localStorage.getItem("caseDetailData"));
       this.longitude = this.caseDetailData.accidentInfo.accidentAddrLongitude;
       this.latitude = this.caseDetailData.accidentInfo.accidentAddrLatitude;
       this.coordinates = this.caseDetailData.accidentInfo.coordinates;
       this.mark = this.caseDetailData.accidentInfo.appSource;
       this.surveyId = this.caseDetailData.id;
      this.coordinates = [
         {
           "longitude": "120.21354539227",
           "latitude": "30.285018192076"
         },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           },
           {
             "longitude": "120.21354539227",
             "latitude": "30.285018192076"
           }
         ]
       if(this.caseDetailData.accidentVehicleInfos.length == 0){
         this.thirdActive = false;
       }else{
         this.thirdActive = true;
       }
       if(this.caseDetailData.webSurveyorInfo == null){
         this.webSurveyorInfoActive = false;
       }else{
         this.webSurveyorInfoActive = true;
       }
       if(this.caseDetailData.accidentInfo.surveyStatus  != null){
          if(this.caseDetailData.accidentInfo.surveyStatus  == "08"){
            this.siStatusText = "已查勘"
          }else if(this.caseDetailData.accidentInfo.surveyStatus  == "07"){
            this.siStatusText = "查勘中"
          }else if(this.caseDetailData.accidentInfo.surveyStatus  == "06"){
            this.siStatusText = "待查勘"
          }else if(this.caseDetailData.accidentInfo.surveyStatus  == "09"){
            this.siStatusText = "查勘完成"
          }else if(this.caseDetailData.accidentInfo.surveyStatus  == "11"){
            this.siStatusText = "查勘订单已取消"
          }else if(this.caseDetailData.accidentInfo.surveyStatus  == "10"){
            this.siStatusText = "待补拍"
          }
       }
//       this.surveyNo = this.caseDetailData.accidentInfo.surveyNo;
      this.surveyNo = "dsajd32sljhf49f09368a27ac0df1704";
       if("reportVehicleInfo" in this.caseDetailData){

//        this.getCasePhones(1,4,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
         this.getCasePhones(1,4,"京111111",this.surveyNo,"")//测试用
       }
      this.caseDetailData.accidentVehicleInfos=[{ "vehicleLicenseNo": "京111111","contactPhoneNo": "联系电话-002" },
        { "vehicleLicenseNo": "京111111","contactPhoneNo": "联系电话-001"}//测试用
      ];
       if(this.caseDetailData.accidentVehicleInfos.length != 0){
         for(let i in this.caseDetailData.accidentVehicleInfos){
           this.getCasePhones(1,4,this.caseDetailData.accidentVehicleInfos[i].vehicleLicenseNo,this.surveyNo,i)
         }
       }
    },
    mounted() {
    },
    props: {
//      caseOrder: string
    },
      methods: {
        open4(resdes) {
          this.$message.error(resdes);
        },
        open2(resdes) {
          this.$message.success(resdes);
        },
        getThirdImg(vehicleLicenseNo){
          console.log(vehicleLicenseNo)
          console.log(this.handleCurrentChangethird())
          var currentPage = this.handleCurrentChangethird()
          console.log(currentPage)
          this.getCasePhones(currentPage,1,vehicleLicenseNo,this.surveyNo,"")
        },
        handleCurrentChangethird(currentPage){
         return currentPage;
        },
        handleCurrentChangeAim(currentPage) {//跳转
          //当前页改变调用接口 currentPage   pageSizeAim
          console.log(currentPage);
          this.currentPageNoAim = currentPage;
          this.getCasePhones(this.currentPageNoAim,1,this.caseDetailData.reportVehicleInfo.vehicleLicenseNo,this.surveyNo,"")
        },
        getCasePhones(currentPageNo,pageSize,vehicleLicenseNo,surveyNo,source){
          var paramData = {
            "currentPageNo": currentPageNo,
            "pageSize": pageSize,
            "vehicleLicenseNo": vehicleLicenseNo,
            "surveyNo": surveyNo
          }
          axios.post(this.ajaxUrl+"/survey-detail/v1/photo/page",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                if(response.data.data.records.length != 0){
                  if(source == ""){
                    this.recordsImg = response.data.data.records;
                    this.totalCountAim = response.data.data.total;
                    this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg'), {
                        url: 'data-src',
                        navbar:false,
                        toolbar:true,
                        loop: true
                      })
                    })
                  }else{
                    var thirdLength = this.caseDetailData.accidentVehicleInfos.length;
                    for(let i in this.caseDetailData.accidentVehicleInfos){
                        if(i == source){
                          this.caseDetailData.accidentVehicleInfos[i].thirdCarImg = response.data.data.records
                          this.caseDetailData.accidentVehicleInfos[i].total = response.data.data.total;
                          this.caseDetailData.accidentVehicleInfos[i].pageNum = response.data.data.pageNum
                        }
                    }

                    if(source == thirdLength-1){
                      this.$nextTick(() => {
                        this.thirdCar = this.caseDetailData.accidentVehicleInfos;
                        console.log(this.thirdCar)
                        for (let i in this.thirdCar) {
                          this.$nextTick(() => {
                            new Viewer(document.getElementsByClassName('suibian')[i], {
                              url: 'data-src',
                              navbar: false,
                              toolbar: true,
                              loop: true
                            })
                          })

                        }
                      })
                    }


                  }
                }
              }else{

              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        closCaseDetail(){
          $(".caseDetail").addClass("hide")
          this.$store.commit('setCaseDetailActive', false)
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
        mapRouter(coordinates){

          var data = coordinates;
          $(".mapBox").toggleClass("hide");



          if($('.mapBox').attr('class').indexOf('none') < 0){
            var map = new BMap.Map("mapContent");
            var length = data.length;
            map.enableScrollWheelZoom(true);
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
//                                                          	for(var i =0;i<length;i++){
//                                                          	    driving.search(new BMap.Point(data.data[0].longitude,data.data[0].latitude),new BMap.Point(data.data[length-1].longitude,data.data[length-1].latitude),{waypoints:[new BMap.Point(data.data[i].longitude,data.data[i].latitude)]});//waypoints表示途经点
//                                                          	}
            for(var i =0;i<length;i++){
              driving.search(new BMap.Point(data[0].longitude,data[0].latitude),new BMap.Point(data[length-1].longitude,data[length-1].latitude));
            }
            driving.setSearchCompleteCallback(function() {
              //得到路线上的所有point
              data = driving.getResults().getPlan(0).getRoute(0).getPath();
              //画面移动到起点和终点的中间
              var centerPoint;
              centerPoint = new BMap.Point((data[0].longitude + data[data.length - 1].longitude) / 2, (data[0].latitude + data[data.length - 1].latitude) / 2);
              map.panTo(centerPoint);
              //连接所有点
              map.addOverlay(new BMap.Polyline(data, {strokeColor: "#f00", strokeWeight: 5, strokeOpacity: 1}));

            })

          }





        },
        downLoadCase(){
          var  surveyId = parseInt(21)
          axios.get(this.ajaxUrl+"/survey-detail/v1/download/"+surveyId)
            .then(response => {
              if(response.data.rescode == 200){
//                this.open2(response.data.resdes);
              }else{
                if(response.data.rescode == "300"){
                  this.$router.push({path:"/"})
                }
//                this.open4(response.data.resdes);
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        },
        cancelCase(){
          var paramData = {
            "action": "cancel",
            "surveyno": this.surveyNo,
            "mark": this.mark
          }
          axios.post(this.ajaxUrl+"/pub/survey/v1/action",paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.open2(response.data.resdes);
                this.$store.commit('setCaseDetailActive', false);//关闭详情组件组件
                this.$store.commit('getcaseListActive', true)//调用列表接口
              }else{
                if(response.data.rescode == "300"){
                  this.$router.push({path:"/"})
                }
                this.open4(response.data.resdes);
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
        },
      components: {
      },
    }
</script>
