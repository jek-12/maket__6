let nav_items = Array.from($(".nav_bar li"));
let nav_items_shadow = Array.from($(".for_shadow div"));

$(nav_items).mouseenter(function(){
    $(nav_items_shadow[$(this).index()]).css("visibility", "visible");
});
$(nav_items).mouseleave(function(){
    $(nav_items_shadow[$(this).index()]).css("visibility", "hidden");
});



