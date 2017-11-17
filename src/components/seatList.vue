<style scoped>
  .seatList{
    width: 90%;
    margin: 0 auto;
  }
  .seatListMinute{
    cursor: pointer;
    width: 20%;
    text-align:  center;
    border-radius: 6px;
    margin-right: 30px;
    max-height: 305px;
    overflow: scroll;
    margin-top: 30px;
  }
  .seatListMinute h3{
    margin-top: 5px;
    font-size: 24px;
  }
  .seatListMinute .minuterdetail{
    color:#555;
    font-size:15px;
    text-align: left;
    margin-bottom: 15px;
    padding-left: 12%;
  }
  .seatListMinute .minuterdetailGray{
    color: #999;
  }
  .seatListDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0
  }
  .seatListDialogBox{
    width: 47%;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 70vh;
    position: relative;
  }
  .seatListDialogBoxAdd{
    width: 38%;
  }
  .seatListDialog .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
 .seatListDialog .scrollBox{
    overflow-y: scroll;
    max-height: 60vh;
  }
  .imgBox img{
    height: 68px;
    width: 68px;
    margin:0 auto;
  }
  .imgBox{
    text-align: center;
    padding: 10px;
  }
  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
  }
  .closSeatMontor{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .addFont{
    margin:120px auto;
  }
  .addFont img{
    height: 50px;
    width: 50px;
  }
  .InputSeatInfo{
    font-size: 15px;
    padding: 15px;
  }
  .InputSeatInfo span{
    margin-left: 25px;
    display: inline-block;
    width: 13%;
    text-align: left;
  }
  .InputSeatInfo input,.InputSeatInfo select{
    width: 28%;
    border: 1px solid #DCDCDC;
    height: 35px;
    line-height: 35px;
    padding-left: 6px;
    border-radius: 4px;
  }
  .InputSeatInfo .saveButton, .sureAddSeat{
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
  .seatListFoot{
    border: 1px solid #bbb;
    font-size: 15px;
    padding: 15px;
  }

  .seatInfoFoot{
    padding-bottom: 10px;
    padding-left: 25px;
  }
  .seatInfoFoot .infoDetail{
    display: inline-block;
    width: 45%;
  }
  .footBottom{
    border-top:1px dashed #bbb;
    padding-top: 20px;
  }
  .addSeatInput{
    padding: 10px 0 10px 10%;
  }
  .addSeatInput span{
    display: inline-block;
    min-width:20%;
  }
  .addSeatInput input,.addSeatInput select{
    height:35px;
    line-height:35px;
    padding-left: 6px;
    border: 1px solid #bbb;
    border-radius:4px;
    width: 40%;
  }
</style>
<template>
  <div>
    <div class="seatListDialog hide">
        <div class="seatListDialogBox">
          <span @click="closSeatDialog" class="right closSeatMontor">×</span>
          <div class="oneMonitor clear">
            <h4 class="dialogTitle" v-if="editorActive">坐席信息</h4>
            <h4 class="dialogTitle" v-else>添加坐席</h4>
            <div class="clear scrollBox">
              <div v-if="editorActive" style="margin-top:20px;">
                <div class="InputSeatInfo">
                  <span>坐席账号:</span>
                  <input type="text" disabled  value="jjj交警"/>
                  <span>坐席姓名:</span>
                  <input type="text"   value="jjj交警"/>
                </div>
                <div class="InputSeatInfo">
                  <span>坐席手机号:</span>
                  <input type="text"   value="jjj交警"/>
                  <span>坐席账号密码:</span>
                  <input type="text"   value="jjj交警"/>
                </div>
                <div class="InputSeatInfo">
                  <span>账号状态:</span>
                  <select>
                    <option>正常</option>
                    <option>冻结</option>
                  </select>
                </div>
                <div class="InputSeatInfo">
                  <span class="backColorGreen saveButton" @click="saveSeats"> 保存</span>
                </div>
                <div class="seatListFoot">
                  <div class="footTop">
                    <div class="seatInfoFoot">
                      <span class="infoDetail">当前状态: 繁忙 <i class="colorRed">(处理中-未连线)</i></span>
                      <span class="infoDetail">未处理案件: 5</span>
                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">今日已处理案件: 4单</span>
                      <span class="infoDetail">今日登陆时间: 2017-11-29 08:12:12</span>
                    </div>
                    <div class="seatInfoFoot" style="padding-bottom: 20px;">
                      <span class="infoDetail">累计处理案件: 12单</span>
                    </div>
                  </div>
                  <div class="footBottom">
                    <div class="seatInfoFoot">
                      <span class="infoDetail">报案人车牌号: 12333333</span>
                      <span class="infoDetail">报案人手机号: 5</span>
                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">事故时间: 2017-11-29 08:12:12</span>
                      <span class="infoDetail">事故地点: 北京市朝阳区啥UN机构in黄金进口123</span>

                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">开始处理时间: 2017-11-29 08:12:12</span>
                      <span class="infoDetail">案件状态: 查勘中</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style="margin-top:20px;" v-else>
                <div class="addSeatInput">
                  <span>坐席所属机构</span>
                  <select>
                    <option></option>
                  </select>
                </div>
                <div class="addSeatInput">
                  <span>坐席账号</span>
                  <input type="text" placeholder="请输入坐席账号"/>
                </div>
                <div class="addSeatInput">
                  <span>坐席账号密码</span>
                  <input type="text" placeholder="请输入坐席账号密码"/>
                </div>
                <div class="addSeatInput">
                  <span>坐席姓名</span>
                  <input type="text" placeholder="请输入坐席姓名"/>
                </div>
                <div class="addSeatInput">
                  <span>坐席手机号</span>
                  <input type="tel" maxlength="11" placeholder="请输入坐席手机号"/>
                </div>
                <div class="addSeatInput">
                  <span>账号状态</span>
                  <select>
                    <option>正常</option>
                  </select>
                </div>
                <div class="addSeatInput">
                  <span class="sureAddSeat backColorGreen" @click="addSeats">确定</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="seatList">
      <div class="seatListBox clear">
        <div class="seatListMinute left bordercolorRed" v-for="item in seatsList"  @click="goSeatInfo" v-if="item.statius ==0">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber" style="color:#46A0FC">张扬</h3>
          </div>
          <p class="minuterdetail">当前状态: 繁忙<span class="colorRed">(处理中-未连线)</span></p>
          <p class="minuterdetail">未处理订单: 1)</p>
          <p class="minuterdetail">今日已处理订单: 0</p>
          <p class="minuterdetail">今日登陆时间: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
        </div>
        <div class="seatListMinute left bordercolorGreen" v-for="item in seatsList"  @click="goSeatInfo" v-if="item.statius ==1">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber" style="color:#46A0FC">张扬</h3>
          </div>
          <p class="minuterdetail">当前状态: 空闲</p>
          <p class="minuterdetail">未处理订单: 1)</p>
          <p class="minuterdetail">今日已处理订单: 0</p>
          <p class="minuterdetail">今日登陆时间: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
        </div>
        <div class="seatListMinute left bordercolorGray" style="background:#F8F8F9;" v-for="item in seatsList"  @click="goSeatInfo" v-if="item.statius ==2">
          <div class="imgBox">
            <img src="../images/kefuhui.png">
            <h3 class="minuteNuber" style="color:#999">张扬</h3>
          </div>
          <p class="minuterdetail minuterdetailGray">当前状态: 未在线</p>
          <p class="minuterdetail minuterdetailGray">未处理订单: 1)</p>
          <p class="minuterdetail minuterdetailGray">今日已处理订单: 0</p>
          <p class="minuterdetail minuterdetailGray">今日登陆时间: 0</p>
          <p class="minuterdetail minuterdetailGray">累计处理案件: 0</p>
        </div>
        <div class="seatListMinute left" style="background:#F8F8F9;min-height:305px;"  @click="addSeatsDialog">
          <div class="addFont">
            <img src="../images/add.png">
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
        editorActive: false,
        seatsList:[{"statius":1},
          {"statius":0},
          {"statius":0},
          {"statius":2},
          {"statius":11}]

      }
    },
    created(){
      this.cars= [{
        "carNo": "京123333",
        "name": "张着呢",
        "phone": "14323434234",
        "adress":"事故地点北京市朝阳区广渠路31号",
        "companey":"保险公司阳光保险集团-杭州",
        "statu":"案件状态：新案件-待指派",
        "time":"2017-11-12"
      },{
        "carNo": "京123333",
        "name": "张着呢",
        "phone": "14323434234",
        "adress":"事故地点北京市朝阳区广渠路31号",
        "companey":"保险公司阳光保险集团-杭州",
        "statu":"案件状态：新案件-待指派",
        "time":"2017-11-12"
      },{
        "carNo": "京123333",
        "name": "张着呢",
        "phone": "14323434234",
        "adress":"事故地点北京市朝阳区广渠路31号",
        "companey":"保险公司阳光保险集团-杭州",
        "statu":"案件状态：新案件-待指派",
        "time":"2017-11-12"
      },{
        "carNo": "京123333",
        "name": "张着呢",
        "phone": "14323434234",
        "adress":"事故地点北京市朝阳区广渠路31号",
        "companey":"保险公司阳光保险集团-杭州",
        "statu":"案件状态：新案件-待指派",
        "time":"2017-11-12"
      }]
    },
    watch: {
      "editorActive": function(){
          if(this.editorActive == false){
            $(".seatListDialogBox").addClass("seatListDialogBoxAdd")

          }else{
            $(".seatListDialogBox").removeClass("seatListDialogBoxAdd")
          }
      }
    },
    methods: {
      goSeatInfo(){//坐席信息编辑
        $(".seatListDialog").removeClass("hide");
        this.editorActive = true;
      },
      addSeatsDialog(){//打来添加坐席遮盖层
        this.editorActive = false;
        $(".seatListDialogBox").addClass("seatListDialogBoxAdd")
        $(".seatListDialog").removeClass("hide");
      },
      addSeats(){//添加坐席
        $(".seatListDialog").addClass("hide");
        $(".seatListDialogBox").removeClass("seatListDialogBoxAdd")
      },
      saveSeats(){//保存编辑坐席
        $(".seatListDialog").addClass("hide");
      },
      closSeatDialog(){//关闭遮盖层
        $(".seatListDialog").addClass("hide");

      },
      goCaseDetail(){//打开查看案件详情
        $(".caseDetail").removeClass("hide")
      },
      goSignSeat(){//打开坐席指派遮盖层
        $(".signSeats").removeClass("hide")
      }
    },
    components: {
    },
  }

</script>

