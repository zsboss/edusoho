webpackJsonp(["app/js/open-course-manage/picture-crop/index"],{b15d5e658e0970f1ac54:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=t("12695715cd021610570e"),c=t.n(r),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();new(function(){function e(){o(this,e),this.init()}return i(e,[{key:"init",value:function(){var e=new c.a({element:"#course-picture-crop",cropedWidth:480,cropedHeight:270});e.afterCrop=function(e){var n=$("#upload-picture-btn").data("url");$.post(n,{images:e},function(){document.location.href=$("#upload-picture-btn").data("gotoUrl")})},$("#upload-picture-btn").click(function(n){$(n.currentTarget).button("loading"),n.stopPropagation(),e.crop({imgs:{large:[480,270],middle:[304,171],small:[96,54]}})}),$(".go-back").click(function(){history.go(-1)})}}]),e}())}},["b15d5e658e0970f1ac54"]);