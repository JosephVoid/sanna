// Insert Menu Items here
// {
//     name: `Food Name`,
//     price: `food price`,
//     img: `assets/menu/the-image-name.jpg`
// }
var menu = {    
    breakfast:[
        {
            name:"Breakfast 1",
            price:350,
            img:"assets/menu/salad.jpg"
        },
        {
            name:"Breakfast 2",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Breakfast 3",
            price:100,
            img:"assets/about.jpeg"
        }
    ],
    lunchDinner:[
        {
            name:"Lunch 1",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Dinner 2",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Lunch 3",
            price:100,
            img:"assets/placeholder.png"
        }
    ],
    juice:[
        {
            name:"Juice 1",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Juice 2",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Juice 3",
            price:100,
            img:"assets/placeholder.png"
        }
    ],
    hotDrinks:[
        {
            name:"Hot Drink 1",
            price:35,
            img:"assets/placeholder.png"
        },
        {
            name:"Hot Drink 2",
            price:20,
            img:"assets/placeholder.png"
        },
        {
            name:"Hot Drink 3",
            price:10,
            img:"assets/placeholder.png"
        }
    ]
        
}

populate();

$(window).scroll(function () {
    $(".intro-pic").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");
    $(".about-us-pic").css("background-position","50% " + ($(this).scrollTop() / 2.5) + "px");
    $(".res-section").css("background-position","100% " + ($(this).scrollTop() / 4) + "px");
});

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

$("#open").on('click', function(){
    $(".mob-nav-menu").removeClass("hide");
})

$("#close").on('click', function(){
    $(".mob-nav-menu").addClass("hide");
})