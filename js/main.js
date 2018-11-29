var changeMainSlider, changeWidthMiniSlider, changeUsWorkSlides, changeMainWork, changeWord, updatedWord, changeMainWorkMob, checkMovePrice = !0,
    changePriceSlides, changeEquipSlides, checkMoveEquip = !0;
$(document).ready(function () {
    $(".reviews-wrapper").css("height", $(".reviews-w-block.active").height() + 60);
    $(".works-wrapper").css("height", $(".works-w-block.active").height() + 60);
    $("body").on("click", ".menu-l-menu-btn", function (a) {
        $(".menu").toggleClass("opened");
        $(".menu-l-menu-btn").toggleClass("opened")
    });
    $("body").on("click", ".main-page-s", function (a) {
        "\u0412\u043f\u0435\u0440\u0435\u0434" === $(a.currentTarget).html() ? changeMainSlider(!0, $(a.currentTarget)) : changeMainSlider(!1, $(a.currentTarget))
    });
    $("body").on("click", ".works-w-left, .works-w-right", function (a) {
        $(a.currentTarget).hasClass("works-w-right") ? changeUsWorkSlides(!0, $(a.currentTarget)) : changeUsWorkSlides(!1, $(a.currentTarget))
    });
    $("body").on("click", ".reviews-wb-btn", function (a) {
        $(a.currentTarget).parent().hasClass("right") ? changeMainWork(!0, $(a.currentTarget).parent()) : $(a.currentTarget).parent().hasClass("left") && changeMainWork(!1, $(a.currentTarget).parent())
    });
    setTimeout(function () {
        changeWidthMiniSlider()
    }, 500);
    updatedWord(".main-page-sw-w");
    changeWord(".main-page-sw-w", 0);
    updatedWord(".fs-stream-t-word");
    changeWord(".fs-stream-t-word", 0);
    $("body").on("click", ".uis-left-l, .uis-left-r", function (a) {
        if ($(a.currentTarget).hasClass("uis-left-r")) {
            changeMainWork(!0, $(a.currentTarget).parent().siblings(".reviews-wrapper").find(".reviews-w-block.right"));
            a = $(a.currentTarget).siblings(".uis-center").find(".active");
            var b = $(a).next();
            0 === $(b).length ? b = $(a).siblings(".uis-tap:first") : !0;
            $(a).removeClass("active");
            $(b).addClass("active")
        } else $(a.currentTarget).hasClass("uis-left-l") &&
            (changeMainWork(!1, $(a.currentTarget).parent().siblings(".reviews-wrapper").find(".reviews-w-block.left")), a = $(a.currentTarget).siblings(".uis-center").find(".active"), b = $(a).prev(), 0 === $(b).length ? b = $(a).siblings(".uis-tap:last") : !0, $(a).removeClass("active"), $(b).addClass("active"))
    });
    $("body").on("click", ".uis-left-p-l, .uis-left-p-r", function (a) {
        $(a.currentTarget).hasClass("uis-left-p-r") ? 0 < $(".plus-ww").css("transform").split(", ")[4] && ($(".plus-ww").css("transform", "translate3d(-24%,0,0)"),
            $(a.currentTarget).siblings(".uis-center").find(".uis-tap:first").removeClass("active"), $(a.currentTarget).siblings(".uis-center").find(".uis-tap:last").addClass("active")) : $(a.currentTarget).hasClass("uis-left-p-l") && 0 > $(".plus-ww").css("transform").split(", ")[4] && ($(".plus-ww").css("transform", "translate3d(26%,0,0)"), $(a.currentTarget).siblings(".uis-center").find(".uis-tap:last").removeClass("active"), $(a.currentTarget).siblings(".uis-center").find(".uis-tap:first").addClass("active"))
    });
    $(".price-ww").on("transitionend",
        function () {
            checkMovePrice = !0
        });
    $(".equip-ww-w").on("transitionend", function () {
        checkMoveEquip = !0
    });
    $("body").on("click", ".uis-left-pr-l, .uis-left-pr-r", function (a) {
        changePriceSlides(a)
    });
    $("body").on("click", ".uis-left-w-l, .uis-left-w-r", function (a) {
        var b = $(a.currentTarget).parent().siblings(".works-wrapper").find(".works-w-left");
        $(a.currentTarget).hasClass("uis-left-w-r") ? (changeUsWorkSlides(!0, $(b)), a = $(a.currentTarget).siblings(".uis-center").find(".active"), b = $(a).next(), 0 === $(b).length ? b = $(a).siblings(".uis-tap:first") :
            !0, $(a).removeClass("active"), $(b).addClass("active")) : (changeUsWorkSlides(!1, $(b)), a = $(a.currentTarget).siblings(".uis-center").find(".active"), b = $(a).prev(), 0 === $(b).length ? b = $(a).siblings(".uis-tap:last") : !0, $(a).removeClass("active"), $(b).addClass("active"))
    });
    $("body").on("click", ".uis-equip-l, .uis-equip-r", function (a) {
        changeEquipSlides(a)
    });
    $("body").on("click", ".footer-main-t-order-btn, .fs-btn, .price-wbw-btn, .footer-order-btn", function () {
        $(".order").addClass("active")
    });
    $("body").on("click",
        ".order-w-close",
        function () {
            $(".order").removeClass("active")
        });
    setTimeout(()=>{
        $('.contacts-map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A56e1d2bd89352bcb70e4707529b3d7eee67bd987e6115467916d6a14623513d5&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>');
    }, 6000);
    
});
$(window).scroll(function (a) {
    $(".reviews-wrapper").css("height", $(".reviews-w-block.active").height() + 60);
    $(".works-wrapper").css("height", $(".works-w-block.active").height() + 60);
    changeWidthMiniSlider()
});
updatedWord = function (a) {
    $(a).each(function (a, c) {
        var b = $(c).html().split("");
        b.forEach(function (c, d) {
            b[d] = 0 !== a ? "<span>" + c + "</span>" : '<span style="opacity: 1;">' + c + "</span>"
        });
        $(c).html(b)
    })
};
changeWord = function (a, b) {
    var c = $(a + ".active");
    $(c).hasClass("active") && setTimeout(function () {
        var b = $(c).find("span").length,
            e = setInterval(function () {
                $(c).find("span:eq(" + --b + ")").css("opacity", 0);
                var d = $(c).find("span:eq(" + b + ")").position().left,
                    g = $(c).find("span:eq(" + b + ")").position().top;
                $(".fs-stream-t-cursor").css("transform", "translate3d(" + d + "px," + g + "px,0)");
                if (0 === b) {
                    clearInterval(e);
                    e = void 0;
                    $(c).removeClass("active");
                    0 === $(c).next().filter(a).length ? c = $(c).siblings(a + ":first") : c = $(c).next();
                    $(c).addClass("active");
                    b = $(c).find("span").length;
                    var f = 0;
                    e = setInterval(function () {
                        var d = $(c).find("span:eq(" + f + ")").position().left + $(c).find("span:eq(" + f + ")").width(),
                            g = $(c).find("span:eq(" + f + ")").position().top;
                        $(".fs-stream-t-cursor").css("transform", "translate3d(" + d + "px," + g + "px,0)");
                        $(c).find("span:eq(" + f++ + ")").css("opacity", 1);
                        f === b && (clearInterval(e), e = void 0, changeWord(a, 2E3))
                    }, 60)
                }
            }, 60)
    }, b)
};
changeMainSlider = function (a, b) {
    if (a) {
        var c = $(b).parent().siblings(".main-page-slides").find(".main-page-s-slide.ready"),
            d = $(b).parent().siblings(".main-page-slides").find(".main-page-s-slide.active");
        $(d).removeClass("active");
        $(c).removeClass("ready");
        $(c).addClass("active");
        0 < $(c).next().length ? $(c).next().addClass("ready") : $(d).siblings(".main-page-s-slide:first").addClass("ready");
        $(".main-page-sw-word").find("span").css("opacity", 0);
        setTimeout(function () {
            $(".main-page-sw-word").find("span").html($(c).attr("data-word"));
            $(".main-page-sw-current").html($(c).attr("data-num"));
            $(".main-page-sw-word").find("span").css("opacity", 1)
        }, 200)
    } else {
        d = $(b).parent().siblings(".main-page-slides").find(".main-page-s-slide.ready");
        var e = $(b).parent().siblings(".main-page-slides").find(".main-page-s-slide.active");
        $(e).removeClass("active");
        $(e).addClass("ready");
        $(d).removeClass("ready");
        0 < $(e).prev().length ? $(e).prev().addClass("active") : $(e).siblings(".main-page-s-slide:last").addClass("active");
        e = $(b).parent().siblings(".main-page-slides").find(".main-page-s-slide.active");
        $(".main-page-sw-word").find("span").css("opacity", 0);
        setTimeout(function () {
            $(".main-page-sw-word").find("span").html($(e).attr("data-word"));
            $(".main-page-sw-current").html($(e).attr("data-num"));
            $(".main-page-sw-word").find("span").css("opacity", 1)
        }, 200)
    }
};
changeWidthMiniSlider = function () {
    var a = 5;
    1190 > $(window).width() ? a = 5 : a;
    700 > $(window).width() ? a = 3 : a;
    550 > $(window).width() ? a = 1 : a;
    a = $(".main-about-partner-center-wrapper").width() / a;
    var b = .1 * a;
    a -= 2 * b;
    $(".main-about-partner-center-logo").css("width", a);
    $(".main-about-partner-center-logo").css("margin-left", b);
    $(".main-about-partner-center-logo").css("margin-right", b)
};
changeUsWorkSlides = function (a, b) {
    if (a) {
        var c = $(b).siblings(".active"),
            d = $(b).siblings(".left"),
            e = $(b).siblings(".right");
        $(c).removeClass("active");
        $(c).addClass("right");
        $(e).removeClass("right");
        $(e).addClass("left");
        $(d).removeClass("left");
        $(d).addClass("active")
    } else c = $(b).siblings(".active"), d = $(b).siblings(".left"), e = $(b).siblings(".right"), $(c).removeClass("active"), $(c).addClass("left"), $(d).removeClass("left"), $(d).addClass("right"), $(e).removeClass("right"), $(e).addClass("active")
};
changeMainWork = function (a, b) {
    if (a) {
        var c = $(b).siblings(".active"),
            d = $(b).siblings(".left"),
            e = $(b);
        $(c).removeClass("active");
        $(c).addClass("left");
        $(e).removeClass("right");
        $(e).addClass("active");
        $(d).removeClass("left");
        $(d).addClass("right")
    } else c = $(b).siblings(".active"), d = $(b), e = $(b).siblings(".right"), $(c).removeClass("active"), $(c).addClass("right"), $(e).removeClass("right"), $(e).addClass("left"), $(d).removeClass("left"), $(d).addClass("active")
};
changePriceSlides = function (a) {
    var b = $(a.currentTarget).parent().siblings(".price-wrapper").find(".price-ww"),
        c = $(b).find(".price-w-block").width(),
        d = c * ($(b).find(".price-w-block").length - 1) / 2;
    $(a.currentTarget).hasClass("uis-left-pr-r") ? parseFloat($(b).css("transform").split(", ")[4]) > -d && checkMovePrice && (checkMovePrice = !1, $(b).css("transform", "translate3d(" + (parseFloat($(b).css("transform").split(", ")[4]) - c) + "px, 0, 0)"), 0 < $(a.currentTarget).siblings(".uis-center").find(".active").next().length &&
        $(a.currentTarget).siblings(".uis-center").find(".uis-tap.active").removeClass("active").next().addClass("active")) : $(a.currentTarget).hasClass("uis-left-pr-l") && parseFloat($(b).css("transform").split(", ")[4]) < d && checkMovePrice && (checkMovePrice = !1, $(b).css("transform", "translate3d(" + (parseFloat($(b).css("transform").split(", ")[4]) + c) + "px, 0, 0)"), 0 < $(a.currentTarget).siblings(".uis-center").find(".active").prev().length && $(a.currentTarget).siblings(".uis-center").find(".uis-tap.active").removeClass("active").prev().addClass("active"))
};
changeEquipSlides = function (a) {
    var b = $(a.currentTarget).parent().siblings(".equip-wrapper").find(".equip-ww-w"),
        c = $(b).find(".equip-w-block").width(),
        d = c * $(b).find(".equip-w-block").length - c;
    $(a.currentTarget).hasClass("uis-equip-r") ? parseFloat($(b).css("transform").split(", ")[4]) > -d + 10 && checkMoveEquip && (checkMoveEquip = !1, $(b).css("transform", "translate3d(" + (parseFloat($(b).css("transform").split(", ")[4]) - c) + "px, 0, 0)"), 0 < $(a.currentTarget).siblings(".uis-center").find(".active").next().length &&
        $(a.currentTarget).siblings(".uis-center").find(".uis-tap.active").removeClass("active").next().addClass("active")) : $(a.currentTarget).hasClass("uis-equip-l") && 0 > parseFloat($(b).css("transform").split(", ")[4]) && checkMoveEquip && (checkMoveEquip = !1, $(b).css("transform", "translate3d(" + (parseFloat($(b).css("transform").split(", ")[4]) + c) + "px, 0, 0)"), 0 < $(a.currentTarget).siblings(".uis-center").find(".active").prev().length && $(a.currentTarget).siblings(".uis-center").find(".uis-tap.active").removeClass("active").prev().addClass("active"))
};
