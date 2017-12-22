<style scoped>
  .caseManage{
    margin: 15px auto;
    width: 1278px;
    overflow-y: scroll;
    height: 82vh;
    padding-bottom: 20px;
  }
  .caseContent{
    display: flex;
    padding-bottom:15px;
  }
  .caseLeft,.caseRight{
    width:246px;
    height: 488px;
    background:#fff;
  }
  .caseCenter{
    width: 746px;
    margin: 0 20px;
  }
  .caseManage .video-player{
    width: 100%;
    background: #515151;
    color: #fff;
    height: 488px;
  }
  .caseLeft .tit, .caseRight .tit {
    padding: 15px 0 5px;
  }
  .caseLeft .tit h4, .caseRight .tit h4{
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
    font-weight: 600;
  }
  .editorCarInfo h4{
    font-size: 20px;
    font-weight: 600;
    margin-top:20px;
  }
  .caseLeft .cont, .caseRight .cont{
    padding: 0 20px 20px;
  }
 .m-noContent-mod {
    text-align: center;
    padding: 100px 0;
  }
   .m-noContent-mod .mnm-icon {
    margin-bottom: 20px;
  }
    .m-noContent-mod p {
      color: #999;
      font-size: 15px;
  }
  .casePhotos .g-content-row {
    margin-bottom: 20px;
    overflow: hidden;
  }
  .casePhotos .g-content-row .gcr-mod{
    background: #fff;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit {
    padding: 10px 0 5px;
    position: relative;
    overflow: hidden;
    display: flex;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit h4 , .typeContent h4{
    margin-top: 5px;
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
    font-weight: 600;
  }
  .typeContent h4{
    border-left: none;
  }
  .gcr-tit .m-carNo-list {
    height: 40px;
    margin-left: 30px;
  }
  .gcr-tit .u-edit-icon {
    width: 16px;
    height: 14px;
    display: inline-block;
    background: url(../images/icon_edit_0.png) center center no-repeat;
    margin-left: 10px;
  }
 .gcr-tit .m-carNo-add {
    cursor: pointer;
    width: 24px;
    height: 40px;
    display: inline-block;
    background: url(../images/icon_add_0.png) center center no-repeat;
    margin-left: 10px;
    -webkit-transition: all .2s ease-in 0s;
    transition: all .2s ease-in 0s;
  }
  .gcr-tit .m-carNo-list dd {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #dcdcdc;
    margin-right: 10px;
    cursor: pointer;
    color: #35aa42;
  }
  .gcr-tit .m-carNo-list dd:hover{
    border: 1px solid #35aa42;
  }
  .casePhotos .g-content-row .gcr-cont {
    padding: 10px 0;
    height: 200px;
  }
 #picListZone .suibian{
    display: -webkit-box;
    margin: 0px;
    position:absolute;
    left:0;
  }

  #picListZone .suibian img {
    width: 168px;
    height: 140px;
    display: block;
  }
  #picListZone .suibian  .liImgbox{
    background: #dcdcdc;
    position: relative;
    width: 168px;
    left: 0;
    top: 20px;
    height: 140px;
    margin: 0 8px;
  }
  #picListZone{
    width: 1210px;
    margin: 0 auto;
    display: flex;
    height: 200px;
    justify-content: center;
  }
  #picListZone .ulBox{
    position:relative;
    width: 1110px;
    overflow: hidden ;
  }
  #picListZone .suibian  .title {
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    background: rgba(255,255,255,.5);
    z-index: 99;
  }
  .scalImgBox,.editorCarInfo,.takePhoneImgBox,.takePhonetypeBox{
    background: rgba(0,0,0,0.8);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .takePhonetypeBox{
    z-index: 101;
  }
  .scalImgBox .bigImgContent,.takePhoneImgBox .takebigImgContent {
    width: 600px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    height: 820px;
    position: relative;
  }
  .takePhonetypeBox .typeContent{
    width: 660px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    height: 820px;
    position: relative;
  }
  .editorCarInfo .editorContent{
    width: 350px;
    margin: 15vh auto;
    background: #fff;
    padding: 20px;
    height: 280px;
    position: relative;
  }
  .closeCaleImgBox,.closeEditorCar,.closeCityDiolag,.closetypeBox{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
    cursor: pointer;
  }
  .cityDialogBox .cityNameBox{
    width: 85%;
    text-align: center;
    clear: both;
    margin-left: 30px;
  }
  .cityDialogBox .cityNameBox .citySimpleName{
    width: 10%;
    height: 35px;
    line-height: 35px;
    border: 1px solid #bbb;
    color: #232323;
    border-radius: 5px;
    text-align: center;
    margin-right: 10px;
    float: left;
    margin-top: 20px;
    cursor: pointer;
  }
  .closeEditorCar{
    top: 5px;
  }
  .imgSize{
    width: 500px;
    height: 680px;
    margin:15px auto;
    vertical-align: middle;
  }
  .imgSize img{
    max-width:100%;
    max-height: 100%;
  }
  .prebutton{
    position: absolute;
    top: 35vh;
    left:10px;
    color:#2EAB3B;
    font-size:30px;


  }
  .nextbutton{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 35vh;
    color:#2EAB3B;
    font-size:30px;

  }

  .deletImg,.saveImg,.takedeletImg,.takesaveImg{
    color: #fff;
    width: 70px;
    height: 35px;
    margin-right:20px;
    line-height: 35px;
    text-align: center;
  }
  .deletImg, .takedeletImg{
    background: #e75b5f;
  }
  #doing .item-txt-list {
    border-bottom: 1px dashed #dcdcdc;
    padding: 15px 0;
    line-height: 25px;
  }
  #doing .item-txt-list p {
    color: #666;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-btn-mod{
    margin: 15px 0;
  }
  .item-btn-mod #online{
    background: #efeff4;
    color: #999;
    border: 1px solid #dcdcdc;
    padding:8px;
    display: inline-block;
    width: 85px;
    text-align: center;
  }
  .item-btn-box{
    padding:15px 0;
  }
  #onlineLoding{
    background: #efeff4;
    color: #999;
    border: 1px solid #dcdcdc;
    padding: 8px;
    display: inline-block;
    width: 85px;
    text-align: center;
  }
  #onLinking {
    padding: 8px;
    border: 1px solid #35aa42;
    min-width: 65px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #35aa42;
  }
  #onOff{
    color: #e30920;
    border: 1px solid #e30920;
    padding: 8px;
    display: inline-block;
    text-align: center;
    width: 85px;
  }
  #hangUp{
    padding: 8px;
    border: 1px solid #35aa42;
    min-width: 65px;
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: #35aa42;
    margin-left: 6px;
  }
  #nohangUp{
    color: rgb(153, 153, 153);
    background: rgb(239, 239, 244);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 220, 220);
    border-image: initial;
    padding:8px;
    display: inline-block;
    text-align: center;
    min-width: 85px;
    margin-left:8px;
  }

  .item-btn-max{
    width:195px;
  }
   .item-btn-max #finishOrder {
    background: #35aa42;
    color: #fff;
    text-align: center;
    font-size: 16px;
    display: block;
    padding: 10px;
  }
  .item-btn-max #nofinishOrder{
    background: rgb(239, 239, 244);
    color: rgb(153, 153, 153);
    text-align: center;
    font-size: 16px;
    display: block;
    padding: 10px;
  }
  #wait .wait-law-case-mod {
    overflow-x: hidden;
    overflow-y: auto;
    height: 420px;
  }
  .wait-law-case {
    border: 1px dashed #dcdcdc;
    padding: 10px;
    margin-top: 15px;
  }
  .wait-law-case ul li {
    font-size: 14px;
    line-height: 24px;
  }
  .inputBox{
    margin: 30px 20px;
  }
  .inputBox input{
    border:1px solid #bbb;
    border-radius:6px;
    height:35px;
    padding-left: 6px;
    width:180px;
   }
  .editorContent .inputBox span{
    padding-right: 6px;
  }
  .saveCarInfo{
    color: #fff;
    border-radius:5px;
    height: 35px;
    display: inline-block;
    width:80px;
    line-height:35px;
  }

.inputBox .creatInputNo {
  height: 35px;
  line-height: 35px;
  border: 1px solid #bbb;
  border-radius: 4px;
  width: 35px;
  background: #fff;
  border-right: none;
  text-align: center;
  margin-right: -6px;
}
  .cityDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 200;
  }
  .cityDialogBox{
    width: 38%;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    margin-top: 20vh;
    position: relative;
  }
  .prev {
    background: url(../images/icon_ctrl_1.png) center center no-repeat;
     height:32px;
     width: 32px;
    margin-top:70px;
  }
   .next {
    background: url(../images/icon_ctrl_0.png) center center no-repeat;
     height:32px;
     width: 32px;
     margin-top:70px;
  }
   .m-selectImgType-tit{
     margin-top: 20px;
   }
   .m-selectImgType-tit ul li {
    border: 1px solid #dcdcdc;
    position: relative;
    text-align: center;
    margin-right: 15px;
    font-size: 16px;
  }
  .m-selectImgType-tit ul li a{
     height: 48px;
     line-height: 48px;
     width: 169px;
     text-align: center;
     display: inline-block
   }
  .m-selectImgType-cont dl dd a{
    height: 40px;
    min-width: 130px;
    display: inline-block;
    padding: 0 6px;
    line-height: 40px;
  }
   .m-selectImgType-tit ul li.showTag,  .m-selectImgType-tit ul li:hover, #selectImgTypeCont .showTag{
    border: 1px solid #35aa42;
  }
  .m-selectImgType-tit ul li .tag{
    position: absolute;
    right: -1px;
    top: 0;
    width: 30px;
    height: 28px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
    background-size: contain;
  }
  .m-selectImgType-cont {
    margin-top: 20px;
  }
  .m-selectImgType-cont dl dd {
    border: 1px solid #dcdcdc;
    position: relative;
    text-align: center;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 14px;
    float: left;
  }

  .m-selectImgType-cont dl dd .tag {
    position: absolute;
    right: -1px;
    top: 0;
    width: 30px;
    height: 28px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
    background-size: contain;
  }
  .m-selectImgType-cont dl dd:hover{
    border: 1px solid #35aa42;
  }
  .hoverBox{
    position: absolute;
    background: rgba(0,0,0,0.3);
    height:140px;
    width: 168px;
    z-index: 100;
    margin-left: 8px;
    margin-top:20px;
  }
 .hoverBox .openscalImgBox{
   position: relative;
   top: 50px;
   color: #fff;
   width: 50px;
   margin: 0 auto;
   height: 30px;
   text-align: center;
   line-height: 30px;
   border-radius: 4px;
   cursor: pointer;
 }
 .suibian li .tag {
    position: absolute;
    right: 0;
    top: 0;
    width: 48px;
    height: 46px;
    background: url(../images/icon_tag_0.png) center center no-repeat;
  }
  .bigImgContent .imgSize{
    position:relative;
    overflow: hidden;
  }
  .bigImgContent .imgSize ul{
    display: -webkit-box;
    margin: 0;
    position: absolute;
    left: 0;
  }
  .bigImgContent .imgSize ul li{
    width: 500px;
    height: 680px;
    text-align: center;
    line-height:680px;
  }

</style>
<template>

  <div class="caseManage">
    <div @click="openTakePhone">打开拍照</div>
    <div class="cityDialog hide">
      <div class="cityDialogBox">
        <span @click="closeCityDiolag" class="closeCityDiolag">×</span>
        <div class="cityNameBox clear">
          <span class="citySimpleName" v-for="item in cityData" @click="selectCity(item)">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="editorCarInfo hide">
      <div class="editorContent">
        <h4>车辆信息</h4>
        <span @click="closeEditorCar" class="right closeEditorCar">×</span>
        <div class="inputBox">
          <span>车牌号:</span>
          <input @click="openCityDialog" :value="getCity" type="text" readonly="readonly" class="creatInputNo"/>
          <input style="width:140px;" placeholder="请输入车牌号" type="text"/>
        </div>
        <!--<div class="inputBox">-->
          <!--<span>手机号:</span><input placeholder="请输入手机号" type="tel" maxlength="11"/>-->
        <!--</div>-->
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo">保存</span>
        </div>
      </div>
    </div>
    <div class="takePhoneImgBox hide">
      <div class="takebigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closetakeCaleImg" class="right closeCaleImgBox">×</span>
        <div class="imgSize">
          <img :src="takephotoUrl" />
          <div style="display: flex;justify-content: center;margin-top:20px;">
            <div class="takedeletImg">删除</div>
            <div class="takesaveImg backColorGreen" @click="openType">保存</div>
          </div>
        </div>
      </div>
    </div>
    <div class="takePhonetypeBox hide">
      <div class="typeContent">
        <h4>请选择照片类型</h4>
        <span @click="closetypebox" class="right closetypeBox">×</span>
        <div class="typeCar">
          <div class="m-selectImgType-tit">
            <ul style="display: flex;justify-content: center;">
              <li data-id="c0" data-licenseno="京111115" class="" @click="selectCar($event)">
                <a href="#" title="#">车牌号：京67115</a>
                <div class="tag hide"></div>
              </li>
              <li data-id="c0" data-licenseno="京111115" class="" @click="selectCar($event)" >
                <a href="#" title="#">车牌号：京88115</a>
                <div class="tag hide"></div>
              </li>
              <li data-id="c0" data-licenseno="京111115" class="" @click="selectCar($event)">
                <a href="#" title="#">车牌号：京133115</a>
                <div class="tag hide"></div>
              </li>
            </ul>
          </div>
          <div class="m-selectImgType-cont" id="selectImgTypeCont">
              <dl class="clear">
                <dd data-code="item.code" class="ddClass" @click="selectType($event)" v-for="(item,index) in carTypecarType">
                  <a href="#" title="#">{{item.type}}</a>
                  <div class="tag hide"></div>
                </dd>
              </dl>
            </div>
        </div>
      </div>
    </div>
    <div class="scalImgBox hide">
      <div class="bigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closeScaleImg" class="right closeCaleImgBox">×</span>
        <div class="prebutton" @click="preScaleImg">
          <img src="../images/icon_ctrl_1.png"/>
        </div>
        <div class="imgSize">
          <ul class="scaleUlBox">
            <li v-for="item in surveyPhotos" style="">
              <img :src="item.watermarkPhotoUrl" />
            </li>
          </ul>
        </div>
        <div class="nextbutton" @click="nextScaleImg">
          <img src="../images/icon_ctrl_0.png"/>
        </div>
      </div>
    </div>
    <div class="caseContent">
      <div class="caseLeft">
        <div class="tit">
          <h4>正在处理案件</h4>
          <input type="hidden" id="cc-userid">
          <input type="hidden" id="cc-password">
          <input type="hidden" id="cc-roomid">
        </div>
        <div id="doing" class="cont" >
          <div class="item-txt-list" v-if="doingActive">
            <p>车牌号：<span id="bdno">京111115</span> </p>
            <p>报案人姓名：桂花</p>
            <p>报案人电话：<span id="bdtel">13500000000<span></span></span></p>
            <p>保险公司：中国平安财产保险股份有限公司</p>
            <div class="address">报案地点：双井</div>

            <div class="item-txt-list">
              <p>查勘员姓名：徐秀芬 </p>
              <p>查勘员电话：18810331580</p>
              <p>查勘员状态：已到达现场</p>
            </div>
            <div class="item-btn-box">
              <p>订单状态：<span id="showStatus">待连线</span></p>
              <div class="item-btn-mod">
                <a href="javascript:;" v-if="!OnlineActive && !processOnlineActive && !toOnlineActive" class="link-btn mr10 disabled" id="online">连线</a>
                <a href="javascript:;" class="link-btn mr10 disabled " v-if="!OnlineActive && !processOnlineActive && toOnlineActive" id="onlineLoding" >连线中</a>
                <a href="javascript:;" class="link-btn mr10" v-if="!OnlineActive && processOnlineActive && !toOnlineActive" id="onLinking" >连线 <span id="countTime" data-max="30">30</span>s</a>
                <a href="javascript:;" class="link-btn mr10 warn" v-if="OnlineActive && !processOnlineActive && !toOnlineActive" id="onOff" >挂断</a>
                <a href="javascript:;" class="link-btn" v-if="twoButton" id="hangUp">挂起订单</a>
                <a href="javascript:;" class="link-btn" v-if="!twoButton" id="nohangUp">挂起订单</a>
              </div>
            </div>
            <div class="item-btn-max">
              <a href="javascript:;" class="link-btn-max" v-if="twoButton" id="finishOrder">查勘完成</a>
              <a href="javascript:;"  v-if="!twoButton" id="nofinishOrder">查勘完成</a>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无正在处理中的案件...</p>
          </div>
      </div>
      </div>
      <div class="caseCenter">
        <div class="video-player">
          <div id="video" class="video" style="width: 746px;height: 488px;">
            <img id="video-background" src="../images/video-default.png"/>
          </div>
        </div>
      </div>
      <div class="caseRight">
        <div class="tit">
          <h4>待处理案件</h4>
        </div>
        <div id="wait" class="cont">
          <div class="wait-law-case-mod" id="waitLawCase" v-if="waitActive">
            <div @dblclick ="goleftLine" title="双击进行处理" class="wait-law-case" data-surveyno="40ba9b77c7544e0eaf0ed62847f59010">
              <ul>
                <li>车牌号：京111115</li>
                <li>报案人电话：13500000000</li>
                <li>查勘员姓名：桂花</li>
                <li>查勘员电话：18810331580</li>
                <li>订单状态：挂起订单</li>
              </ul>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无待处理的案件...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="casePhotos">
      <div class="g-content-row">
        <div class="gcr-mod m-carNo-imgInfo">
          <div class="gcr-tit" id="carInfo">
            <h4>照片信息</h4>
            <dl class="m-carNo-list" id="selectImgType">
              <dd id="c0" class="data-car-m" data-licenseno="京111115">标的车：京111115<i data-type="1" @click="editorAim" data-id="839" data-licenseno="京111115" data-phone="13500000000" class="u-edit-icon"></i></dd>
            </dl>
            <div class="m-carNo-add" id="addCarNo" @click="openAddCar"></div>
          </div>
          <div class="gcr-cont" style="padding-top: 0">
            <div class="m-carNo-imgList" id="picListZone">
              <div class="prev" @click="preImginfo"></div>
              <div class="ulBox">
                <ul class=" suibian">
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.onecase)" @click.stop="scaleImg(imgBox.onesurveyPhotos,$event,'0','45度车辆前景照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.onecase">
                      <img src="../images/icon_noImg_1.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">45度车辆前景照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.onesurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">45度车辆前景照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.twocase)" @click.stop="scaleImg(imgBox.twosurveyPhotos,$event,'1','当事人和车辆合影')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.twocase">
                      <img src="../images/icon_noImg_2.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事人和车辆合影</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.twosurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事人和车辆合影</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.threecase)" @click.stop="scaleImg(imgBox.threesurveyPhotos,$event,'2','当事车辆车架号')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.threecase">
                      <img src="../images/icon_noImg_3.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事车辆车架号</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.threesurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事车辆车架号</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.fourecase)" @click.stop="scaleImg(imgBox.fouresurveyPhotos,$event,'3','车辆受损细节(1)')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.fourecase">
                      <img src="../images/icon_noImg_1.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">车辆受损细节(1)</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.fouresurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">车辆受损细节(1)</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.fivecase)" @click.stop="scaleImg(imgBox.fivesurveyPhotos,$event,'4','车辆受损细节(2)')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.fivecase">
                      <img src="../images/icon_noImg_1.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">车辆受损细节(2)</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.fivesurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">车辆受损细节(2)</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>

                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.sixcase)" @click.stop="scaleImg(imgBox.sixsurveyPhotos,$event,'5','交强险标志')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.sixcase">
                      <img src="../images/icon_noImg_4.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">交强险标志</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.sixsurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">交强险标志</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.sevencase)" @click.stop="scaleImg(imgBox.sevensurveyPhotos,$event,'6','银行卡照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.sevencase">
                      <img src="../images/icon_noImg_5.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">银行卡照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.sevensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">银行卡照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.eightcase)" @click.stop="scaleImg(imgBox.eightsurveyPhotos,$event,'7','其他')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.eightcase">
                      <img src="../images/icon_noImg_6.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">其他</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.eightsurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">其他</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>

                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.nighcase)" @click.stop="scaleImg(imgBox.ninesurveyPhotos,$event,'8','事故认定书')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.nighcase">
                      <img src="../images/icon_noImg_7.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">事故认定书</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.ninesurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">事故认定书</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.tencase)" @click.stop="scaleImg(imgBox.tensurveyPhotos,$event,'9','行驶本照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.tencase">
                      <img src="../images/icon_noImg_8.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">行驶本照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.tensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">行驶本照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.elevencase)" @click.stop="scaleImg(imgBox.elevensurveyPhotos,$event,'10','驾驶证照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.elevencase">
                      <img src="../images/icon_noImg_9.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">驾驶证照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.elevensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">驾驶证照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.twelvecase)" @click.stop="scaleImg(imgBox.twelvesurveyPhotos,$event,'11','当事人签名照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.twelvecase">
                      <img src="../images/icon_noImg_2.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事人签名照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.twelvesurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">当事人签名照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.thirteencase)" @click.stop="scaleImg(imgBox.thirteensurveyPhotos,$event,'12','身份证正面照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.thirteencase">
                      <img src="../images/icon_noImg_10.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">身份证正面照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.thirteensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">身份证正面照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.fourteencase)" @click.stop="scaleImg(imgBox.fourteensurveyPhotos,$event,'13','身份证背面照片')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.fourteencase">
                      <img src="../images/icon_noImg_11.jpg">
                      <br>
                      <span class="title">
                        <a href="javascript:;">身份证背面照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.fourteensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">身份证背面照片</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)">
                    <div class="hoverBox hide">
                      <div v-if="!(caseActive.fifteencase)" @click.stop="scaleImg(imgBox.fifteensurveyPhotos,$event,'14','查勘员与车辆合影')" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox" v-if="caseActive.fifteencase">
                      <img src="../images/3.png">
                      <br>
                      <span class="title">
                        <a href="javascript:;">查勘员与车辆合影</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                    <div class="liImgbox" v-else>
                      <div v-for="(item,index) in imgBox.fifteensurveyPhotos">
                        <img v-if="index == 0" :src="item.watermarkPhotoUrl">
                      </div>
                      <br>
                      <span class="title">
                        <a href="javascript:;">查勘员与车辆合影</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="next" @click="nextImgInfo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import caseList from '@/components/caseList'
  import caseMonitor from '@/components/caseMonitor'
  import Viewer from 'viewerjs';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
//  import Swiper from 'swiper/dist/js/swiper.js'
  export default {
    data() {
      return{
        surveyPhotos:[],//同种类型图片
        imglength: 15,//缩略图片个数,
        scalImgLength:"",//同种图片个数
        imgBox:{

          'onesurveyPhotos':[],
          'twosurveyPhotos':[],
          'threesurveyPhotos':[],
          'fouresurveyPhotos':[],
          'fivesurveyPhotos':[],
          'sixsurveyPhotos':[],
          'sevensurveyPhotos':[],
          'eightsurveyPhotos':[],
          'ninesurveyPhotos':[],
          'tensurveyPhotos':[],
          'elevensurveyPhotos':[],
          'twelvesurveyPhotos':[],
          'thirteensurveyPhotos':[],
          'fourteensurveyPhotos':[],
          'fifteensurveyPhotos':[],
          "sixteensurveyPhotos": []
        },
        caseActive: {
          "onecase": true,
          "twocase": true,
          "threecase": true,
          "fourecase": true,
          "fivecase": true,
          "sixcase": true,
          "sevencase": true,
          "eightcase": true,
          "nighcase": true,
          "tencase": true,
          "elevencase": true,
          "twelvecase": true,
          "thirteencase": true,
          "fourteencase": true,
          "fifteencase": true,
          "sixteencase": true
        },
        carTypecarType: [
          {"imgUrl":"../images/icon_noImg_1.jpg",'type':"45度车辆前景照片","code":"0"},
          {"imgUrl":"",'type':"当事人和车辆合影","code":"1"},
          {"imgUrl":"",'type':"当事车辆车架号","code":"2"},
          {"imgUrl":"",'type':"交强险标志","code":"5"},
          {"imgUrl":"",'type':"银行卡照片","code":"6"},
          {"imgUrl":"",'type':"其它照片","code":"7"},
          {"imgUrl":"",'type':"事故认定书","code":"8"},
          {"imgUrl":"",'type':"行驶本照片","code":"9"},
          {"imgUrl":"",'type':"驾驶证照片","code":"10"},
          {"imgUrl":"",'type':"身份证正面照片","code":"12"},
          {"imgUrl":"",'type':"身份证背面照片","code":"13"},
        ],
        takephotoUrl:'',
        cityData: ['京','津','冀','晋','蒙','辽','吉','黑','沪','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','贵','云','藏','陕','甘','青','宁','新','琼','渝','川','桂'],
//        //倒计时
//        twoButton: true,
//        toOnlineActive: false,
//        processOnlineActive: true,
//        OnlineActive: false,

        //接通过程中
//        twoButton: false,
//        toOnlineActive: true,
//        processOnlineActive: false,
//        OnlineActive: false,
        //视频通话时
//        twoButton: false,
//        toOnlineActive: false,
//        processOnlineActive: false,
//        OnlineActive: true,
//未连接是
        twoButton: true,
        toOnlineActive: false,
        processOnlineActive: false,
        OnlineActive: false,
        waitActive:true,
        doingActive: true,
        jianKongActive: true,
        allCaseActive: false,
        ImgInfo: [
        ],
        imgIndex: '',
        imgType: "",
        photoUrl: "",
        getCity: '京',
        left:0,
        scaleImgLeft: 0
      }
    },

    created(){

        this.ImgInfo= [
          {
            "allTypeSurveyPhotos": [
              {
                "photoCount": 6,
                "photoType": "0",
                "photoTypeComment": "45度车辆前景照片",
                "surveyPhotos": [
                  {
                    "photoId": 23456,
                    "watermarkPhotoUrl": "http://g.hiphotos.baidu.com/image/pic/item/d000baa1cd11728b21c7efcdc2fcc3cec2fd2c72.jpg"
                  },
                  {
                    "photoId": 23454,
                    "watermarkPhotoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg"
                  },
                  {
                    "photoId": 23453,
                    "watermarkPhotoUrl": "http://zcbl.oss-cn-beijing.aliyuncs.com/e1e52a78985c41fda1aa3bd978c0e786.jpg"
                  },
                ]
              }
            ],
            "vehicleLicenseNo": "京1234424"
          },
          {
            "allTypeSurveyPhotos": [
              {
                "photoCount": 2,
                "photoType": "12",
                "photoTypeComment": "身份证正面照片",
                "surveyPhotos": [
                  {
                    "photoId": 13451,
                    "watermarkPhotoUrl": "http://zcbl.oss-cn-beijing.aliyuncs.com/e1e52a78985c41fda1aa3bd978c0e786.jpg"
                  },{
                    "photoId": 13452,
                    "watermarkPhotoUrl": "http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg"
                  }
                ]
              }
            ],
            "vehicleLicenseNo": "京1234424"
          },
          {
            "allTypeSurveyPhotos": [
              {
                "photoCount": 6,
                "photoType": "11",
                "photoTypeComment": "45度车辆前景照片",
                "surveyPhotos": [
                  {
                    "photoId": 23456,
                    "watermarkPhotoUrl": "https://dadasda/dadasdas.png"
                  }
                ]
              }
            ],
            "vehicleLicenseNo": "京1234424"
          },
        ];
      for(let j in this.ImgInfo){
        for(let i in this.ImgInfo[j].allTypeSurveyPhotos){
          switch (this.ImgInfo[j].allTypeSurveyPhotos[i].photoType){
            case "0": this.caseActive.onecase = false;
              this.imgBox.onesurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "1": this.caseActive.twocase = false;
              this.imgBox.twosurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "2": this.caseActive.threecase = false;
              this.imgBox.threesurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "3": this.caseActive.fourecase = false;
              this.imgBox.fouresurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "4": this.caseActive.fivecase = false;
              this.imgBox.fivesurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "5": this.caseActive.sixcase = false;
              this.imgBox.sixsurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "6": this.caseActive.sevencase = false;
              this.imgBox.sevensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "7": this.caseActive.eightcase = false;
              this.imgBox.eightsurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "8": this.caseActive.nighcase = false;
              this.imgBox.ninesurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "9": this.caseActive.tencase = false;
              this.imgBox.tensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "10": this.caseActive.elevencase = false;
              this.imgBox.elevensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "11": this.caseActive.twelvecase = false;
              this.imgBox.twelvesurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "12": this.caseActive.thirteencase = false;
              this.imgBox.thirteensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "13": this.caseActive.fourteencase = false;
              this.imgBox.fourteensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "14": this.caseActive.fifteencase = false;
              this.imgBox.fifteensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
            case "15": this.caseActive.sixteencase = false;
              this.imgBox.sixteensurveyPhotos = this.ImgInfo[j].allTypeSurveyPhotos[i].surveyPhotos;
              break;
          }
        }

      }
    },
    mounted(){
      this.$nextTick(() => {

      })
    },
    methods: {
      seletedCarType(ele){
        if($(ele.target).attr("class").indexOf("hoverBox")>-1){
          $(ele.target).parent().siblings().find(".tag").addClass("hide");
          $(ele.target).parent().find(".tag").removeClass("hide");
        }
      },
      enterBox(ele){
        $(ele.target).find(".hoverBox").removeClass("hide")
      },
      leaveBox(ele){
        $(ele.target).find(".hoverBox").addClass("hide")
      },
      selectCar(ele){
        $(ele.target).parent().siblings().removeClass("showTag")
        $(ele.target).parent().siblings().children(".tag").addClass("hide");
        $(ele.target).siblings().removeClass("hide")
        $(ele.target).parent().addClass("showTag")
      },
      selectType(ele){
        if(($(ele.target).parent().attr("class")).indexOf("ddClass") > -1){
          $(ele.target).parent().siblings().removeClass("showTag")
          $(ele.target).parent().siblings().children(".tag").addClass("hide");
          $(ele.target).siblings().removeClass("hide")
          $(ele.target).parent().addClass("showTag")
        }
      },
      openType(){
        $(".takePhonetypeBox").removeClass("hide");
      },
      closetypebox(){
        $(".takePhonetypeBox").addClass("hide");
      },
      preImginfo(){
        if(this.left < '-1'){
          this.left = this.left + 184;
          $(".suibian").css("left", this.left)
        }
      },
      nextImgInfo(){
        var length = -(((this.imglength-7)*184)+1)
        if(this.left > length){
          this.left = this.left - 184;
          $(".suibian").css("left", this.left)
        }
      },
      closeCityDiolag(){
        $(".cityDialog").addClass("hide")
      },
      selectCity(city){
        this.getCity = city;
        $(".cityDialog").addClass("hide")
      },
      openCityDialog(){//打开城市
        $(".cityDialog").removeClass("hide")
      },
      editorAim(){
        $(".editorCarInfo").removeClass("hide")
      },
      openAddCar(){
        $(".editorCarInfo").removeClass("hide")
      },
      preScaleImg(){
        if(this.scaleImgLeft < '-1'){
          this.scaleImgLeft = this.scaleImgLeft + 500;
          $(".scaleUlBox").css("left", this.scaleImgLeft)
        }
      },
      nextScaleImg(){
        var length = -(((this.scalImgLength-2)*500)+1)

        if(this.scaleImgLeft > length){
          this.scaleImgLeft = this.scaleImgLeft - 500;
          $(".scaleUlBox").css("left", this.scaleImgLeft)
        }

      },
      openTakePhone(){
        $(".takePhoneImgBox").removeClass('hide');
      },
      closeScaleImg(){
        $(".scalImgBox").addClass('hide');
        this.scaleImgLeft = 0;
        $(".scaleUlBox").css("left",this.scaleImgLeft)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             this.surveyPhotos = [];
        this.imgType = "";
      },
      closetakeCaleImg(){
        $(".takePhoneImgBox").addClass('hide');
      },
      closeEditorCar(){
        $(".editorCarInfo").addClass('hide');
      },

      scaleImg(surveyPhotos,ele,code,photoTypeComment){
        $(".scaleUlBox").css("left",'0')
        this.scaleImgLeft = 0;
        this.scalImgLength = surveyPhotos.length;
        this.surveyPhotos = surveyPhotos;
        console.log(surveyPhotos)
        if(surveyPhotos.length !=0 ){
          this.scaleImgLeft = 0;
          $(".scalImgBox").removeClass('hide');
          this.imgType = photoTypeComment;
        }
      },
      tabChange(event){
        var attributes = event.target.attributes;
        for(var i=0;i< attributes.length;i++){
          if(i == 1){
            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
              attributes[i].nodeValue = 'caseJiankong active';
              $(".allCase").attr("class","allCase");
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
      swiper,
      swiperSlide
    },
  }

</script>

