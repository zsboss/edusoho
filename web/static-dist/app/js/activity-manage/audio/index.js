webpackJsonp(["app/js/activity-manage/audio/index"],{0:function(e,n){e.exports=jQuery},"45a1a20ea193d91c1a61":function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("8533a2a15206a0ac5cb6");new(a.n(t).a)},"8533a2a15206a0ac5cb6":function(e,n,a){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,a,t){return a&&e(n.prototype,a),t&&e(n,t),n}}(),r=a("eca7a2561fa47d3f75f6"),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=a("f324dbdea53170d5000f"),d=function(){function e(){t(this,e),(0,u.showChooserType)($('[name="ext[mediaId]"]')),this.initStep2Form(),this.autoValidatorLength(),this.initFileChooser()}return i(e,[{key:"initStep2Form",value:function(){var e=$("#step2-form");e.data("validator");e.validate({groups:{nameGroup:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer unsigned_integer",second:"required second_range unsigned_integer","ext[mediaId]":"required"},messages:{minute:{required:"请输入时长",unsigned_integer:"时长必须大于0"},second:{required:"请输入时长",second_range:"秒只能在0-59之间",unsigned_integer:"时长必须大于0"},"ext[mediaId]":"请上传或选择%display%"}})}},{key:"autoValidatorLength",value:function(){$(".js-length").blur(function(){var e=$("#step2-form").data("validator");if(e&&e.form()){var n=0|parseInt($("#minute").val()),a=0|parseInt($("#second").val());$("#length").val(60*n+a)}})}},{key:"initFileChooser",value:function(){var e=new o.default,n=function(e){if((0,u.chooserUiClose)(),e.length){var n=parseInt(e.length/60),a=Math.round(e.length%60);$("#minute").val(n),$("#second").val(a),$("#length").val(60*n+a)}$('[name="ext[mediaId]"]').val(e.source),"self"==e.source?($("#ext_mediaId").val(e.id),$("#ext_mediaUri").val("")):($("#ext_mediaId").val(""),$("#ext_mediaUri").val(e.uri))};e.on("select",n)}}]),e}();n.default=d}},["45a1a20ea193d91c1a61"]);