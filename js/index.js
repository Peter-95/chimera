$(document).ready(function () {
  "use strict";
  $(".team-list").on("click", "a", function (a) {
    a.preventDefault();
    var e = $(this).data("team");
    $(".team-single").removeClass("active"),
      $(".team-list li").removeClass("active"),
      $("#" + e).addClass("active"),
      $(this).parent().addClass("active");
  });
});
$(document).ready(function () {
  // navbar  dynamic background
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $(".navbar").css("background", "#d3dbff");
      $(".navbar-toggler").css("hover", "#FFF");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });

  // secation scroll smoothly
  $(".smooth").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });
});

// scrollup btn
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1000) {
    $(".scrollup-btn").fadeIn(500);
  } else {
    $(".scrollup-btn").fadeOut(500);
  }
});
$(".scrollup-btn").click(function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
