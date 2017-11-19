<style scoped>
  .insitutionList{
    width: 90%;
    margin: 0 auto;
  }
 .insitutionList .insitutionMinute{
    cursor: pointer;
    width: 20%;
    text-align:  center;
    border-radius: 6px;
    margin-right: 30px;
    max-height: 260px;
    overflow: scroll;
    margin-bottom: 20px;
    border: 1px solid #bbb;
    margin-top: 10px;
  }
  .insitutionList .insitutionMinute h3{
    margin-top: 5px;
    font-size: 24px;
  }
  .insitutionList .insitutionMinute .minuterdetail{
    color:#555;
    font-size:15px;
    text-align: left;
    margin-bottom: 15px;
    padding-left: 7%;
  }
  .insitutionList .insitutionMinute  .minuteNuber{
    font-size: 16px;
    font-weight: 600;
  }
  .insititutListDialog{
    background: rgba(0,0,0,0.3);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .insititutListDialogBox{
    width: 38%;
    margin: 10vh auto;
    background: #fff;
    padding: 20px;
    max-height: 70vh;
    position: relative;
  }
  .insititutListDialog .dialogTitle{
    color: #232323;
    font-size:16px;
    font-weight: 600;
  }

  .insititutListDialog .scrollBox{
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

  .insitutionList .addFont{
    margin: 90px auto;
  }
  .insitutionList .addFont img{
    height: 50px;
    width: 50px;
  }
  .insititutListDialog .closinsititutMontor{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .insititutListDialog .addinsitituteSure{
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
  .addinsitituteInput{
    padding: 10px 0 10px 10%;
  }
  .addinsitituteInput span{
    display: inline-block;
    min-width:20%;
  }
  .addinsitituteInput input,.addinsitituteInput select{
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
    <div class="insititutListDialog hide">
      <div class="insititutListDialogBox">
        <span @click="closinsititutMontor" class="closinsititutMontor">×</span>
        <div class="oneMonitor clear">
          <h4 class="dialogTitle">添加机构</h4>
          <div class="clear scrollBox">
            <div style="margin-top:20px;">
              <div class="addinsitituteInput">
                <span>机构名称</span>
                <select>
                  <option></option>
                </select>
              </div>
              <div class="addinsitituteInput">
                <span>机构账号</span>
                <input type="text" placeholder="请输入坐席账号"/>
              </div>
              <div class="addinsitituteInput">
                <span>账号密码</span>
                <input type="text" placeholder="请输入坐席账号密码"/>
              </div>
              <div class="addinsitituteInput">
                <span>联系人</span>
                <input type="text" placeholder="请输入坐席姓名"/>
              </div>
              <div class="addinsitituteInput">
                <span>联系人手机号</span>
                <input type="tel" maxlength="11" placeholder="请输入坐席手机号"/>
              </div>
              <div class="addinsitituteInput">
                <span>账号状态</span>
                <select>
                  <option>正常</option>
                </select>
              </div>
              <div class="addinsitituteInput">
                <span class="addinsitituteSure backColorGreen" @click="addInsititution">确定</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="insitutionList">
      <div class="insitutionBox clear">
        <div class="insitutionMinute left" v-for="item in seatsList"  @click="goInsititionEditor" >
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber">中车查看定损中心</h3>
          </div>
          <p class="minuterdetail">当前状态: 正常</p>
          <p class="minuterdetail">未处理案件: 1</p>
          <p class="minuterdetail">今日已处理案件: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
        </div>
        <div class="insitutionMinute left" style="background:#F8F8F9;min-height:260px;"  @click="addInsitituDialog">
          <div class="addFont">
            <img src="../images/add.png">
          </div>
        </div>
      </div>
    </div>
    <el-pagination  @size-change="handleSizeChange"  @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size = "5"

                    layout="total,prev,pager, next,jumper"
                    :total="totalCount">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        insititutEditorActive: '',
        totalCount: 100,
        editorActive: false,
        seatsList:[{"statius":1},
          {"statius":0},
          {"statius":0},
          {"statius":2},
          {"statius":11}]
      }
    },
    props: {
      insititutActive: Boolean
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
//      "editorActive": function(){
//        if(this.editorActive == false){
//          $(".seatListDialogBox").addClass("seatListDialogBoxAdd")
//
//        }else{
//          $(".seatListDialogBox").removeClass("seatListDialogBoxAdd")
//        }
//      }
    },
    methods: {
      goInsititionEditor(){//机构信息编辑
      this.insititutEditorActive = true;
      console.log(this.insititutEditorActive);

        this.$emit('message', this.insititutEditorActive);
      },
      addInsitituDialog(){//打来添加机构遮盖层
        this.editorActive = false;
        $(".insititutListDialog").addClass("insititutListDialogBoxAdd");
        $(".insititutListDialog").removeClass("hide");
      },
      addInsititution(){//添加坐席
        $(".insititutListDialog").addClass("hide");
      },
      closinsititutMontor(){//关闭遮盖层
        $(".insititutListDialog ").addClass("hide");
      }
    },
    components: {
    },
  }

</script>

