webpackJsonp(["app/js/pay/wxpay-h5/index"],{ef14c1709c32ffb2fb74:function(e,n){function a(){WeixinJSBridge.invoke("getBrandWCPayRequest",$("#jsApiParameters").data("value"),function(e){"get_brand_wcpay_request:ok"==e.err_msg?window.location.href=$("#jsApiParameters").data("goto"):"get_brand_wcpay_request:fail"==e.err_msg?alert("支付失败"):e.err_msg})}$(".panel-wxpay").on("click",".js-wxpay",function(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",a,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a),document.attachEvent("onWeixinJSBridgeReady",a)):a()})}},["ef14c1709c32ffb2fb74"]);