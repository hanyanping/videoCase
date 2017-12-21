<style scoped>
  .caseManage{
    margin: 15px auto;
    width: 1278px;
    overflow-y: scroll;
    height: 82vh;
    padding-bottom: 20px;
  }
  .caseContent{
    display: flex;
    padding-bottom:15px;
  }
  .caseLeft,.caseRight{
    width:246px;
    height: 488px;
    background:#fff;
  }
  .caseCenter{
    width: 746px;
    margin: 0 20px;
  }
  .caseManage .video-player{
    width: 100%;
    background: #515151;
    color: #fff;
    height: 488px;
  }
  .caseLeft .tit, .caseRight .tit {
    padding: 15px 0 5px;
  }
  .caseLeft .tit h4, .caseRight .tit h4{
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
    font-weight: 600;
  }
  .caseLeft .cont {
    padding: 0 20px 20px;
  }
 .m-noContent-mod {
    text-align: center;
    padding: 100px 0;
  }
   .m-noContent-mod .mnm-icon {
    margin-bottom: 20px;
  }
    .m-noContent-mod p {
      color: #999;
      font-size: 15px;
  }
  .casePhotos .g-content-row {
    margin-bottom: 20px;
    overflow: hidden;
  }
  .casePhotos .g-content-row .gcr-mod{
    background: #fff;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit {
    padding: 10px 0 5px;
    position: relative;
    overflow: hidden;
  }
  .casePhotos .m-carNo-imgInfo .gcr-tit h4 {
    margin-top: 5px;
    font-size: 20px;
    display: inline-block;
    border-left: 4px solid #35aa42;
    padding-left: 18px;
  }
  .casePhotos .g-content-row .gcr-cont {
    padding: 10px 0;
    height: 200px;
  }
 #picListZone .suibian{
    display: -webkit-box;
   width: 2200px;
   margin: 30px 20px;
  }
  #picListZone .suibian li{
    margin: 0 8px;
  }
  #picListZone .suibian li img {
    width: 184px;
    height: 126px;
    display: block;
  }
  #picListZone .suibian li .liImgbox{
    background: #dcdcdc;
    position: relative;
    width: 184px;
    left: 0;
    top: 20px;
    height: 126px;
  }
  #picListZone .suibian li .title {
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    width: 100%;
    background: rgba(255,255,255,.5);
    z-index: 99;
  }
  .scalImgBox{
    background: rgba(0,0,0,0.8);
    width:100%;
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .scalImgBox .bigImgContent{
    width: 600px;
    margin: 6vh auto;
    background: #fff;
    padding: 20px;
    height: 820px;
    position: relative;
  }
  .closeCaleImgBox{
    font-size: 42px;
    right: 15px;
    top: 0;
    position: absolute;
  }
  .imgSize{
    width: 500px;
    height: 6807px;
    margin:15px auto;
    vertical-align: middle;
  }
  .imgSize img{
    max-width:100%;
    max-height: 100%;
  }
  .swiper-slide{
    width: 120px;
  }
</style>
<template>
  <div class="caseManage">
    <div class="scalImgBox hide">
      <div class="bigImgContent">
        <h4>{{imgType}}</h4>
        <span @click="closeCaleImg" class="right closeCaleImgBox">×</span>
        <div class="imgSize">
          <img :src="photoUrl" />
        </div>
      </div>
    </div>
    <div class="caseContent">
      <div class="caseLeft">
        <div class="tit">
          <h4>正在处理案件</h4>
          <input type="hidden" id="cc-userid">
          <input type="hidden" id="cc-password">
          <input type="hidden" id="cc-roomid">
        </div>
        <div id="doing" class="cont">
          <div class="m-noContent-mod">
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无正在处理中的案件...</p>
          </div>
        </div>
      </div>
      <div class="caseCenter">
        <div class="video-player">
          <div id="video" class="video" style="width: 746px;height: 488px;">
            <img id="video-background" src="../images/video-default.png"/>
          </div>
        </div>
      </div>
      <div class="caseRight">
        <div class="tit">
          <h4>待处理案件</h4>
        </div>
        <div id="wait" class="cont">
          <div class="m-noContent-mod">
            <div class="mnm-icon">
              <img src="../images/bookIco_0.png">
            </div>
            <p>暂无待处理的案件...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="casePhotos">
      <div class="g-content-row">
        <div class="gcr-mod m-carNo-imgInfo">
          <div class="gcr-tit" id="carInfo">
            <h4>照片信息</h4>
            <dl class="m-carNo-list" id="selectImgType"></dl>
          </div>
          <div class="gcr-cont" style="padding-top: 0">
            <div class="m-carNo-imgList" id="picListZone">

              <ul class="suibian">
                <li v-for="(itemImg,index) in ImgInfo" @click="scaleImg(itemImg.photoUrl,itemImg.photoTypeComment,index)">
                  <div class="liImgbox">
                    <img :data-src="itemImg.photoUrl" :src="itemImg.smallPhotoUri"/>
                    <br>
                    <span class="title">
                      <a href="javascript:;">{{itemImg.photoTypeComment}}</a></span>
                  </div>

                </li>
              </ul>
            </div>
          </div>

          <!--<swiper :options="swiperOption" ref="mySwiper">-->
            <!--&lt;!&ndash; slides &ndash;&gt;-->
            <!--<swiper-slide>I'm Slide 1</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 2</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
            <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
            <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
            <!--<div class="swiper-pagination"  slot="pagination"></div>-->
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
          <!--</swiper>-->

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import caseList from '@/components/caseList'
  import caseMonitor from '@/components/caseMonitor'
  import Viewer from 'viewerjs';
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return{
        swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',//上一张
          nextButton:'.swiper-button-next',//下一张
          scrollbar:'.swiper-scrollbar',//滚动条
          mousewheelControl : true,
          observeParents:true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
        },
        jianKongActive: true,
        allCaseActive: false,
        ImgInfo: [{"photoUrl": "http://zcbl.oss-cn-beijing.aliyuncs.com/e1e52a78985c41fda1aa3bd978c0e786.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-1.jpg","photoTypeComment":"45度车照片"},
          {"photoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg","photoTypeComment":"银行卡照片"},
          {"photoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg","photoTypeComment":"银行卡照片"},
          {"photoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg","photoTypeComment":"银行卡照片"},
          {"photoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg","photoTypeComment":"银行卡照片"},

          {"photoUrl": "http://www.dowebok.com/demo/192/img/tibet-2.jpg","smallPhotoUri":"http://www.dowebok.com/demo/192/img/thumbnails/tibet-2.jpg","photoTypeComment":"银行卡照片"},
          {"photoUrl":"http://zcbl.oss-cn-beijing.aliyuncs.com/e1e52a78985c41fda1aa3bd978c0e786.jpg","photoTypeComment":"银行卡照片","smallPhotoUri":"http://zcbl.oss-cn-beijing.aliyuncs.com/e1e52a78985c41fda1aa3bd978c0e786.jpg?x-oss-process=image/resize,m_mfit,h_100,w_100"}
        ],
        imgIndex: '',
        imgType: "",
        photoUrl: ""
      }
    },
    created(){
      this.$nextTick(() => {
//        this.scaleImgv()
      })

    },

    methods: {
      closeCaleImg(){
        $(".scalImgBox").addClass('hide');
      },
      scaleImgv(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'vertical',
          loop: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      },
      scaleImg(photoUrl,photoTypeComment,index){
        $(".scalImgBox").removeClass('hide');
        this.imgType = photoTypeComment;
        this.imgIndex = index;
        this.photoUrl = photoUrl;
      },
      tabChange(event){
        var attributes = event.target.attributes;
        for(var i=0;i< attributes.length;i++){
          if(i == 1){
            if(attributes[i].nodeValue.indexOf('caseJiankong') > -1){
              attributes[i].nodeValue = 'caseJiankong active';
              $(".allCase").attr("class","allCase");
              this.jianKongActive = true;
              this.allCaseActive = false;
            }else  if(event.target.attributes[i].nodeValue.indexOf('allCase') > -1){
              $(".caseJiankong").attr("class","caseJiankong");
              attributes[i].nodeValue = 'allCase active';
              this.jianKongActive = false;
              this.allCaseActive = true;
            }
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
  }

</script>

