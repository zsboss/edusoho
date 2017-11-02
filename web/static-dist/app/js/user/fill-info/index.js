webpackJsonp(["app/js/user/fill-info/index"],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r("716c0bdbed7bf2c70c64"),i=n(a);new i.default({element:"#fill-userinfo-form"})},"716c0bdbed7bf2c70c64":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r("b843b6d59bfac301cf77"),l=n(s),d=function(e){function t(e){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),o(t,[{key:"createValidator",value:function(){this.validator=this.$element.validate({currentDom:"#form-submit-btn",rules:{email:{required:!0,email:!0,remote:{url:$("#email").data("url"),type:"get",data:{value:function(){return $("#email").val()}}}},mobile:{required:!0,phone:!0,remote:{url:$("#mobile").data("url"),type:"get",data:{value:function(){return $("#mobile").val()}}}},truename:{required:!0,chinese_alphanumeric:!0,minlength:2,maxlength:36},qq:{required:!0,qq:!0},idcard:{required:!0,idcardNumber:!0},gender:{required:!0},company:{required:!0},job:{required:!0},weibo:{required:!0,url:!0},weixin:{required:!0}},messages:{gender:{required:Translator.trans("site.choose_gender_hint")},mobile:{phone:Translator.trans("validate.phone.message")}}}),this.getCustomFields()}}]),t}(l.default);t.default=d},b843b6d59bfac301cf77:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r("0282bb17fb83bfbfed9b"),o=n(u),s=r("b334fd7e4c5a19234db2"),l=n(s),d=function(){function e(t){a(this,e),this.validator=null,this.$element=$(t.element),this.setup()}return i(e,[{key:"setup",value:function(){this.createValidator(),this.initComponents(),this.smsCodeValidate(),this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$element.on("click","#getcode_num",function(t){return e.changeCaptcha(t)}),this.$element.on("click",".js-sms-send",function(t){return e.sendSms(t)})}},{key:"initComponents",value:function(){$(".date").each(function(){$(this).datetimepicker({autoclose:!0,format:"yyyy-mm-dd",minView:2,language:document.documentElement.lang})})}},{key:"createValidator",value:function(){this.validator=this.$element.validate({currentDom:"#form-submit-btn",rules:{email:{required:!0,email:!0,remote:{url:$("#email").data("url"),type:"get",data:{value:function(){return $("#email").val()}}}},mobile:{required:!0,phone:!0,remote:{url:$("#mobile").data("url"),type:"get",data:{value:function(){return $("#mobile").val()}}}},truename:{required:!0,chinese_alphanumeric:!0,minlength:2,maxlength:36},qq:{required:!0,qq:!0},idcard:{required:!0,idcardNumber:!0},gender:{required:!0},company:{required:!0},job:{required:!0},weibo:{required:!0,url:!0},weixin:{required:!0}},messages:{gender:{required:Translator.trans("site.choose_gender_hint")},mobile:{phone:Translator.trans("validate.phone.message")}},submitHandler:function(e){$(e).valid()&&$.post($(e).attr("action"),$(e).serialize(),function(e){e.url?location.href=e.url:((0,l.default)("success",Translator.trans("site.save_success_hint")),$("#modal").modal("hide"))})}}),this.getCustomFields()}},{key:"smsCodeValidate",value:function(){$(".js-captch-num").length>0&&($('input[name="captcha_num"]').rules("add",{required:!0,alphanumeric:!0,es_remote:{type:"get",callback:function(e){e?$(".js-sms-send").removeClass("disabled"):($(".js-sms-send").addClass("disabled"),$(".js-captch-num").find("#getcode_num").attr("src",$("#getcode_num").data("url")+"?"+Math.random()))}},messages:{required:Translator.trans("site.captcha_code.required"),alphanumeric:Translator.trans("json_response.verification_code_error.message")}}),$('input[name="sms_code"]').rules("add",{required:!0,unsigned_integer:!0,es_remote:{type:"get"},messages:{required:Translator.trans("validate.sms_code_input.message")}}))}},{key:"sendSms",value:function(e){new o.default({element:".js-sms-send",url:$(".js-sms-send").data("smsUrl"),smsType:"sms_bind",dataTo:"mobile",captchaNum:"captcha_num",captcha:!0,captchaValidated:$('input[name="captcha_num"]').valid(),preSmsSend:function(){var e=!0;return e}})}},{key:"getCustomFields",value:function(){for(var e=1;e<=5;e++)$('[name="intField'+e+'"]').rules("add",{required:!0,positive_integer:!0}),$('[name="floatField'+e+'"]').rules("add",{required:!0,float:!0}),$('[name="dateField'+e+'"]').rules("add",{required:!0,date:!0});for(var e=1;e<=10;e++)$('[name="varcharField'+e+'"]').rules("add",{required:!0}),$('[name="textField'+e+'"]').rules("add",{required:!0})}},{key:"changeCaptcha",value:function(e){var t=$(e.currentTarget);t.attr("src",t.data("url")+"?"+Math.random())}}]),e}();t.default=d}});