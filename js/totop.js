/*https://github.com/caojiele/caojiele.github.io#%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8*/
$(window).scroll(function() {
    $(window).scrollTop() > 100 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
