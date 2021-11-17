import menu from './menu.mjs';

window.onload = populate();

// Menu selection underlines
$(".select").click( function () {
    if ( !$(this).hasClass("selected") ) {
        $(".select").removeClass("selected");
        $(this).addClass("selected")
    }
})

// Display different Menus
$(".select").click(function () { 
    $(".menu").css("display", "none");
    switch ( $(this).attr("id") ) {
        case "bf":
            $("#bf-menu").css("display", "flex");
            break;
        case "ld":
            $("#ld-menu").css("display", "flex");
            break;
        case "jc":
            $("#jc-menu").css("display", "flex");
            break;
        case "hd":
            $("#hd-menu").css("display", "flex");
            break;
        default:
            break;
    }
});

function populate () {
    $.each( menu.breakfast, function( key,val ) {
        // Add to bf-menu
        $("#bf-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.lunchDinner, function( key,val ) {
        // Add to bf-menu
        $("#ld-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.juice, function( key,val ) {
        // Add to bf-menu
        $("#jc-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    });
    $.each( menu.hotDrinks, function( key,val ) {
        // Add to bf-menu
        $("#hd-menu").append('<div class="menu-item"><img src="'+ val.img +'" alt="" srcset=""><p class="name">'+ val.name +'</p><p class="price">Br '+ val.price +'</p></div>')
    }); 
}
