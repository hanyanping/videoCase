<template>
  <div class="caseList">
    <div class="caseListHeader">
      <form>
        <lable>车牌号:</lable>
        <input type="text" placeholder="请输入车牌号"/>
        <lable>手机号:</lable>
        <input type="tel" placeholder="请输入手机号" maxlength="11"/>
        <lable>保险报案号:</lable>
        <input type="text" placeholder="请输入保险报案号"/>
        <lable>保险公司:</lable>
        <select name="jigou"></select>
        <lable>机构:</lable>
        <select name="statues"></select>
        <label for="">案件状态:</label>
        <select name="statue">
          <option value="">全部</option>
          <option value="06">待查勘</option>
          <option value="08">已查勘(待审核)</option>
          <option value="09">已完成</option>
          <option value="10">审核失败(待补拍)</option>
          <option value="11">查勘订单已取消</option>
        </select>
        <lable>事故时间:</lable>
        <input type="text" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="startDate" id="startTime" readonly="readonly">-
        <input class="smInp" name="endDate" style="margin-left: 5px;" type="text" id="endTime" readonly="readonly" placeholder="结束时间">
        <lable>处理时间:</lable>
        <input type="text" placeholder="开始时间" style="margin-right: 5px;" class="smInp" name="dealstartDate" id="dealstartTime" readonly="readonly"/>-
        <input class="smInp" name="dealendDate" style="margin-left: 5px;" type="text" id="dealendTime" readonly="readonly" placeholder="结束时间"/>
        <a href="#" class="caseListSure">确定 </a>
        <a href="#" class="caseListReset">重置</a>
      </form>
    </div>
    <div class="caseListTable">
      <table class="table" border="0" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th>
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
        tableData: [],
        totalCount:0,
        currentPage: 7
      }
    },
    created(){
      this.tableData = [{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司对对对对对",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "2",
        date: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "4",
        date: '2016-05-02',
        address: '北京市朝阳区双井百万字劲松达到128号'
      },{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司对对对对对",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "2",
        date: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "4",
        date: '2016-05-02',
        address: '北京市朝阳区双井百万字劲松达到128号'
      },{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司对对对对对",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "2",
        date: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "4",
        date: '2016-05-02',
        address: '北京市朝阳区双井百万字劲松达到128号'
      },{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司对对对对对",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "2",
        date: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "4",
        date: '2016-05-02',
        address: '北京市朝阳区双井百万字劲松达到128号'
      },{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司对对对对对",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "2",
        date: '2016-05-02',
        address: '上海市普陀区金沙江路 1518 弄'
      },
        {
          reportNo:"A京12334",
          reportName:"李四交警",
          phone:"134555553333",
          gongsi:"平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "4",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        },{
          reportNo:"A京12334",
          reportName:"李四交警",
          phone:"134555553333",
          gongsi:"平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "2",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          reportNo:"A京12334",
          reportName:"李四交警",
          phone:"134555553333",
          gongsi:"平安报喜那公司",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "4",
          date: '2016-05-02',
          address: '北京市朝阳区双井百万字劲松达到128号'
        },{
          reportNo:"A京12334",
          reportName:"李四交警",
          phone:"134555553333",
          gongsi:"平安报喜那公司对对对对对",
          time: "2017-11-12 12:12:12",
          caozuo: '02',
          shipin: '3',
          status: "2",
          date: '2016-05-02',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
        reportNo:"A京12334",
        reportName:"李四交警",
        phone:"134555553333",
        gongsi:"平安报喜那公司",
        time: "2017-11-12 12:12:12",
        caozuo: '02',
        shipin: '3',
        status: "4",
        date: '2016-05-02',
        address: '北京市朝阳区双井百万字劲松达到128号'
      }];
      this.totalCount = this.tableData.length;
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleCurrentChange(){

      }
    },
    components: {

    },
  }

</script>
<style scoped>
.caseList{
  width: 90%;
  background: #fff;
  font-size: 15px;
  margin: 0 auto;
}

.caseListHeader form{
  width: 100%;
  margin-left: 25px;
 }
  .caseListHeader input, .caseListHeader select{
    width: 10.5%;
    background: #fff;
    border: 1px solid #bbb;
    height: 35px;
    margin: 10px 20px;
    text-indent: 5px;
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
  .caseListReset{
    color: #2EAB3B;
    background: #fff;
  }
  .table th{
    color: #2EAB3B;
  }
  .listAssign, .listView{
    color: #0D70D8;
    padding:6px;
  }

</style>
