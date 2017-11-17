<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  　　<div class="contents">
  　　　　<div class="group">
  　　　　　　<div class="special">
  　　　　　　　　<span v-text="pagedata.subtitle"></span>
  　　　　　　</div>
  　　　　　　<span class="text-muted" v-text="pagedata.headline"></span>
  　　　　　　<div class="group_img">
  　　　　　　　　<!-- 放大图片 -->
  　　　　　　　　<big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
  　　
  　　　　　　　　<div class="text" v-text="pagedata.article"></div>
  　　　　　　　　<img id="smallImg" :src="pagedata.imgurl" @click="clickImg($event)">
  　　　　　　</div>
  　　　　</div>
  　　</div>
</template>

<script>
  import BigImg from './BigImg.vue';
  export default {
    data () {
      return {
        showImg:false,
        imgSrc: ''
      }
    },
    props: ['pagedata'],
    computed: {},
    components: { 'big-img':BigImg},
    methods: {
      clickImg(e) {
        this.showImg = true;
        // 获取当前图片地址
        this.imgSrc = e.currentTarget.src;
      },
      viewImg(){
        this.showImg = false;
      },
    },
    watch: {},
  }
</script>
<style>
</style>
