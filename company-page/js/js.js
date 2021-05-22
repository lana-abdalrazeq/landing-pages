$(window).scroll(function(){// عند حدث تحريك الصفحةإمَا النزول بالصفحة للأسفل أو الصعود بها للاعلى
    if($(this).scrollTop()>=500){// نتفحص ازا كانت قيمة النزول أكثر من 500
        $("#navBar").addClass("noTransparrent");//اذا تم النزول بمقدار اكبر من 500 طبق صنف التسنيقات
     }
    else{
        $("#navBar").removeClass("noTransparrent");//  اذا كان اقل من 500 احذف صنف التنسيقات
     }
});
// تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة

$(document).ready(function(){
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){});
    
    });

    $('.timer').countTo();


    // التحقق من إدخال البيانات الصحيحة في نموذج الإرسال

    $(function () {
        $("#commentForm").validate();
    });

});
