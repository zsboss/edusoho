webpackJsonp(["app/js/pay/show-mobile-modal/index"],{"6469b7804c5446db9b2d":function(e,n){var a=$("#modal"),i=$("#unbind-form"),o=$("#unbind-btn"),d=i.validate({rules:{mobile:{required:!0,phone:!0}}});o.click(function(){if(d.form()){o.button("loading"),a.modal("hide");var e=$("input[name='payAgreementId']").val();$.post(i.attr("action"),i.serialize(),function(n){n.success?($("#unbind-bank-"+e).remove(),Notify.success(n.message)):Notify.danger(n.message)})}})}},["6469b7804c5446db9b2d"]);