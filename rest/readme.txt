rest是一个最简单的restful webservice事例。

===============================
一、安装
===============================
1、将rest解压到tomcat\webpps下
2、默认tomcat使用 8080 端口


==============================
二、测试
==============================
1、访问 http://127.0.0.1/rest/index.html
2、点击Get操作，出现Get按钮
3、点击 Get 按钮，调用Get方法
4、出现一个textview，弹出数据获取成功，显示 "*** Get Method Done!"
5、点击 Post操作，出现Post按钮和key1、value1等输入框
6、点击 Post按钮，调用Post方法
7、弹出数据获取成功，显示 "*** Post Method Done!{"key1":"value1","key2":"value2"}"


==============================
三、修改
==============================
1、IP地址修改
在js/webserviceClient.js,第8行

2、端口修改
在js/webserviceClient.js,第9行


=============================
四、源码提供
============================
 http://www.soachina.org






============================

任何问题，欢迎访问

http://www.soachina.org
http://weibo.com/davidweb

============================

第一版：
发布时间：2013-4-14
