// Insert Menu Items here
// {
//     name: `Food Name`,
//     price: `food price`,
//     img: `assets/menu/the-image-name.jpg`
// }
var menu = {    
    breakfast:[
        {
            name:"Feta with Banana & Honey",
            price:350,
            img:"assets/menu/salad.jpg"
        },
        {
            name:"Feta with Banana & Gishta",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Feta with Temer",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Kers",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Eggs with Furn",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Special Ful",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Ahda Lahn",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Ahda Doro",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Ful Abyan",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Bazalia",
            price:100,
            img:"assets/about.jpeg"
        },
    ],
    lunchDinner:[
        {
            name:"Mushekel Furn",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Mugemer with Rice",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Mugemer with Safi",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Salad",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Tibs Be/Merek",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Selta",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Kubz",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Mendi",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Mofo",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Special Tibs",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Bamya (Okra Stew)",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Full Rotisserie Chicken",
            price:100,
            img:"assets/placeholder.png"
        }
    ],
    juice:[
        {
            name:"Papaya Juice",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Burma",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Special Juice",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Special Juice with Vitmo",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Orange Juice",
            price:100,
            img:"assets/placeholder.png"
        }
    ],
    hotDrinks:[
        {
            name:"Sanaa Special",
            price:35,
            img:"assets/placeholder.png"
        },
        {
            name:"Lomi with Ginger/Honey",
            price:20,
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