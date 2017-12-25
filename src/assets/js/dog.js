var wilddogVideo = require('wilddog-video-base').wilddogVideo;
var roomFactory = require('wilddog-video-room');
wilddogVideo.regService('room', roomFactory);
var appVideoId = 'wd9409112059rndtfh';
// 初始化 WilddogVideoRoom 之前，要先经过身份认证。这里采用匿名登录的方式。
var config = {
  authDomain: appVideoId + ".wilddog.com"
};
// 初始化Wilddog auth
wilddog.initializeApp(config);



