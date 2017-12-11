<template>
  <div class="caseList">
    <div class="insitutionTab">
      <span class="insitutionTitle active">查勘员管理</span>
      <div class="lineBox"></div>
    </div>
    <div class="caseListHeader">
      <form>
        <span>姓名:</span>
        <input type="text" v-model="surveyUserName" placeholder="请输入查勘员姓名"/>
        <span>手机号:</span>
        <input type="tel" v-model="phone" placeholder="请输入手机号" maxlength="11"/>
        <span>所属城市:</span>
        <el-select v-model="affiliateCityCode" name="" placeholder="请选择城市">
          <el-option
            v-for="item in cityOptions"
            :key="item.companyName"
            :label="item.companyName"
            :value="item.companyCode">
          </el-option>
        </el-select>
        <span>所属单位:</span>
        <el-select v-model="affiliateCompanyCode" name="" placeholder="请选择单位">
          <el-option
            v-for="item in companeyOptions"
            :key="item.companyName"
            :label="item.companyName"
            :value="item.companyCode">
          </el-option>
        </el-select>
        <span>账号状态:</span>
        <el-select v-model="accountStatus"  name="case" placeholder="请选择账号状态">
          <el-option
            v-for="item in surveyOption"
            :key="item.code"
            :label="item.name"
            :value="item.code">
          </el-option>
        </el-select>
        <div class="buttonBox">
          <span class="caseListSure" @click="formSure">确定 </span>
          <span class="caseListReset" @click="resetData">重置</span>
        </div>

      </form>
    </div>
    <div class="caseListTable" v-if="tableActive">
      <div class="tableTitle">
        <span>共: {{pages}}页,</span>
        <span>{{totalCount}}条, </span>
        <span>当前页: {{currentCount}}条</span>
      </div>
      <table class="table" border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #bbb;">
        <thead>
        <tr>
          <th style="border-left:1px solid #bbb;">
            编号
          </th>
          <th>
            报案人车牌号
          </th>
          <th>
            报案人姓名
          </th>
          <th>
            报案人手机号
          </th>
          <th style="width:16%;">
            保险公司
          </th>
          <th style="width:12%;">
            事故时间
          </th>
          <th style="width:18%;">
            事故地点
          </th>
          <th>
            案件状态
          </th>
          <th>
            视频发起次数
          </th>
          <th>
            操作
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in tableData">
          <td>{{index+1}}</td>
          <td>{{item.surveyUserName}}</td>
          <td>{{item.reporterName}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.insuranceCompanyName}}</td>
          <td style="width:160px;">{{item.accidentTime}}</td>
          <td>{{item.accidentAddress}}</td>
          <td>{{item.survey}}</td>
          <td>{{item.videoConnectRequestCount}}</td>
          <td ><span v-if="item.surveyorStatus == '13'" class="listAssign" @click="signSeats(item.id)" >指派</span><i v-if="item.surveyorStatus == '13'">|</i><span  class="listView" @click="goCaseDetail(item.id,item.surveyStatus)">查看</span></td>
        </tr>
        </tbody>
      </table>
      <div>
        <el-pagination  @current-change="handleCurrentChange"
                        :current-page="page"
                        :page-size = "pageSize"
                        layout="prev,pager,next"
                        :total="totalCount">
        </el-pagination>
      </div>
    </div>
    <div class="caseListTable" v-else>
      <p style="text-align:center;padding: 15px 0;">暂无数据</p>
    </div>
    <case-detail v-if="caseDetailActive"></case-detail>
    <sign-Seats v-if="signSeatsActive"></sign-Seats>
    <!--&lt;!&ndash;layout="total,prev,pager, next,jumper"&ndash;&gt;layout="total,prev,pager, next,jumper"-->
  </div>
</template>
<script>
  import axios from 'axios'
  import caseDetail from '../components/caseDetail'
  import signSeats from '../components/signSeats'
  export default {
    data() {
      return {
        tableActive: false,
        phone: "",
        surveyUserName: "",
        affiliateCompanyCode: "",
        affiliateCityCode: '',
        accidentStartTime:"",
        accidentEndTime: "",
        handleStartTime: "",
        handleEndTime: "",
        insuranceCompanyCode: '',
        accountStatus: '',
        pageSize: 10,
        pages: '',
        surveyOption:[
          {"name":"正常","code":"0"},
          {"name":"锁定","code":"1"}
        ],
        page: 1,
        currentCount: "",
        survey: "",
        tableData: [],
        totalCount: 0,
        companeyOptions: [],
        cityOptions: [],
        showCaseDetail: false,
        caseDetailActive: false,
        signSeatsActive: false,
        caseListActive: false,
        time: '',
      }
    },
    watch: {
      getUserIcons(val) {
        this.caseDetailActive = val;
      },
      getsignSeatsActive(val) {
        this.signSeatsActive = val;
      },
      getCaseListActive(val) {
        this.caseListActive = val;

        if(this.caseListActive){
          this.getCaseList()
        }
      },
    },

    created() {
      this.getCompaney();
      this.getCaseList()
    },
    mounted() {
      this.caseDetailActive = this.$store.state.caseDetailActive;
    },
    methods: {

      open4(resdes) {
        this.$message.error(resdes);
      },
      open2(resdes) {
        this.$message.success(resdes);
      },
      signSeats(id){
        this.$store.commit('getsurveyOrderId',id);
        axios.get(this.ajaxUrl+'/web-surveyor/v1/list')
          .then(response => {
            if(response.data.rescode == 200){
              if(response.data.data.length != 0){
                localStorage.setItem("signSeatData",JSON.stringify(response.data.data))
                this.$store.commit('setSignSeatsActive', true);
                this.signSeatsActive = this.$store.state.signSeatsActive;
              }else{
                this.open2("暂无数据")
              }
            }else{
              this.open4(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getCompaney(){
        axios.get(this.ajaxUrl+"/surveyoruser/affiliate/company")
          .then(response => {
            if(response.data.rescode == 200){
              this.companeyOptions = response.data.data;
            }else{
              this.open4(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getCaseList() {
        var paramData = {
          "page": this.page,
          "size": this.pageSize,
          "affiliateCompanyCode": this.affiliateCompanyCode,
          "surveyUserName":this.surveyUserName,
          "phone": this.phone,
          "affiliateCityCode": this.affiliateCityCode,
          "accountStatus":this.accountStatus
        }
        axios.post(this.ajaxUrl+"/surveyoruser/surveyors",paramData)
          .then(response => {
            if(response.data.rescode == 200){
              this.tableData = response.data.data.records;
              this.$store.commit('getcaseListActive', false)//监听调用列表接口关闭
              if(response.data.data.records.length !=0){
                this.tableActive = true;
                this.totalCount = parseInt(response.data.data.total);
                this.currentCount = response.data.data.size;
                this.pages = response.data.data.pages;
                for(let i in this.tableData){
                  if(this.tableData[i].surveyStatus == '06'){
                    this.tableData[i].survey = "待查勘"
                  }else if(this.tableData[i].surveyStatus == '07'){
                    this.tableData[i].survey = "查勘中"
                  }else if(this.tableData[i].surveyStatus == '08'){
                    this.tableData[i].survey = "已查勘"
                  }else if(this.tableData[i].surveyStatus == '11'){
                    this.tableData[i].survey = "已取消"
                  }
                }
              }else{
                this.tableActive = false;
              }

            }else{
              this.open4(response.data.resdes)
              if(response.data.rescode == 300){
                this.$router.push({path:'/'})
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      handleClick(row) {
        console.log(row);
      },
      formSure() {
        this.getCaseList()
      },
      resetData(){
        this.affiliateCompanyCode = "";
        this.affiliateCityCode = "";
        this.surveyUserName = "";
        this.phone = "";
        this.reportInsuranceNo = "";
        this.surveyStatus = "";
        this.getCaseList()
      },
      handleCurrentChange(currentPage) {//跳转
        //当前页改变调用接口  pageNo  pageSize
        this.page = currentPage;
        this.getCaseList()
      },
      goCaseDetail(id,orderStatus){
        var paramData = {
          "id": parseInt(id),
          "orderStatus": orderStatus
        }
        axios.post(this.ajaxUrl+"/survey-detail/v1/get",paramData)
          .then(response => {
            if(response.data.rescode == 200){
              var data = JSON.stringify(response.data.data)
              localStorage.setItem("caseDetailData",data);
              this.$store.commit('setCaseDetailActive', true);
              this.caseDetailActive = this.$store.state.caseDetailActive;
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
      caseDetail,
      signSeats,
    },
    computed: {
      getUserIcons(){
        return this.$store.state.caseDetailActive;
      },
      getsignSeatsActive() {
        return this.$store.state.signSeatsActive;
      },
      getCaseListActive(){
        return this.$store.state.caseListActive;
      }
    },
    destroyed () {
      clearInterval(this.time);
    },
  }

</script>
<style scoped>
  .caseList .insitutionTab .insitutionTitle{
    cursor: pointer;
    display: inline-block;
    height: 45px;
    width: 100px;
    background: #fff;
    line-height: 45px;
    text-align: center;
    border: 1px solid #DFE4ED;
    border-bottom: none;
    font-size: 15px;
    color: #2EAB3B;
  }
  .buttonBox{
    margin: 10px 0;
    text-align: center;
  }
  .insitutionTab .lineBox{
    width: 90%;
    height: 1px;
    background: #DFE4ED;
    margin-top: -1px;
    margin-left: 100px;
  }
  .insitutionTab{
    width: 86%;
    margin: 15px auto;
    padding-top: 15px;
  }
  .insitutionTab .insitutionTitle{
    cursor: pointer;
    display: inline-block;
    height: 45px;
    width: 100px;
    background: #fff;
    color: #232323;
    line-height: 45px;
    text-align: center;
    border: 1px solid #DFE4ED;
    border-bottom: none;
    font-size: 15px;
  }
  .caseList{
    width: 86%;
    background: #fff;
    font-size: 15px;
    margin: 0 auto;
  }
.caseListHeader{
  width: 90%;
  margin: 0 auto;
}
  .caseListHeader form{
    width: 100%;
    margin-left: 25px;
    padding-bottom: 10px;
  }
  .caseListHeader input, .caseListHeader select{
    width: 11%;
    background: #fff;
    border: 1px solid #bbb;
    height: 35px;
    margin: 10px 30px 2px 10px;
    padding-left: 5px;
    border-radius: 4px;
    color: #232323;
  }
  .caseListHeader select{
    border-radius: 6px;
  }
  .caseListHeader label{
    margin-left: 10px;
  }
  .caseListSure, .caseListReset{
    border: 1px solid #2EAB3B;
    font-size: 15px;
    border-radius: 5px;
    margin-left: 10px;
    padding: 10px 40px;
    display: inline-block;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .caseListSure{
    color: #fff;
    background: #2EAB3B;
  }
  .caseListTable{
    padding-top: 10px;
    border-top: 1px solid #bbb;
  }
  .caseListTable .tableTitle{
    margin-bottom: 10px;
  }
  .caseListTable .tableTitle span{
    padding-right: 5px;
  }
  .caseListReset{
    color: #2EAB3B;
    background: #fff;
  }
  .table th{
    color: #2EAB3B;
    background: #ECF8F5;
    border: none;
  }
  .listAssign, .listView{
    color: #0D70D8;
    padding:6px;
    cursor: pointer;
  }

</style>
