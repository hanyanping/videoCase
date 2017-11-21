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
    min-height: 305px;
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
    left: 0;
    z-index: 100;
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
              <div v-if="editorActive" style="margin-top:20px;" v-for="seatInfo in seatInfo">
                <div class="InputSeatInfo">
                  <span>坐席账号:</span>
                  <input type="text" disabled  :value="seatInfo.userName"/>
                  <span>坐席姓名:</span>
                  <input type="text" v-model="chinaName"  :value="seatInfo.chinaName"/>
                </div>
                <div class="InputSeatInfo">
                  <span>坐席手机号:</span>
                  <input type="text" v-model="telephone" maxlength="11" :value="seatInfo.telephone"/>
                  <span>坐席账号密码:</span>
                  <input v-model="password" type="password"  maxlength="80"  :value="seatInfo.password"/>
                </div>
                <div class="InputSeatInfo">
                  <span>账号状态:</span>
                  <select v-model="isLocked">
                    <option v-for="item in isLockedOption" :value="item.isLocked"  v-if="item.isLocked == isLocked">{{item.name}}</option>
                    <option :value="item.isLocked" v-else>{{item.name}}</option>

                  </select>
                </div>
                <div class="InputSeatInfo">
                  <span class="backColorGreen saveButton" @click="saveSeats()"> 保存</span>
                </div>
                <div class="seatListFoot">
                  <div class="footTop">
                    <div class="seatInfoFoot">
                      <span class="infoDetail" v-if="seatInfo.userStatus == 2">当前状态: 繁忙 <i class="colorRed">(处理中-未连线)</i></span>
                      <span class="infoDetail" v-if="seatInfo.userStatus == 0">当前状态: 空闲 </span>
                      <span class="infoDetail" v-if="seatInfo.userStatus == 1">当前状态: 不在线 </span>
                      <span class="infoDetail">未处理案件: {{seatInfo.waitingCaseCount}}单</span>
                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">今日已处理案件: {{seatInfo.handleCaseCount}}单</span>
                      <span class="infoDetail">今日登陆时间: {{seatInfo.loginTime}}</span>
                    </div>
                    <div class="seatInfoFoot" style="padding-bottom: 20px;">
                      <span class="infoDetail">累计处理案件: {{seatInfo.totalHandleCaseCount}}单</span>
                    </div>
                  </div>
                  <div class="footBottom" v-if="accidendsActive">
                    <div class="seatInfoFoot">
                      <span class="infoDetail">报案人车牌号: {{seatInfo.siReportLicenseNo}}</span>
                      <span class="infoDetail">报案人手机号: {{seatInfo.siReportPhone}}</span>
                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">事故时间: {{seatInfo.siAccidentTime}}</span>
                      <span class="infoDetail">事故地点: {{seatInfo.siAccidentAddress}}</span>

                    </div>
                    <div class="seatInfoFoot">
                      <span class="infoDetail">开始处理时间: {{seatInfo.siStartTime}}</span>
                      <span class="infoDetail">案件状态: {{seatInfo.siStatusText}}</span>
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
        <div class="seatListMinute left bordercolorRed" v-for="item in seatsList"  @click="goSeatInfo(item.userId)" v-if="item.sysUserStatus == 2">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber" style="color:#46A0FC">{{item.chinaName}}</h3>
          </div>
          <p class="minuterdetail" style="padding-left: 8%;">当前状态: 繁忙<span class="colorRed">(处理中-未连线)</span></p>
          <p class="minuterdetail" style="padding-left: 8%;">未处理订单:  {{item.waitingCaseCount}}</p>
          <p class="minuterdetail" style="padding-left: 8%;">今日已处理订单: {{item.handleCaseCount}}</p>
          <p class="minuterdetail" style="padding-left: 8%;">今日登陆时间:{{item.loginTime}}</p>
          <p class="minuterdetail" style="padding-left: 8%;">累计处理案件: {{item.totalHandleCaseCount}}</p>
        </div>
        <div class="seatListMinute left bordercolorGreen" v-for="item in seatsList"  @click="goSeatInfo(item.userId)" v-if="item.sysUserStatus == 0">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber" style="color:#46A0FC">{{item.chinaName}}</h3>
          </div>
          <p class="minuterdetail">当前状态: 空闲</p>
          <p class="minuterdetail">未处理订单: {{item.waitingCaseCount}}</p>
          <p class="minuterdetail">今日已处理订单: {{item.handleCaseCount}}</p>
          <p class="minuterdetail">今日登陆时间:{{item.loginTime}}</p>
          <p class="minuterdetail">累计处理案件:{{item.totalHandleCaseCount}}</p>
        </div>
        <div class="seatListMinute left bordercolorGray" style="background:#F8F8F9;" v-for="item in seatsList"  @click="goSeatInfo(item.userId)" v-if="item.sysUserStatus == 1">
          <div class="imgBox">
            <img src="../images/kefuhui.png">
            <h3 class="minuteNuber" style="color:#999">{{item.chinaName}}</h3>
          </div>
          <p class="minuterdetail minuterdetailGray">当前状态: 未在线</p>
          <p class="minuterdetail minuterdetailGray">未处理订单: {{item.waitingCaseCount}}</p>
          <p class="minuterdetail minuterdetailGray">今日已处理订单:{{item.handleCaseCount}}</p>
          <p class="minuterdetail minuterdetailGray">今日登陆时间: {{item.loginTime}}</p>
          <p class="minuterdetail minuterdetailGray">累计处理案件:{{item.totalHandleCaseCount}}</p>
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
  import axios from 'axios'
  export default {
    data() {
      return{
        userId: "",
        chinaName: "",
        password: "",
        telephone: "",
        isLocked: "",
        isLockedOption: [
          {"isLocked":"0",name:"正常"},
          {"isLocked":"1",name:"锁定"}],
        accidendsActive: true,
        editorActive: false,
        seatsList: [],
        seatInfo: [],
        paramData: {"orgcode":"started"},
        ajaxUrl: "/boot-pub-survey-manage"
      }
    },
    created(){
    },
    mounted() {
      this.getSeatList()
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
      getSeatList(){
        axios.post(this.ajaxUrl+"/pub/survey/v1/custom/service/list", this.paramData)
          .then(response => {
            if(response.data.rescode == 200){
              this.seatsList = response.data.data.list;
              for(let i in this.seatsList){
                this.seatsList[i].loginTime = this.seatsList[i].loginTime.substring(10,(this.seatsList[i].loginTime.length)+1);
              }
            }else{
              alert(response.data.resdes)
            }
            resolve(response.data);
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      goSeatInfo(userId){//坐席信息编辑
        this.userId = userId
        var paramData = {
              "userId": userId,
              "orgcode": "started"
        }
        $(".seatListDialog").removeClass("hide");
        this.editorActive = true;
        axios.post(this.ajaxUrl+"/pub/survey/v1/custom/service/detail", paramData)
          .then(response => {
            if(response.data.rescode == 200){
              this.$router.push({path:'/'})
              this.seatInfo = response.data.data;
              for(let i in this.seatInfo){
                if(this.seatInfo[i].isLocked != null ){
                  this.isLocked = this.seatInfo[i].isLocked;
                }
                this.password = "••••••••";
                this.telephone = this.seatInfo[i].telephone;
                this.chinaName = this.seatInfo[i].chinaName;
                if(this.seatInfo[i].siReportLicenseNo == null && this.seatInfo[i].siStartTime == null){
                  this.accidendsActive = false
                }else{
                  this.accidendsActive = true;
                }
                if(this.seatInfo[i].siStatus != null){
                  if(this.seatInfo[i].siStatus == "08"){
                    this.seatInfo[i].siStatusText = "已查勘"
                  }else if(this.seatInfo[i].siStatus == "07"){
                    this.seatInfo[i].siStatusText = "查勘中"
                  }else if(this.seatInfo[i].siStatus == "06"){
                    this.seatInfo[i].siStatusText = "待查勘"
                  }else if(this.seatInfo[i].siStatus == "09"){
                    this.seatInfo[i].siStatusText = "查勘完成"
                  }else if(this.seatInfo[i].siStatus == "11"){
                    this.seatInfo[i].siStatusText = "查勘订单已取消"
                  }else if(this.seatInfo[i].siStatus == "10"){
                    this.seatInfo[i].siStatusText = "待补拍"
                  }
                }
              }
            }else{
              alert(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
            }
            resolve(response.data);
          }, err => {
            this.$router.push({path:'/'})
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })

      },
      addSeatsDialog(){//打来添加坐席遮盖层
        this.editorActive = false;
        $(".seatListDialogBox").addClass("seatListDialogBoxAdd");
        $(".seatListDialog").removeClass("hide");
      },
      addSeats(){//添加坐席
        $(".seatListDialog").addClass("hide");
        $(".seatListDialogBox").removeClass("seatListDialogBoxAdd")
      },
      saveSeats(){//保存编辑坐席
        var paramData = {
          "chinaName": this.chinaName,
          "password": this.password,
          "telephone": this.telephone,
          "isLocked": this.isLocked,
          "advancePassword": "",
          "userId": this.userId
        }
        if(this.chinaName == ""){
          alert("请输入坐席姓名")
        }else if(this.chinaName.length > 80){
          alert("请输入合理姓名")
        }else if(this.telephone == ""){
          alert("请输入坐席手机号")
        }else  if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.telephone))){
          alert("请输入合理手机号")
        }else if(this.password == "" || this.password == null){
          alert("请输入坐席密码")
        }else{
          axios.post(this.ajaxUrl+"/pub/survey/v1/custom/service/update", paramData)
            .then(response => {
              if(response.data.rescode == 200){
                this.getSeatList()
                $(".seatListDialog").addClass("hide");
              }else{
                alert(response.data.resdes)
                $(".seatListDialog").addClass("hide");
              }
              resolve(response.data);
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }

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

