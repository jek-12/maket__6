 $(window).scroll(function () {
        $(".disappearing_header").css("padding-top", "7px");

    });
 let element_position = $('.scroll').offset().top;

 $(window).on('scroll', function() {
     let y_scroll_pos = window.pageYOffset;
     let scroll_pos_test = element_position;
     $(".disappearing_header").css("padding-top", "27px");
     if(y_scroll_pos === scroll_pos_test && $(window).width() > 900) {
         $(".disappearing_header").css("padding-top", "57px");
     }
 });

    let menu = $(".disappearing_header");
    let nav_menu_icon = $(".nav_box");

    nav_menu_icon.mouseenter(() => nav_menu_icon.css("transform", "rotate(360deg)"));
    nav_menu_icon.mouseenter(() => menu.css("width", "100%"));
    nav_menu_icon.mouseenter(() => $(".main_header").css("opacity", "1"));
    nav_menu_icon.mouseenter(() => menu.css("height", "100px"));
    nav_menu_icon.mouseenter(()=>$(".main_header").css("visibility", "visible"));
