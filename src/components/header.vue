<style scoped>
  .headerText{
    color: #555555;
    font-size: 15px;
    margin-left: 15px;
    display: inline-block;
    margin-top: 25px;
    width: 210px;

  }
  .headerText span{
    padding-right:10px;
  }
  .header{
    background: #fff;
    width:100%;

  }
  .headBox{
    background: #fff;
    padding: 0 14%;
    margin: 0 auto;
    overflow: hidden;
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
  .header img{
    height: 40px;
    width: 115px;
  }
  .headerLeft{
    font-size: 15px;
    color: #555;
    display: flex;
    margin-top: 20px;
    margin-right: 75px;
  }
  .signOut{
    color: #2EAB3B;
    margin:0 10px;
    cursor: pointer;
    display: inline-block;
    width: 40px;
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
    margin-top: -6px;
  }

  .creatCaseDialog,.cityDialog,.AdressDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .creatCaseDialogBox, .cityDialogBox,.AdressDialogBox{
    width: 38%;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;

    position: relative;
  }
  .creatCaseDialogBox{
    min-height: 620px;
  }
  .AdressDialogBox{
    width: 45%;
  }
  .cityDialogBox{
    margin-top: 20vh;
  }
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }

  .creatCaseDialog .scrollBox{
    /*overflow-y: scroll;*/
    max-height: 60vh;
  }
  .imgBox img{
    height: 68px;
    width: 68px;
    margin:0 auto;
  }

  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
  }
  .closCreatDiolag, .closeCityDiolag, .closeAdressDiolag{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .creatCaseDialog{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .creatCaseDialog .addinsitituteSure{
    color: #fff;
    font-size: 15px;
    display: inline-block;
    line-height: 35px;
    height: 35px;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    margin-left: 18%;
    cursor: pointer;
  }
  .sureAdress{
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 15px;
    padding: 6px 12px;
  }
  .addinsitituteInput{
    padding: 10px 0 5px 10%;
  }
  .addinsitituteInput .addinsitituteSpan{
    display: inline-block;
    min-width: 20%;
    font-size: 15px;
  }
  .addinsitituteInput .creatInput{
    height:35px;
    line-height:35px;
    padding-left: 6px;
    border: 1px solid #bbb;
    border-radius:4px;
    width: 200px;
  }
  .addinsitituteInput .creatInputNo{
    height:35px;
    line-height: 35px;
    border: 1px solid #bbb;
    border-radius:4px;
    width: 35px;
    background: #fff;
    border-right: none;
    text-align: center;
  }


  .inputadressBox{
    margin: 15px;
  }
  .inputadressBox span{
   margin-left: 15px;
  }
  .adressInput{
    border: 1px solid #bbb;
    height: 35px;
    border-radius: 5px;
    padding-left: 5px;
    margin-bottom: 15px;
  }
  .oneMonitor{
     font-size: 15px;
  }
    .el-icon-search{
      font-size:20px;
      margin-left: -25px;
      cursor: pointer;
    }
  #allmap{
    width: 100%;
    height:38vh;
  }
  .el-icon-location{
    font-size: 20px;
    color: #666;
    margin-left: -26px;
  }
  .radio__inner {
    position: relative;
    display: inline-block;
    border: 1px solid #d8dce5;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-left: 20%;
  }
  .radio__inner::after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%) scale(0);
    transform: translate(-50%,-50%) scale(0);
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6), -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6);
  }
  .isChecked{
    border-color: #2EAB3B;
    background: #2EAB3B;
  }
  .isChecked::after{
    transform: translate(-50%,-50%) scale(1);
  }
</style>
<template>
  <div>

    <div class="header" style="font-size: 85%;">
      <div class="headBox">
        <div style="display: flex;">
          <img style="margin-top:10px;" src="../images/logo.png"/>
          <span class="headerText"> <span>|</span>事故e处理-视频查勘定损平台</span>
          <div class="menu" v-if="headerActiveOne == 'true'">
            <el-tabs v-model="activeName" @tab-click="handleClick" >
              <el-tab-pane  label="案件管理" name="first">
              </el-tab-pane>

            </el-tabs>
          </div>
          <div class="menu" v-else @click="goInsitituList">
            <el-tabs v-model="activeNameTwo" @tab-click="handleClick">
              <el-tab-pane  label="机构管理" name="third">
              </el-tab-pane>
              <!--<el-tab-pane  label="查勘员管理" name="four">-->
              <!--</el-tab-pane>-->
            </el-tabs>
          </div>
        </div>
        <div class="headerLeft">
          <span class="userName">{{chinaName}}</span>
          <span class="userInsitu">({{userName}})</span>
          <span class="signOut" @click="clickSignOut">退出</span>

        </div>
      </div>

    </div>
    <case-manage v-if="caseActive"></case-manage>
    <seat-manage v-if="seatActive"></seat-manage>
    <institution-manage v-if="insitituteActive"></institution-manage>
    <survey-manage v-if="surveyActive"></survey-manage>
  </div>

</template>
<script>
//  import baiduAdress from '@/components/baiduAdress'
  import caseManage from '@/components/caseManage'
  import seatManage from '@/components/seatManage'
  import institutionManage from '@/components/institutionManage'
  import surveyManage from '@/components/surveyManage'
  import axios from 'axios'
//  import BMap from 'BMap'

  export default {
    data(){
      return{
        chinaName: '',
        userName: '',
        headerActiveOne: false,
        orgCode: "",
        surveyType: "1",
        mark: "1",
        cityOption: [],
        companeyOption: [],
        orgOption: [],
        reportno: "",
        person: "",
        licensenoTwo: "",
        phoneno: "",
        company: "",
        city: "",
        lng: "",
        lat: "",
        cityName: "",
        adressValue: "",
        accidentaddress: "",
        ajaxUrl: "/boot-pub-survey-manage",
        radio: '',
        getCity: "京",
        activeName: 'first',
        activeNameTwo: 'third',
        caseActive: true,
        seatActive: false,
        insitituteActive: true,
        surveyActive: false,
        cityData: ['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','贵','云','藏','陕','甘','青','宁','新','琼','渝','川','桂'],
      }
    },
    mounted() {
    },
    created(){
      this.chinaName = localStorage.getItem('chinaName')
      this.userName = localStorage.getItem('userName')
      this.headerActiveOne = localStorage.getItem('setHeaderActive');
      if(this.headerActiveOne == 'true'){
        this.insitituteActive = false;
        this.surveyActive = false;
        this.caseActive = true;
        this.seatActive = false;
      }else{
        this.insitituteActive = true;
        this.surveyActive = false;
        this.caseActive = false;
        this.seatActive = false;
      }
    },
    watch:{
      "activeName" (){
        if(this.activeName == "first"){
          this.caseActive = true;
          this.seatActive = false;
          this.insitituteActive = false;
          this.surveyActive = false;
        }else if(this.activeName == "second"){
          this.caseActive = false;
          this.seatActive = true;
          this.insitituteActive = false;
          this.surveyActive = false;
        }
      },
      "activeNameTwo"(){
        if(this.activeNameTwo == 'third'){
          this.caseActive = false;
          this.seatActive = false;
          this.insitituteActive = true;
          this.surveyActive = false;
        }else  if(this.activeNameTwo == 'four'){
          this.caseActive = false;
          this.seatActive = false;
          this.insitituteActive = false;
          this.surveyActive = true;
        }
      }
  },
    methods: {
      upcase(){
        this.licensenoTwo = this.licensenoTwo.toUpperCase();
        console.log(this.licensenoTwo)
      },
      goInsitituList() {
        this.$store.commit('setInsititutEditorActive', false);
      },
      //退出
      clickSignOut() {
        axios.post(this.ajaxUrl+"/pubsurvey/manage/login/v1/logout")
          .then(response => {
              if(response.data.rescode == 200){
                this.$store.commit('setCaseDetailActive', false);
                this.$store.commit('setInsititutEditorActive', false);
                this.$store.commit('setHeaderActive', false);
                this.$store.commit('setSignSeatsActive', false);
                this.$store.commit('getsurveyOrderId', "");
                this.$store.commit('getcaseListActive', false);
                this.$store.commit('getclickEditorActive', false);
                this.$store.commit('getinsitituPageno', 1);

                localStorage.removeItem('insititutEditorData');//机构编辑
                localStorage.removeItem('caseDetailData');//详情信息
                localStorage.removeItem("setHeaderActive");
                localStorage.removeItem("orgcode");//登录信息
                localStorage.removeItem("insitituData");//机构信息
                localStorage.removeItem("signSeatData");//坐席信息
                //清除缓存
                this.$router.push({path:"/"})
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
      },
      open4(resdes) {
        this.$message.error(resdes);
      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      initMap() {
        // 添加百度地图
       this.map = new BMap.Map("allmap");
       },
        handleClick(tab, event) {
        },
      checkState(){//改变状态

        },

        openCityDialog(){//打开城市
          $(".cityDialog").removeClass("hide")
        },
        closeCityDiolag(){//关闭城市遮盖层
          $(".cityDialog").addClass("hide")
        },
        selectCity(city){
          this.getCity = city;
          $(".cityDialog").addClass("hide")
        },
        openAdressDialog(){
          $(".AdressDialog").removeClass("hide")
        },
        closeAdressDiolag(){
          $(".AdressDialog").addClass("hide")
        },
        searchAdress(){
          if(this.adressValue!=''){
            var map = '';
            map = new BMap.Map("allmap");
            map.enableScrollWheelZoom();    //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
            map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
            map.addControl(new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT }));   //右下角，打开
            map.clearOverlays();//清空原来的标注
            var keyword = this.adressValue;
            var localSearch = new BMap.LocalSearch(map);
            localSearch.enableAutoViewport(); //允许自动调节窗体大小
            localSearch.setSearchCompleteCallback(function (searchResult) {
              var poi = searchResult.getPoi(0);
              if(poi === undefined){
                alert('请输入合法地址')
              }else{
  //              $("#container").removeClass('none');
                $(".sureAdress").removeClass('hide')
                document.getElementById("result_Lng").value = poi.point.lng ;
                document.getElementById("result_Lat").value = poi.point.lat;
                map.centerAndZoom(poi.point, 13);
                var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地方对应的经纬度
                var geoc = new BMap.Geocoder();
                map.addOverlay(marker);
                marker.enableDragging();  //设置可拖拽
                marker.addEventListener("dragend", function(e){  //拖动事件
                  var pt = e.point;
                  var dizhi;
                  geoc.getLocation(pt, function(rs){
                    var addComp = rs.addressComponents;
                    dizhi = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    document.getElementById('text_').value = dizhi;//更新地址数据
                    this.adressValue = dizhi;
                    var content = dizhi + "<br/><br/>经度：" + e.point.lng + "<br/>纬度：" + e.point.lat;
                    var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
                    marker.openInfoWindow(infoWindow,map.getCenter());//将经纬度信息显示在提示框内
                  });
                  document.getElementById("result_Lng").value = e.point.lng;
                  document.getElementById("result_Lat").value = e.point.lat;

                });
                var content = document.getElementById("text_").value + "<br/><br/>经度：" + poi.point.lng + "<br/>纬度：" + poi.point.lat;
                var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
                marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
                // marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
              }
            });
            localSearch.search(keyword);
          }else{
            alert("请输入地址")
          }
        },
        sureAdress() {
          if(this.adressValue == ""){
            alert("请输入地址")
          }else{
            this.accidentaddress = this.adressValue;
            this.lng = document.getElementById("result_Lng").value;
            this.lat = document.getElementById("result_Lat").value;
            $(".AdressDialog").addClass("hide")
            $(".sureAdress").addClass('hide')
            document.getElementById("result_Lng").value = "";
            document.getElementById("result_Lat").value = "";
          }
        },
        checkRadio(){
          $(".radio__inner").toggleClass("isChecked");
          if($(".radio__inner").attr("class").indexOf("isChecked")>0){
            this.mark = "1";
          }else{
            this.mark = "0";
          }
        }
  },
    components: {
      caseManage,
      seatManage,
      institutionManage,
      surveyManage,
    },
  }

</script>

