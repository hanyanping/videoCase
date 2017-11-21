<template>
  <div class="caseList">
    <div class="caseListHeader">
      <form>
        <span>车牌号:</span>
        <input type="text" v-modle="reporterCarLicenseNo" placeholder="请输入车牌号"/>
        <span>手机号:</span>
        <input type="tel" v-model="reporterPhoneNo" placeholder="请输入手机号" maxlength="11"/>
        <span>保险报案号:</span>
        <input type="text" v-model="reportInsuranceNo" placeholder="请输入保险报案号"/>
        <span>保险公司:</span>
        <el-select v-model="insuranceCompanyCode" name="Companey" placeholder="请选择保险公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <span>机构:</span>
        <el-select v-model="orgCode" name="insititution" placeholder="请选择机构">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span >案件状态:</span>
        <el-select v-model="surveyStatus" name="case" placeholder="请选择机构">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>事故时间:</span>
        <div class="" style="display:inline-block;">
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <input type="hidden" placeholder="开始时间"  v-moodle="accidentStartTime" style="margin-right: 5px;" class="smInp" name="startDate" id="startTime" readonly="readonly">
        <input class="smInp" name="endDate" v-model="accidentEndTime" style="margin-left: 5px;" type="hidden" id="endTime" readonly="readonly" placeholder="结束时间">
        <span>处理时间:</span>
        <div class="" style="display:inline-block;">
          <el-date-picker
            v-model="value7"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <input type="hidden" v-model="handleStartTime" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="dealstartDate" id="dealstartTime" readonly="readonly"/>
        <input class="smInp" name="dealendDate" v-model="handleEndTime" style="margin-left: 5px;" type="hidden" id="dealendTime" readonly="readonly" placeholder="结束时间"/>
        <a href="#" class="caseListSure" @click="formSure">确定 </a>
        <a href="#" class="caseListReset">重置</a>
      </form>
    </div>
    <div class="caseListTable">
      <div class="tableTitle">
        <span>共: {{pages}},</span>
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
          <td>{{item.reporterCarLicenseNo}}</td>
          <td>{{item.reporterName}}</td>
          <td>{{item.reporterPhoneNo}}</td>
          <td>{{item.insuranceCompanyName}}</td>
          <td>{{item.accidentTime}}</td>
          <td>{{item.accidentAddress}}</td>
          <td>{{item.survey}}</td>
          <td>{{item.videoConnectRequestCount}}</td>
          <td><a href="#" class="listAssign">指派</a>|<a href="#" class="listView">查看</a></td>
        </tr>
        </tbody>
      </table>

    </div>
    <el-pagination  @current-change="handleCurrentChange"
      :current-page="currentPageNo"
      :page-size = "8"
     layout="prev,pager,next"
      :total="totalCount">
    </el-pagination>
    <!--&lt;!&ndash;layout="total,prev,pager, next,jumper"&ndash;&gt;layout="total,prev,pager, next,jumper"-->
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        reporterPhoneNo: "",
        reporterCarLicenseNo: "",
        reportInsuranceNo: "",
        orgCode: '',
        accidentStartTime:"",
        accidentEndTime: "",
        handleStartTime: "",
        handleEndTime: "",
        insuranceCompanyCode: '',
        surveyStatus: '',
        pageNo: '',
        pageSize: 8,
        pages: '',
        currentPageNo: 1,
        currentCount: "",
        survey: "",
        tableData: [],
        totalCount: "",
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        ajaxUrl: "/boot-pub-survey-manage"
      }
    },
     watch: {
       tableData: function(){
          this.currentCount = this.tableData.length;
          console.log(this.tableData.length)
        }
      },
      created() {
      this.getCaseList();
      },
      methods: {
        getCaseList() {
          var paramData = {
            "currentPageNo": this.currentPageNo,
            "pageSize": this.pageSize,
            "insuranceCompanyCode": this.insuranceCompanyCode,
            "orgCode": this.orgCode,
            "reporterCarLicenseNo":this.reporterCarLicenseNo,
            "reporterPhoneNo": this.reporterPhoneNo,
            "reportInsuranceNo": this.reportInsuranceNo,
            "surveyStatus":this.surveyStatus,
            "accidentStartTime": this.accidentStartTime,
            "accidentEndTime": this.accidentEndTime,
            "handleStartTime":this.handleStartTime,
            "handleEndTime":this.handleEndTime,
          }
          axios.post(this.ajaxUrl+"/pub/survey/v1/page",paramData)
            .then(response => {
              console.log(response)
              if(response.data.rescode == 200){
                this.tableData = response.data.data.records;
                this.totalCount = response.data.data.total;
                this.currentCount = response.data.data.size;
                this.pages = response.data.data.pages;
                for(let i in this.tableData){
                  if(this.tableData[i].surveyStatus == '06'){
                    this.tableData[i].survey = "待查勘"
                  }else if(this.tableData[i].surveyStatus == '07'){
                    this.tableData[i].survey = "查勘中"
                  }else if(this.tableData[i].surveyStatus == '08'){
                    this.tableData[i].survey = "已查勘"
                  }else if(this.tableData[i].surveyStatus == '09'){
                    this.tableData[i].survey = "查勘完成"
                  }else if(this.tableData[i].surveyStatus == '10'){
                    this.tableData[i].survey = "待补拍"
                  }else if(this.tableData[i].surveyStatus == '11'){
                    this.tableData[i].survey = "查勘订单已取消"
                  }
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
          console.log("CompaneyValue==============" + this.CompaneyValue)
          console.log("insitituValue===============" + this.insitituValue)
          console.log("案件状态:============" + this.caseValue)
          console.log("事故时间:==============" + this.value6)
          console.log("处理时间时间:==============" + this.value7)
        },
        handleCurrentChange(currentPage) {
          //当前页改变调用接口  pageNo  pageSize
          console.log(currentPage)
          this.currentPageNo = currentPage;
          this.getCaseList()
        },
      },
      components: {}

  }

</script>
<style scoped>
.caseList{
  width: 95%;
  background: #fff;
  font-size: 15px;
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
    padding: 6px 15px;
    display: inline-block;
    margin-bottom: 5px;
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
  }

</style>
