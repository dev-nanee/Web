
var style = getComputedStyle(document.body),
  Body = $("body"),
  TemplateSidebar = $(".sidebar"),
  TemplateHeader = $(".t-header"),
  DesktopToggler = $(".t-header-desk-toggler"),
  MobileToggler = $(".t-header-mobile-toggler");

DesktopToggler.on("click", function() {
  $(Body).toggleClass("sidebar-minimized")
}), MobileToggler.on("click", function() {
  $(".page-body").toggleClass("sidebar-collpased")
});

var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, "");

function themeSwitch(e) {
  var t = window.location.href,
    a = (t.split("/"), t.replace(/demo_.\d*/, e));
  window.location.href = a;
}

  $(".navigation-menu li a", TemplateSidebar).each(function() {
    var e = $(this);
    "" === current ? -1 !== e.attr("href").indexOf("index.html") && ($(this).parents("li").last().addClass("active"), $(this).parents(".navigation-submenu").length && $(this).addClass("active")) : -1 !== e.attr("href").indexOf(current) && ($(this).parents("li").last().addClass("active"), $(this).parents(".navigation-submenu").length && $(this).addClass("active"), "index.html" !== current && ($(this).parents("li").last().find("a").attr("aria-expanded", "true"), $(this).parents(".navigation-submenu").length && $(this).closest(".collapse").addClass("show")))
  });

  $(".t-header-toggler").on("click",function() {
    console.log("wㅜㅜㅜㅜ");
    $(".t-header-toggler").toggleClass("arrow");
    $(".t-header-brand-wrapper, .sidebar").toggleClass("side_left");
  });

  $(".sidebar .navigation-menu > li > a[data-toggle='collapse']").on("click", function() {
    $(".sidebar .navigation-menu > li").find(".collapse.show").collapse("hide");
    $(".sidebar").removeClass("opened");
  });

  $(".right-sidebar-toggler").on("click", function() {
      $(".right-sidebar").toggleClass("right-sidebar-opened");
  });

  $(".header-controls .compose-minimize").on("click", function() {
    $(this).addClass("minimized").on("click", function() {
      $(".header-controls .compose-minimize").removeClass("minimized");
    })
  });
