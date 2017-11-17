<style scoped>
  .signSeats{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top:0;
    left:0
  }
  .signSeatsBox{
    width: 54%;
    margin: 15vh auto;
    background: #fff;
    padding: 20px;
    max-height: 65vh;
    position: relative;
  }
  .closCaseDetail{
    font-size: 42px;
    position: absolute;
    right: 15px;
    top: 0;
  }
.carInfoBox{
  /*height: 140px;*/
}
  .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }
  .carInfoBox .orderTime{
    color: #232323;
  }
   .carInfoBox{
    width: 28%;
    margin: 10px 15px;
    padding: 10px;
    font-size: 14px;
  }
  .titleInfo{
    font-size: 15px;
    padding: 15px;
  }
  .carInfoBoxOne,.carInfoBoxTwo{
    background: #fff;
  }
  .carInfoBoxOne{
    border: 1px dashed #FC3524;
  }
  .carInfoBoxTwo{
    border: 1px dashed #2EAB3B;
  }
  .carInfoBox p{
    line-height: 25px;
    font-weight: normal;
    font-style: normal;
  }
  .scrollBox{
    overflow-y: scroll;
    max-height: 47vh;
  }
  .imgBox{
    text-align: center;
  }
  .imgBox img{
    height: 60px;
    width: 60px;
    margin-top: 5px;
  }
  .seatInfo{
    padding-left: 10px;
  }
  .flex{
    padding: 5px 0;
  }
</style>
<template>
  <div class="signSeats hide">
    <div class="signSeatsBox">
      <span @click="closSignSeat" class="right closCaseDetail">×</span>
      <div class="oneMonitor clear">
        <h4 class="dialogTitle">订单指派</h4>
        <p class="titleInfo">请选择要指派的坐席</p>
        <div class="clear scrollBox">
          <div v-for="item in thirdCar">
            <div  class="left carInfoBoxOne carInfoBox" v-if="item.staius == 0">
                <div class="flex">
                  <div class="imgBox">
                    <img src="../images/kefuBlue.png">
                  </div>
                  <div class="seatInfo">
                    <h3 class="kefuName">张扬</h3>
                    <p class="carInfoOne">当前状态：<span class="orderTime" v-if="item.staius == 0">繁忙</span>
                      <span class="orderTime" v-if="item.staius == 1">空闲</span>
                    </p>
                    <p class="carInfoOne">待处理案件：0单</p>
                  </div>
                </div>
              </div>
              <div  class="left carInfoBoxTwo carInfoBox" v-if="item.staius == 1">
                <div class="flex">
                  <div class="imgBox">
                    <img src="../images/kefuBlue.png">
                  </div>
                  <div class="seatInfo">
                    <h3 class="kefuName">张扬</h3>
                    <p class="carInfoOne" >当前状态：<span class="orderTime" v-if="item.staius == 0">繁忙</span>
                      <span class="orderTime" v-if="item.staius == 1">空闲</span>
                    </p>
                    <p class="carInfoOne">待处理案件：0单</p>
                  </div>
                </div>
            </div>
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
          "staius":0
        },{
          "staius":1
        },
          {
            "staius":1
          },{
          "staius":0
        }]

      }
    },
    created(){

    },
    methods: {
      closSignSeat(){
        $(".signSeats").addClass("hide")
      }
    },
    components: {
    },
  }
</script>
