webpackJsonp(["app/js/classroom-manage/course-manage/index"],{0:function(e,s){e.exports=jQuery},"1dc821166b9aaaf0b4d1":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("8f840897d9471c8c1fbd"),c=a.n(o),n=a("b334fd7e4c5a19234db2"),r=a.n(n);$(".course-list-group").on("click",".close",function(){confirm("是否要从班级移除该课程？")&&$.post($(this).data("url"),function(e){e.success?(r()("success",Translator.trans("课程移除成功!")),window.location.reload()):r()("danger",Translator.trans("操作失败:")+e.message)})}),c()({element:"#course-list-group",itemSelector:"li",ajax:!1},function(e){$("#courses-form").submit()})}},["1dc821166b9aaaf0b4d1"]);