<style scoped>
  .insitutionEditorBottom{
    width: 90%;
    margin: 0 auto;
  }
 .insitutionEditorBottom .insitutionMinute{
    cursor: pointer;
    width: 20%;
    text-align:  center;
    border-radius: 6px;
    margin-right: 30px;
    min-height: 250px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
 .insitutionEditorBottom .insitutionEditorBox{
   display: flex;
   justify-content: center;
 }
 .insitutionEditorBottom .insitutionMinute h3{
    margin-top: 5px;
    font-size: 16px;
   font-weight: 600;

  }
  .insitutionMinute .minuterdetail{
    color:#555;
    font-size:15px;
    text-align: left;
    margin-bottom: 15px;
    padding-left: 7%;
  }

  .insitutionEditorBottom .imgBox img{
    height: 68px;
    width: 68px;
    margin:0 auto;
  }
  .insitutionEditorBottom .imgBox{
    text-align: center;
    padding: 10px;
  }
  .insititueEditorTop{
    padding: 5px 25px;
    width: 85%;
    margin: 0 auto;
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
  }
  .insititueEditorTop .insitituteEditor{
    margin-right: 5%;
    margin-top: 15px;
    cursor: pointer;
  }
  .insititueEditorTop .insitituName{
    font-weight: 600;
    padding: 15px 0;
    display: inline-block;
    font-size: 18px;
  }
  .insittituLeft,.insitituRight{
    padding: 0 15px;
  }
  .insitituRight{
    border-left: 1px solid #bbb;
    width: 62%;
  }
  .insittituLeft{
    width: 35%;
    padding-top: 30px
  }
  .infoInsitute{
    padding-left: 40px;
    padding-bottom: 6px;
    display: flex;
    line-height: 30px;
  }
  .insittituLeft .infoInsituteItem{
    width: 50%;
  }
  .infoInsitute input, .infoInsitute select{
    height: 35px;
    line-height: 35px;
    padding-left:5px;
    /*border: 1px solid #f4f4f4;*/
    /*border-radius: 4px;*/
    width: 23%;
    margin-right: 10%;
    margin-left: 6px;
    margin-top: -3px;
  }
</style>
<template>
  <div>

    <div class="insititueEditorTop clear ">
      <h3 class="insitituName">中车定损中心</h3>
      <div class="right insitituteEditor colorGreen">
        <img @click="goBackInsititionList" class="" src="../images/editor.png"/>
        <span @click="goBackInsititionList" class="insitituteButton">编辑</span>
      </div>
      <div class="flex">
        <div class="insittituLeft">
          <p class="infoInsitute">
            <span class="infoInsituteItem">坐席数: 12</span>
            <span class="infoInsituteItem">未处理案件: 4</span>
          </p>
          <p class="infoInsitute">
            <span class="infoInsituteItem">坐席数: 12</span>
            <span class="infoInsituteItem">未处理案件: 4</span>
          </p>
        </div>
        <div class="insitituRight">
          <div class="infoInsitute">
            <span>机构账号: </span><input type="text" value="kdkdmjk"/>
            <span>账号密码: </span><input type="text" value="ddfdfdfd">
          </div>
          <div class="infoInsitute"><span>联系人:</span> <input type="text" value="kdkdmjk"/>
          <span>手机号: </span><input type="tel" maxlength="11" value="ddfdfdfd">
          </div>
          <div class="infoInsitute">当前状态: <select>
            <option>正常</option>
          </select>
            </div>
        </div>
      </div>

    </div>
    <div class="insitutionEditorBottom">
      <div class="insitutionEditorBox">
        <div class="insitutionMinute bordercolorRed" v-for="item in seatsList"  @click="goInsititionEditor" v-if="item.statius == 0">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber">张扬</h3>
          </div>
          <p class="minuterdetail">当前状态: 繁忙<span class="colorRed">(处理中-未连线)</span></p>
          <p class="minuterdetail">未处理案件: 1</p>
          <p class="minuterdetail">今日已处理案件: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
        </div>
        <div class="insitutionMinute bordercolorGreen" v-for="item in seatsList"  @click="goInsititionEditor" v-if="item.statius == 1">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber">张扬</h3>
          </div>
          <p class="minuterdetail">当前状态: 正常</p>
          <p class="minuterdetail">未处理案件: 1</p>
          <p class="minuterdetail">今日已处理案件: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
        </div>
        <div class="insitutionMinute bordercolorGray" style="background:#F8F8F9;" v-for="item in seatsList"  @click="goInsititionEditor" v-if="item.statius == 2">
          <div class="imgBox">
            <img src="../images/kefuBlue.png">
            <h3 class="minuteNuber">张扬</h3>
          </div>
          <p class="minuterdetail">当前状态: 未在线</p>
          <p class="minuterdetail">未处理案件: 1</p>
          <p class="minuterdetail">今日已处理案件: 0</p>
          <p class="minuterdetail">累计处理案件: 0</p>
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
        seatsList:[{"statius":1},
          {"statius":0},
          {"statius":0},
          {"statius":2}]

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

    },
    methods: {
      goBackInsititionList(){//保存编辑
        this.insititutEditorActive = false;
        console.log(this.insititutEditorActive);
        this.$emit('message', this.insititutEditorActive);
      }
    },
    components: {
    },
  }

</script>

