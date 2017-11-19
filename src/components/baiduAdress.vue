<template>
  <div id="allmap"></div>
</template>
<script>
  import BMap from "BMap"
  export default {
    data() {
      return{

      }
    },
    mounted() {
      this.ready();
    },
    methods: {
      ready: function() {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(104.075796, 30.659684);
        map.centerAndZoom(new BMap.Point(104.047404, 30.696035), 14);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("小龙坎火锅");
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
      }
    },
  }
</script>
