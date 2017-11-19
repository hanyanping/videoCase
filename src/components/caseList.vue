<template>
  <div class="caseList">
    <div class="caseListHeader">
      <form>
        <span>车牌号:</span>
        <input type="text" placeholder="请输入车牌号"/>
        <span>手机号:</span>
        <input type="tel" placeholder="请输入手机号" maxlength="11"/>
        <span>保险报案号:</span>
        <input type="text" placeholder="请输入保险报案号"/>
        <span>保险公司:</span>
        <el-select v-model="CompaneyValue" name="Companey" placeholder="请选择保险公司">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <span>机构:</span>
        <el-select v-model="insitituValue" name="insititution" placeholder="请选择机构">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span >案件状态:</span>
        <el-select v-model="caseValue" name="case" placeholder="请选择机构">
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
        <input type="hidden" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="startDate" id="startTime" readonly="readonly">
        <input class="smInp" name="endDate" style="margin-left: 5px;" type="hidden" id="endTime" readonly="readonly" placeholder="结束时间">
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
        <input type="hidden" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="dealstartDate" id="dealstartTime" readonly="readonly"/>
        <input class="smInp" name="dealendDate" style="margin-left: 5px;" type="hidden" id="dealendTime" readonly="readonly" placeholder="结束时间"/>
        <a href="#" class="caseListSure" @click="formSure">确定 </a>
        <a href="#" class="caseListReset">重置</a>
      </form>
    </div>
    <div class="caseListTable">
      <div class="tableTitle">
        <span>共: 10页,</span>
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
          <td>{{item.reportNo}}</td>
          <td>{{item.reportName}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.gongsi}}</td>
          <td>{{item.time}}</td>
          <td>{{item.address}}</td>
          <td>{{item.status}}</td>
          <td>{{item.shipin}}</td>
          <td><a href="#" class="listAssign">指派</a>|<a href="#" class="listView">查看</a></td>
        </tr>
        </tbody>
      </table>

    </div>
    <el-pagination  @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size = "5"
     layout="prev,pager,next"
      :total="totalCount">
    </el-pagination>
    <!--&lt;!&ndash;layout="total,prev,pager, next,jumper"&ndash;&gt;layout="total,prev,pager, next,jumper"-->
  </div>
</template>
<script>

  export default {
    data() {
      return {
        insitituValue: '',
        CompaneyValue: '',
        caseValue: '',
        pageNo: '',
        currentPage: 1,
        currentCount: "",
        tableData: [],
        totalCount: 40,
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
        value7: ''
      }
    },
     watch: {
       tableData: function(){
          this.currentCount = this.tableData.length;
          console.log(this.tableData.length)
        }
      },
      created() {
        this.tableData = [{
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "新案件-已指派",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "新案件-已指派",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "新案件-已指派",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "4",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "2",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "4",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "2",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "4",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        }, {
          reportNo: "A京12334",
          reportName: "李四交警",
          phone: "134555553333",
          gongsi: "平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "2",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        },
          {
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "4",
            date: '2016-05-02',
            address: '北京市朝阳区双井百万字劲松达到128号'
          }, {
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司对对对对对",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "2",
            date: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "4",
            date: '2016-05-02',
            address: '北京市朝阳区双井百万字劲松达到128号'
          }, {
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司对对对对对",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "2",
            date: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "4",
            date: '2016-05-02',
            address: '北京市朝阳区双井百万字劲松达到128号'
          }];
        this.totalCount = this.tableData.length;
        this.currentCount = this.tableData.length;
      },
      methods: {
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
          this.pageNo = currentPage;
          this.tableData = [{
            reportNo: "A京12334",
            reportName: "李四交警",
            phone: "134555553333",
            gongsi: "平安报喜那公司对对对对对",
            time: "2017-11-12 12:12:12",
            caozuo: '02',
            shipin: '3',
            status: "新案件-已指派",
            date: '2016-05-02',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
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
