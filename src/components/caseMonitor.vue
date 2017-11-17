<style scoped>
  .caseMontor{
    width: 80%;
    margin:20px auto;
  }
  .caseMontorBox{
    display: flex;
    justify-content: center;
    margin-top: 30px;

  }
  .caseMinute{
    cursor: pointer;
    width: 22%;
    height: 160px;
    text-align:  center;
    border: 1px solid;
    border-radius: 6px;
    margin-right: 30px;
  }
  .caseMinute h3{
    margin-top: 40px;
    font-size: 24px;
  }
  .caseMinute .minuterdetail{
    color:#555;
    font-size:15px;
    text-align: left;
    margin-top: 15px;
    padding: 5px
  }
  .caseMontorDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0
  }
  .caseMontorDialogBox{
    width: 54%;
    margin: 15vh auto;
    background: #fff;
    padding: 20px;
    max-height: 65vh;
    position: relative;
  }
  .caseMontorDialogBox .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .titleInfo{
    font-size:15px;
    padding:15px;
  }
  .scrollBox{
    overflow-y: scroll;
    max-height: 45vh;
  }
  .scrollBox img{
    height: 68px;
    width: 68px;
    margin:0 auto;
  }
  .imgBox{
    text-align: center;
  }
  .carInfoBox, .carInfoBoxOne{
    width: 28%;
    margin: 10px 15px;
    padding:10px;
    font-size: 14px;

  }
  .carInfoBox{
    border: 1px dashed #DCDCDC;
    background: #F8F8F9;
  }
.carInfoBoxOne{
  border: 1px dashed #FC3524;
  background: #fff;
}
  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
  }
  .carInfoOne{
    padding-left:15px;
  }
  .orderDetail{
    text-align: center;
    display:inherit;
    color: #2EAB3B;
    text-decoration: underline;
    margin-top: 5px;
    cursor: pointer;
  }
  .orderDetailFoure{
    cursor: pointer;
    text-decoration: underline;
    color: #2EAB3B;
    margin-top: 5px;
  }
  .carInfoBox .orderTime, .carInfoBoxOne .orderTime{
    color: #FC3524;
  }
  .closCaseMontor{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .AssignSeat{
    background: #2EAB3B;
    color: #fff;
    font-size: 14px;
    display: inline-block;
    height: 35px;
    line-height: 35px;
    text-align: center;
    width: 70px;
  }
</style>
<template>
  <div>
    <div class="caseMontorDialog hide">
      <div class="caseMontorDialogBox">
        <span @click="closCaseMontor" class="right closCaseMontor">×</span>
        <div class="oneMonitor clear" v-if="caseActive.fivecase">
          <h4 class="dialogTitle">案件监控</h4>
          <p class="titleInfo">当日坐席超过2次30s内未接听视频的</p>
          <div class="clear scrollBox">
            <div v-for="item in cars" class="left carInfoBoxOne" >
              <div class="imgBox">
                <img src="../images/kefuBlue.png">
                <h3 class="kefuName">张扬</h3>
              </div>

              <p class="carInfoOne" style="margin-top:10px;">当前状态：<span class="orderTime">（处理中-未连线）</span></p>
              <p class="carInfoOne">待处理案件：0单</p>
              <p class="carInfoOne">今日已处理案件：5单</p>
              <p class="carInfoOne">今日登陆时间：8:00:00</p>
              <p class="carInfoOne orderTime">今日30s内未接听次数：3次</p>

            </div>
          </div>
        </div>
        <div class="oneMonitor clear" v-else>
          <h4 class="dialogTitle">案件监控</h4>
          <p class="titleInfo" v-if="caseActive.onecase">当日超过2分钟未分派查勘员</p>
          <p class="titleInfo" v-if="caseActive.twocase">当日现场查勘员预计到达时间未到达的</p>
          <p class="titleInfo" v-if="caseActive.threecase">当前现场查勘员到达现场超过5分钟未发起视频请求</p>
          <p class="titleInfo" v-if="caseActive.fourecase">现场查勘员发起视频请求超过3次未连接的</p>
          <p class="titleInfo" v-if="caseActive.sixcase">当前订单处理时间超过20分钟未查勘完成的</p>
          <p class="titleInfo" v-if="caseActive.sevencase">待处理订单超过20分钟未处理的</p>
          <p class="titleInfo" v-if="caseActive.eightcase">当日异常查勘完成的案件</p>
          <p class="titleInfo" v-if="caseActive.nighcase">待分配后台坐席订单数</p>
          <div class="clear scrollBox">
            <div v-for="item in cars" class="left carInfoBox">
              <p class="carInfo">报案人车牌号:{{item.carNo}}</p>
              <p class="carInfo">报案人姓名:{{item.name}}</p>
              <p class="carInfo">报案人电话:{{item.phone}}</p>
              <p class="carInfo">保险公司:{{item.companey}}</p>
              <p class="carInfo">事故地点:{{item.adress}}</p>
              <p class="carInfo" v-if="caseActive.nighcase">事故时间:2017-11-01 12:20:00</p>
              <p class="carInfo orderTime" v-if="caseActive.onecase">派单时间:{{item.time}}</p>
              <p class="carInfo" v-if="!caseActive.onecase && !caseActive.sixcase && caseActive.eightcase">派单时间:{{item.time}}</p>
              <p class="carInfo orderTime" v-if="caseActive.twocase">接单时间:{{item.time}}</p>
              <p class="carInfo" v-if="caseActive.threecase">接单时间:{{item.time}}</p>
              <p class="carInfo orderTime" v-if="!caseActive.onecase && caseActive.eightcase">现场查勘员姓名:{{item.time}}</p>
              <p class="carInfo orderTime"  v-if="!caseActive.onecase && caseActive.eightcase">现场查勘员电话：1345566666</p>
              <p class="carInfo orderTime" v-if="caseActive.sixcase || caseActive.sevencase || caseActive.eightcase">后台坐席：张扬</p>
              <p class="carInfo orderTime" v-if="caseActive.sixcase || caseActive.sevencase || caseActive.eightcase">开始处理时间：2017-11-01 12:20:00</p>
              <p class="carInfo orderTime" v-if="caseActive.eightcase">查勘完成时间：2017-11-01 12:20:00</p>
              <p class="carInfo orderTime" v-if="caseActive.eightcase">异常完成原因：2017-11-01 12:20:00</p>
              <p class="carInfo orderTime" v-if="caseActive.sevencase"> 挂起时间：2017-11-01 12:20:00</p>
              <p class="carInfo orderTime" v-if="caseActive.twocase">预计到达时间：2017-11-01 12:20:00 </p>
              <p class="carInfo orderTime" v-if="caseActive.threecase || caseActive.fourecase || caseActive.nighcase">实际到达现场时间：2017-11-01 12:20:00 </p>
              <p class="carInfo orderTime" v-if="caseActive.fourecase || caseActive.nighcase"> 请求链接次数：5次</p>
              <p class="carInfo" >案件状态：新案件-已指派-未到达现场</p>
              <span class="AssignSeat left" v-if="caseActive.fourecase || caseActive.nighcase" @click="goSignSeat">指派坐席</span>
              <a class="orderDetailFoure right" @click="goCaseDetail" v-if="caseActive.fourecase">查看详情</a>
              <a class="orderDetail" @click="goCaseDetail" v-if="(!caseActive.fourecase  && !caseActive.fivecase)">查看详情</a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <case-detail></case-detail>
    <sign-Seats></sign-Seats>

  <div class="caseMontor">
    <div class="caseMontorBox">
      <div class="caseMinute" style="background:#ECF5FF;border-color:#ABD5FF;"  @click="goCase(caseNuber.one)">
        <h3 class="minuteNuber" style="color:#46A0FC">3</h3>
        <p class="minuterdetail">当日超过2分钟未分派查勘员</p>
      </div>
      <div class="caseMinute" style="background:#F0F9EB;border-color:#AADA95;" @click="goCase(caseNuber.two)">
        <h3 class="minuteNuber" style="color:#6AC044">3</h3>
        <p class="minuterdetail">当日现场查勘员预计到达时间未到达的</p>
      </div>
      <div class="caseMinute" style="background:#FDF5E7;border-color:#FDDBA7;" @click="goCase(caseNuber.three)">
        <h3 class="minuteNuber"  style="color:#F79E14;">3</h3>
         <p class="minuterdetail">当日现场查勘员到达现场超过5分钟未发起视频请求</p>
      </div>
      <div class="caseMinute" style="background:#FFEEEE;border-color:#FCBCBD;" @click="goCase(caseNuber.foure)">
        <h3 class="minuteNuber" style="color:#F75759;">3</h3>
        <p class="minuterdetail">现场查勘员发起视频请求超过3次未连接的</p>
      </div>
    </div>
    <div class="caseMontorBox">
      <div class="caseMinute" style="background:#F0F9EB;border-color:#AADA95;"  @click="goCase(caseNuber.five)">
        <h3 class="minuteNuber" style="color:#6AC044;">3</h3>
        <p class="minuterdetail">当日坐席超过2次30s内未接听视频的</p>
      </div>
      <div class="caseMinute" style="background:#FFEEEE;border-color:#FCBCBD;" @click="goCase(caseNuber.six)">
        <h3 class="minuteNuber" style="color:#F75759;"> 3</h3>
        <p class="minuterdetail">当前订单处理时间超过20分钟未查勘完成的</p>
      </div>
      <div class="caseMinute" style="background:#ECF5FF;border-color:#ABD5FF;" @click="goCase(caseNuber.seven)">
        <h3 class="minuteNuber" style="color:#46A0FC;">3</h3>
        <p class="minuterdetail">待处理订单超过20分钟未处理的</p>
      </div>

      <div class="caseMinute" style="background:#FDF5E7;border-color:#FDDBA7;" @click="goCase(caseNuber.eight)">
        <h3 class="minuteNuber" style="color:#F79E14;">3</h3>
        <p class="minuterdetail">当日异常查勘完成的案件</p>
      </div>
    </div>
    <div class="caseMontorBox" style="justify-content: flex-start;" @click="goCase(caseNuber.nigh)">
      <div class="caseMinute" style="background:#FDF5E7;border-color:#FDDBA7;">
        <h3 class="minuteNuber" style="color:#F79E14;">3</h3>
        <p class="minuterdetail">待分配后台坐席订单数</p>
      </div>

    </div>
  </div>

  </div>
</template>
<script>
import caseDetail from '../components/caseDetail'
import signSeats from '../components/signSeats'
  export default {
    data() {
      return{
        cars:[],
        caseNuber : {
          "one":"1",
          "two":"2",
          "three":"3",
          "foure":"4",
          "five": "5",
          "six": "6",
          "seven":"7",
          "eight":"8",
          "nigh":"9"
        },
        caseActive: {
          "onecase": false,
          "twocase": false,
          "threecase": false,
          "fourecase": false,
          "fivecase": false,
          "sixcase": false,
          "sevencase": false,
          "eightcase": false,
          "nighcase": false,
        }
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
    methods: {
      goCase(item){//进入案件列表
        $(".caseMontorDialog").removeClass("hide");
        console.log(item)
        switch(item)
        {
          case "1":
           this.caseActive.onecase = true;
            break;
          case "2":
            this.caseActive.twocase = true;
            break;
          case "3":
            this.caseActive.threecase = true;
            break;
          case "4":
            this.caseActive.fourecase = true;
            break;
          case "5":
            this.caseActive.fivecase = true;
            break;
            case "6":
              this.caseActive.sixcase = true;
          break;
          case "7":
            this.caseActive.sevencase = true;
            break;
          case "8":
            this.caseActive.eightcase = true;
            break;
          case "9":
            this.caseActive.nighcase = true;
            break;
        }
        console.log(this.caseActive)
      },
      closCaseMontor(){//关闭第一层遮盖层
        $(".caseMontorDialog").addClass("hide");
        this.caseActive.onecase = false;
        this.caseActive.twocase = false;
        this.caseActive.threecase = false;
        this.caseActive.fourecase = false;
        this.caseActive.fivecase = false;
        this.caseActive.sixcase = false;
        this.caseActive.eightcase = false;
        this.caseActive.onecase = false;
        this.caseActive.nighcase = false;
      },
      goCaseDetail(){//查看案件详情
        $(".caseDetail").removeClass("hide")
      },
      goSignSeat(){//坐席指派
        $(".signSeats").removeClass("hide")
      }
    },
    components: {
      caseDetail,
      signSeats,
    },
  }

</script>

