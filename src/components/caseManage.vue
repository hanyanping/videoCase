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
    overflow-y: scroll;
    max-height: 427px;
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
  .gcr-tit .u-edit-iconGreay{
    width: 16px;
    height: 14px;
    display: inline-block;
    background: url(../images/icon_edit_1.png) center center no-repeat;
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

  .wait-law-case {
    border: 1px dashed #dcdcdc;
    padding: 10px;
    margin-top: 15px;
    cursor: pointer;
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
    cursor: pointer;
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
  .cityDialog,.orderSelectDialog,.openOrdercompleteDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 200;
  }
  .openOrdercompleteDialog{
    z-index: 201;
  }
  .orderSelectDialog .selectBox select{
    border: 1px solid #bbb;
    height: 30px;
    width: 120px;
    border-radius: 5px;
    padding-left: 6px;
  }
  .orderSelectDialog .selectBox textarea{
    border: 1px solid #bbb;
    height: 120px;
    width: 320px;
    border-radius: 5px;
    margin-top: 15px;
    padding-top: 6px;
    text-indent: 15px;
  }
  .orderSelectDialog h4{
    font-weight: 600;
  }
 .openOrdercompleteDialog .completeImg{
    text-align: center;
  }
 .openOrdercompleteDialog .completeText{
   color: #2EAB3B;
   padding-top: 10px;
   font-weight: 600;
   font-size:20px;
 }
 .orderSelectDialog .selectBox{
    margin: 20px 25px;
  }

  .cityDialogBox,.orderSelectDialogBox,.openOrdercompleteDialogBox{
    width: 470px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    margin-top: 20vh;
    position: relative;
  }
  .openOrdercompleteDialogBox{
    width: 560px;
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
.openOrderEndBox{
  text-align: center;
  margin: 25px auto;

}
  .openOrderEndBox .surebutton{
    color: #fff;
    padding: 10px 30px;

  }
  .dealCaseButton{
    text-align: center;
    padding: 25px 0 60px;
  }
  .dealCaseButton .dealCase{
    padding: 10px 20px;
    border: 1px solid #2EAB3B;

  }
  .dealCaseButton .dealNewCase{
    color: #232323;
    margin-right: 30px;
  }
  .dealCaseButton .dealOldCase{
    color: #fff;
    margin-left:20px;
  }
  .dealText{
    margin: 25px 0;
  }
  .creatCase{
    position:fixed;
    top: 10px;
    right: 15%;
    color: #fff;
    padding: 9px 16px;
    cursor: pointer;
  }
</style>
<template>

  <div class="caseManage">
    <span class="creatCase backColorGreen" v-if="headerActiveOne" @click="checkState">繁忙</span>
    <span class="creatCase backColorGreen" v-if="!headerActiveOne" @click="checkState">空闲</span>
    <div @click="openTakePhone">打开拍照</div>
    <div class="openOrdercompleteDialog hide">
      <div class="openOrdercompleteDialogBox">
        <span @click="closeopenOrderEndxDialog" class="closeCityDiolag">×</span>
        <div class="selectBox">
          <div class="completeImg">
           <img src="../images/complete.png"/>
            <p class="completeText">查勘已完成</p>
            <div v-if="haveCaseActive">
              <p class="dealText">检测到您当前存在'待处理案件',请选择处理新案件还是处理待处理案件</p>
              <div class="dealCaseButton">
                <span class="dealNewCase dealCase">处理新案件</span>
                <span class="dealOldCase dealCase backColorGreen">处理'待处理案件'</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orderSelectDialog hide">
      <div class="orderSelectDialogBox">
        <h4>请选择订单完成类型</h4>
        <span @click="closeOrderDiolag" class="closeCityDiolag">×</span>
        <div class="selectBox">
          <div class="selectType">
            <select placeholder="请选择订单类型">
              <option>正常办结</option>
              <option>异常办结</option>
            </select>
          </div>
          <textarea class="textareaBox" placeholder="请输入异常办理描述"></textarea>
          <div class="openOrderEndBox">
            <span class="backColorGreen surebutton" @click="openOrderEndBox">确定</span>
          </div>
        </div>
      </div>
    </div>
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
          <input @click="openCityDialog" v-model="getCity" type="text" readonly="readonly" class="creatInputNo"/>
          <input style="width:140px;" v-model="vehicleLicenseNo" placeholder="请输入车牌号" type="text"/>
        </div>
        <!--<div class="inputBox">-->
          <!--<span>手机号:</span><input placeholder="请输入手机号" type="tel" maxlength="11"/>-->
        <!--</div>-->
        <div style="margin: 20px auto;text-align: center;">
          <span class="backColorGreen saveCarInfo" @click="savevehicle">保存</span>
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
                <a href="javascript:;" v-if="!OnlineActive && !processOnlineActive && !toOnlineActive"  @click="join"  class="link-btn mr10 disabled" id="online">连线</a>
                <a href="javascript:;" class="link-btn mr10 disabled " v-if="!OnlineActive && !processOnlineActive && toOnlineActive" id="onlineLoding" >连线中</a>
                <a href="javascript:;" class="link-btn mr10" v-if="!OnlineActive && processOnlineActive && !toOnlineActive" @click="join" id="onLinking" >连线 <span id="countTime" data-max="30">30</span>s</a>
                <a href="javascript:;" class="link-btn mr10 warn" @click="disconnect" v-if="OnlineActive && !processOnlineActive && !toOnlineActive" id="onOff" >挂断</a>
                <a href="javascript:;" class="link-btn" v-if="twoButton" id="hangUp">挂起订单</a>
                <a href="javascript:;" class="link-btn" v-if="!twoButton" id="nohangUp">挂起订单</a>
              </div>
            </div>
            <div class="item-btn-max">
              <a href="javascript:;" class="link-btn-max" v-if="twoButton" id="finishOrder" @click="openOrderSelect">查勘完成</a>
              <a href="javascript:;"  v-if="!twoButton" id="nofinishOrder">查勘完成</a>
            </div>
          </div>
          <div class="m-noContent-mod" v-else>
            <div class="mnm-icon">
              <img  src="../images/bookIco_0.png">
            </div>
            <p>暂无正在处理中的案件...</p>
          </div>
      </div>
      </div>
      <div class="caseCenter">
        <div class="video-player">
          <div id="video" class="video" style="width: 746px;height: 488px;">
            <video v-if="steamActive" id="local" width=746px height=488px style="border:1px solid;margin-right:20px;" muted="" autoplay="" controls></video>
            <video v-if="steamActive" id="remote" width=746px height=488px style="border:1px solid;margin-right:20px;" autoplay="" hidden controls></video>
            <img v-if="!steamActive" id="video-background" src="../images/video-default.png"/>
          </div>
        </div>
      </div>
      <div class="caseRight">
        <div class="tit">
          <h4>待处理案件</h4>
        </div>
        <div id="wait" class="cont">
          <div class="wait-law-case-mod" id="waitLawCase" v-if="waitActive" >
            <div @dblclick ="goleftLine" title="双击进行处理" class="wait-law-case" v-for="item in noDealCase">
              <ul>
                <li>车牌号：{{item.vehicleLicenseNo}}</li>
                <li>报案人电话：{{item.reporterPhone}}</li>
                <li>查勘员姓名：{{item.liveSurveyorName}}</li>
                <li>查勘员电话：{{item.liveSurveyorPhone}}</li>
                <li v-if = "item.orderStatus == '06'">订单状态：待查勘</li>
                <li v-if = "item.orderStatus == '07'">订单状态：查勘中</li>
                <li v-if = "item.orderStatus == '08'">订单状态：已查勘</li>
                <li v-if = "item.orderStatus == '11'">订单状态：已取消</li>
              </ul>
            </div>
            <div @dblclick ="goleftLine" title="双击进行处理" class="wait-law-case" v-for="item in noDealCase">
              <ul>
                <li>车牌号：{{item.vehicleLicenseNo}}</li>
                <li>报案人电话：{{item.reporterPhone}}</li>
                <li>查勘员姓名：{{item.liveSurveyorName}}</li>
                <li>查勘员电话：{{item.liveSurveyorPhone}}</li>
                <li v-if = "item.orderStatus == '06'">订单状态：待查勘</li>
                <li v-if = "item.orderStatus == '07'">订单状态：查勘中</li>
                <li v-if = "item.orderStatus == '08'">订单状态：已查勘</li>
                <li v-if = "item.orderStatus == '11'">订单状态：已取消</li>
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
            <dl class="m-carNo-list" id="selectImgType" @click="selectCarAim('0',$event)">
              <dd id="c0" class="data-car-m" data-licenseno="京111115">
                <span v-if="oneCarActive" style="color: #35aa42;">标的车：{{saveonevehicleLicenseNo}}</span>
                <span v-else>标的车：{{saveonevehicleLicenseNo}}</span>
                <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo)" v-if="oneCarActive" class="u-edit-icon"></i>
                <i data-type="1"  data-id="839" data-licenseno="saveonevehicleLicenseNo" @click="editorCar(saveonevehicleLicenseNo)" v-else class="u-edit-iconGreay hide"></i>
              </dd>
            </dl>
            <dl v-if="ImgInfo.length>1" class="m-carNo-list" id="selectImgTypeTwo" @click="selectCarAim('1',$event)">
              <dd id="c1" class="data-car-m" data-licenseno="京111115">
                <span v-if="TwoCarActive" style="color: #35aa42;">标的车：{{savetwovehicleLicenseNo}}</span>
                <span v-else>标的车：{{savetwovehicleLicenseNo}}</span>
                <i data-type="1"  data-id="839"  @click="editorCar(savetwovehicleLicenseNo)" v-if="TwoCarActive" class="u-edit-icon"></i>
                <i data-type="1" data-id="839"  @click="editorCar(savetwovehicleLicenseNo)" v-else class="u-edit-iconGreay "></i>
              </dd>
            </dl>
            <dl v-if="ImgInfo.length > 2" class="m-carNo-list" id="selectImgTypeThree" @click="selectCarAim('2',$event)">
              <dd id="c2" class="data-car-m" data-licenseno="京111115">
                <span v-if="threeCarActive" style="color: #35aa42;">标的车：{{savethreevehicleLicenseNo}}</span>
                <span v-else>标的车：{{savethreevehicleLicenseNo}}</span>
                <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo)" v-if="threeCarActive" class="u-edit-icon"></i>
                <i data-type="1"  data-id="839" @click="editorCar(savethreevehicleLicenseNo)" v-else class="u-edit-iconGreay "></i>
              </dd>
            </dl>
            <div class="m-carNo-add" id="addCarNo" @click="openAddCar"></div>
          </div>
          <div class="gcr-cont" style="padding-top: 0">
            <div class="m-carNo-imgList" id="picListZone">
              <div class="prev" @click="preImginfo"></div>
              <div class="ulBox">
                <ul v-if="oneCarActive" class="suibian">
                  <li @click="seletedCarType($event,item.photoType)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in oneTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>
                  </li>
                </ul>
                <ul v-if="TwoCarActive" class="suibian">
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in twoTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
                       </span>
                      <div class="tag hide"></div>
                    </div>

                  </li>
                </ul>
                <ul v-if="threeCarActive" class="suibian">
                  <li @click="seletedCarType($event)" @mouseenter="enterBox($event)" @mouseleave="leaveBox($event)" v-for="(item,index) in threeTypeSurveyPhotos">
                    <div class="hoverBox hide">
                      <div v-if="item.hasUrl == 'true'" @click.stop="scaleImg(item.surveyPhotos,$event,item.photoType,item.photoTypeComment)" class="openscalImgBox backColorGreen">查看</div>
                    </div>
                    <div class="liImgbox">
                      <img :src="item.surveyPhotos[0].watermarkPhotoUrl">
                      <br>
                      <span class="title">
                        <a href="javascript:;">{{item.photoTypeComment}}</a>
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
  import axios from 'axios'
  import  '../assets/js/dog'
  var wilddogVideo = require('wilddog-video-base').wilddogVideo;
  var roomFactory = require('wilddog-video-room');
  wilddogVideo.regService('room', roomFactory);
  var appVideoId = 'wd9409112059rndtfh';
  // 初始化 WilddogVideoRoom 之前，要先经过身份认证。这里采用匿名登录的方式。
  var config = {
    authDomain: appVideoId + ".wilddog.com",
    syncURL: "https://wd4799801019rsiebf.wilddogio.com/"
  };
  // 初始化Wilddog auth
  wilddog.initializeApp(config);
  export default {
    data() {
      return{
        steamActive: false,
        manualStatus: 2,
        headerActiveOne: true,
        noDealCase:[],
        vehicleLicenseNo: "",
        savephotoType: "",
        savephotoUrl: "",
        surveyNo: "",
        saveonevehicleLicenseNo: "",
        savetwovehicleLicenseNo: "",
        savethreevehicleLicenseNo: "",
        oneCarActive: true,
        TwoCarActive: false,
        threeCarActive: false,
        haveCaseActive: false,
        surveyPhotos:[],//同种类型图片
        imglength: 15,//缩略图片个数,
        scalImgLength:"",//同种图片个数
        oneTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/3.png"
              }
            ]
          }
        ],
        twoTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/3.png"
              }
            ]
          }
        ],
        threeTypeSurveyPhotos: [
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "0",
            "photoTypeComment": "45度车辆前景照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_1.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "1",
            "photoTypeComment": "当事人和车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_2.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "2",
            "photoTypeComment": "当事车辆车架号",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_3.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "3",
            "photoTypeComment": "车辆受损细节(1)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "4",
            "photoTypeComment": "车辆受损细节(2)",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/1.png"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "5",
            "photoTypeComment": " 交强险标志",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_4.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "6",
            "photoTypeComment": "银行卡照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_5.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "7",
            "photoTypeComment": "其它照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_6.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "8",
            "photoTypeComment": "事故认定书",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_7.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "9",
            "photoTypeComment": "行驶本照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_8.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "10",
            "photoTypeComment": "驾驶证照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_9.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "11",
            "photoTypeComment": "当事人签名照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/2.png"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "12",
            "photoTypeComment": "身份证正面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_10.jpg"
              }
            ]
          },{
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "13",
            "photoTypeComment": "身份证背面照片",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/icon_noImg_11.jpg"
              }
            ]
          },
          {
            'hasUrl': 'false',
            "photoCount": "",
            "photoType": "14",
            "photoTypeComment": "查勘员与车辆合影",
            "surveyPhotos": [
              {
                "photoId": "",
                "watermarkPhotoUrl": "../static/3.png"
              }
            ]
          }
        ],
        carTypecarType: [],
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
        scaleImgLeft: 0,
        roomId: "",
        localStream: "",
        roomInstance: '',
        localEl:"",
        remoteEl:"",
        videosEl: ""
      }
    },

    created(){
      this.localEl = document.getElementById('local');
      this.remoteEl = document.getElementById('remote');
      this.videosEl = document.getElementById('video');
      this.getsyncSessionNodePath()
      this.noDealCase = [
        {
          "surveyNo": "dadashjk4234kjhfs34",
          "liveSurveyorName": "哆啦A梦",
          "liveSurveyorPhone": "1234567854",
          "liveSurveyorStatus": "11",
          "orderStatus": "08",
          "reporterPhone": "134421233223",
          "vehicleLicenseNo": "京3244423",
          "insuranceCompanyName": "保险公司名称",
          "reportLocation": "报案地点",
          "surveyPhotos": [
            {
              "allTypeSurveyPhotos": [
                {
                  "photoCount": 6,
                  "photoType": "09",
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
            }
          ]
        },
        {
          "surveyNo": "dadashjk4234kjhfs34",
          "liveSurveyorName": "哆啦A梦",
          "liveSurveyorPhone": "1234567854",
          "liveSurveyorStatus": "11",
          "orderStatus": "08",
          "reporterPhone": "134421233223",
          "vehicleLicenseNo": "京3244423",
          "insuranceCompanyName": "保险公司名称",
          "reportLocation": "报案地点",
          "surveyPhotos": [
            {
              "allTypeSurveyPhotos": [
                {
                  "photoCount": 6,
                  "photoType": "09",
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
            }
          ]
        }
      ];
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
              },{
                "photoCount": 6,
                "photoType": "3",
                "photoTypeComment": "车辆受损细节(1)",
                "surveyPhotos": [
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
                    "photoId": 1111,
                    "watermarkPhotoUrl": "http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg"
                  }
                ]
              }
            ],
            "vehicleLicenseNo": "京1111"
          }
        ];
      this.getPhontos();
    },
    mounted(){
      console.log(wilddogVideo)
//登陆成功后
      var that = this
      wilddog.auth().signInAnonymously()
        .then(function(user){
          //认证成功后，初始化 WilddogVideoRoom
          console.log('登录认证成功 , user : ' + user);
          wilddogVideo.initialize({'appId':appVideoId,'token':user.getToken()});
          // 创建本地桌面或窗口媒体流，用于进行屏幕共享。注意：该媒体流只有视频流，无音频流，且视频流分辨率有窗口大小决定。
          wilddogVideo.createLocalStream({
            // 如果为 true，则媒体流中包含视频。如果为 false，则媒体流中不包含视频。
            captureVideo: false,
            // 如果为 true，则媒体流中包含声音。false，则媒体流中不包含声音。
            captureAudio: true,
            // 分辨率
            dimension: '480p',
            // 自定义传输视频的最大帧率，默认值为15，最大值为30。
            maxFPS: 15

          }).then(function (screenStream) {
            that.localStream = screenStream;
            that.localStream.attach(that.localEl);
          }).catch(function (err) {
            console.error('创建本地媒体流异常 , 异常码 : ' + err.code + ' , 异常信息 : ' + err.message);
          });
        }).catch(function (error) {
        // 错误处理
        console.log('登录认证异常 , 异常码 : ' + error.code + ' , 异常信息 : ' + error.message);
        // ...
      });

    },
    methods: {
      disconnect(){
        this.roomInstance.disconnect();
      },
      join(){
        //拿到房间号
        console.log('room id : ' + this.roomId);

        //通过wilddogRoom创建WilddogRoom实例
         this.roomInstance = wilddogVideo.room(this.roomId);

        //进入到room
        this.roomInstance.connect();
        //room事件
        this.roomInstance.on('connected',function () {
          console.log('connected success');
          //发布本地流
          var that = this;
          this.roomInstance.publish(this.localStream,function(error){
            if(error == null){
              console.log('publish local stream successful');
              that.localStream.attach(localEl);
            }else{
              console.log('publish local stream error , error code : '
                + error.code + ' , error message : ' , error.message);
            }
          });

          //Room内有流加入，此时不是真正的流，需要选择订阅才能获取
          this.roomInstance.on('stream_added',function (roomStream) {

            console.log('remote stream id : ' + roomStream.streamId +
              ' , remote stream owners : ' + roomStream.streamOwners);

            //订阅远端流

            that.roomInstance.subscribe(roomStream,function (error) {
              if(error == null){
                console.log('subscribe success , remote stream id : ' + that.roomStream.streamId +
                  ' , remote stream owners : ' + that.roomStream.streamOwners);
              } else {
                console.log('subscribe error , error code : ' + error.code + ' , error message : ' + error.message);

                // 将远端媒体流绑定到页面中的元素上。
                roomStream.attach(that.remoteEl);

                // 设置录制布局并且开始服务端录制功能
                var remoteStream = {};
                remoteStream.roomStream.streamId = {"left":0,"top":100,"width":100,"height":100,"zOrder":1};
                var options = {
                  // 影响画面流畅度，与画面流畅度成正比：帧率越大，画面越流畅；帧率越小，画面越有跳动感.
                  "fps":15,
                  "canvasWidth":1000,
                  "canvasHeight":1000,
                  "streams":{
                  }
                }
                options.streams[0] = remoteStream;

                console.trace('视屏录制布局 : ' , JSON.stringify(options));

                // 远端流订阅成功开始视频录制
                that.roomInstance.startRecording(options,function(url,error) {
                  if (error == null) {
                    console.log('video recording successful , url : ' + url);
                  } else {
                    console.log('video recording error , code ' + error.code + ' , message : ' + error.message);
                  }
                }) ;
              }
            });
          });

          //此时接受的了真正的流，可以把获取到的远端流放入远端标签
          this.roomInstance.on('stream_received',function (roomStream) {
            var newRemote = that.remoteEl.cloneNode(true);
            newRemote.id = roomStream.streamId;
            newRemote.hidden = false;
            that.videosEl.appendChild(newRemote);
            roomStream.attach(newRemote);
          });

          //Room内有流离开，将流从远端移除
          this.roomInstance.on('stream_removed',function (roomStream) {
            var removeEl = document.getElementById(roomStream.streamId);
            roomStream.detach(removeEl);
            that.videosEl.removeChild(removeEl);

            // 远端流断开 ， 结束视频录制
            that.roomInstance.stopRecording(function(url,error){
              if(error == null){
                console.log('远端流断开 ,停止录制成功，录制的文件地址：'+ url);
              } else {
                console.log('远端流断开 ,停止录制失败，录制的文件地址：'+ url +
                  ' , error code : ' + error.code + ' , error message : ' + error.message);
              }
            });
          });

          this.roomInstance.on('disconnected',function () {
            console.log('disconnected room')
          })

        });
      },
      getsyncSessionNodePath(){
        return;
        var paramData = {
          "userId": "7777",
        }
        axios.post(this.ajaxUrl+"/sync/session/v1/open",paramData)
          .then(response => {
            if(response.data.rescode == 200){
             this.syncSessionNodePath = response.data.data.syncSessionNodePath;
              wilddog.sync().ref(this.syncSessionNodePath).on('value',function(snapshot){
                console.log(snapshot.val());
                console.log("the previous key is",prev)
              });
             //绑定监听节点
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      checkState(){
        this.headerActiveOne = !this.headerActiveOne;
        if(this.headerActiveOne){
          this.manualStatus = 2;
        }else{
          this.manualStatus = 0
        }
      },
      editorCar(vehicleLicenseNo){
        $(".editorCarInfo").removeClass("hide")
        this.getCity = vehicleLicenseNo.substring(0,1)
        this.vehicleLicenseNo = vehicleLicenseNo.substring(1)
        console.log(vehicleLicenseNo)
      },
      savevehicle(){
        $(".editorCarInfo").addClass('hide');
        this.getCity = '';
        this.vehicleLicenseNo = '';
      },
      closeEditorCar(){
        $(".editorCarInfo").addClass('hide');
        this.getCity = '';
        this.vehicleLicenseNo = '';
      },
      getPhontos(){
        for(let k in this.ImgInfo){
          if(k == 0){
            for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
              this.saveonevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
              for(let j  in this.oneTypeSurveyPhotos){
                if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.oneTypeSurveyPhotos[j].photoType){
                  this.oneTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                  this.oneTypeSurveyPhotos[j].hasUrl = 'true';
                }
              }
            }
          }else if(k == 1){
            for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
              this.savetwovehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
              for(let j  in this.twoTypeSurveyPhotos){
                if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.twoTypeSurveyPhotos[j].photoType){
                  this.twoTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                  this.twoTypeSurveyPhotos[j].hasUrl = 'true';
                }
              }
            }
          }else if(k == 2){
            for(let i in this.ImgInfo[k].allTypeSurveyPhotos){
              this.savethreevehicleLicenseNo = this.ImgInfo[k].vehicleLicenseNo;
              for(let j  in this.threeTypeSurveyPhotos){
                if(this.ImgInfo[k].allTypeSurveyPhotos[i].photoType == this.threeTypeSurveyPhotos[j].photoType){
                  this.threeTypeSurveyPhotos[j] = this.ImgInfo[k].allTypeSurveyPhotos[i];
                  this.threeTypeSurveyPhotos[j].hasUrl = 'true';
                }
              }
            }
          }

        }
      },
      selectCarAim(order){
        this.left = 0;
        $(".suibian").css("left",this.left);
        switch (order) {
          case "0":
            this.oneCarActive = true;
            this.TwoCarActive = false;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "1":
            this.oneCarActive = false;
            this.TwoCarActive = true;
            this.threeCarActive = false;
            $(".tag").addClass("hide")
            break;
          case "2":
            this.oneCarActive = false;
            this.TwoCarActive = false;
            this.threeCarActive = true;
            $(".tag").addClass("hide")
            break;
        }

      },
      openOrderEndBox(){
        $(".openOrdercompleteDialog").removeClass("hide");
      },
      closeopenOrderEndxDialog(){
        $(".openOrdercompleteDialog").addClass("hide");
      },
      openOrderSelect(){
        $(".orderSelectDialog").removeClass("hide");
      },
      closeOrderDiolag(){
        $(".orderSelectDialog").addClass("hide");
      },
      goleftLine(){
      },
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
          $(".suibian").animate({
              left : this.left
            },500)
        }
      },
      nextImgInfo(){
        var length = -(((this.imglength-7)*184)+1)
        if(this.left > length){
          this.left = this.left - 184;
          $(".suibian").animate({left: this.left},500)
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
      openAddCar(){
        $(".editorCarInfo").removeClass("hide")
        this.getCity = '京'
      },
      preScaleImg(){
        if(this.scaleImgLeft < '-1'){
          this.scaleImgLeft = this.scaleImgLeft + 500;
          $(".scaleUlBox").animate({left: this.scaleImgLeft},500)
        }
      },
      nextScaleImg(){
        var length = -(((this.scalImgLength-2)*500)+1)

        if(this.scaleImgLeft > length){
          this.scaleImgLeft = this.scaleImgLeft - 500;
          $(".scaleUlBox").animate({left: this.scaleImgLeft},500)
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

      scaleImg(surveyPhotos,ele,code,photoTypeComment){
        $(".scaleUlBox").css("left",'0')
        this.scaleImgLeft = 0;
        this.scalImgLength = surveyPhotos.length;
        this.surveyPhotos = surveyPhotos;
        console.log(surveyPhotos)
        if(surveyPhotos.length !=0 ){
          console.log(photoTypeComment)
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
    },
  }

</script>

