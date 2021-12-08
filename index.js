// Insert Menu Items here
// {
//     name: `Food Name`,
//     price: `food price`,
//     img: `assets/menu/the-image-name.jpg`
// }
var menu = {    
    breakfast:[
        {
            name:"Reka with eggs",
            price:300,
            img:"assets/menu/salad.jpg"
        },
        {
            name:"Kibda kalawi",
            price:200,
            img:"assets/about.jpeg"
        },
        {
            name:"Fetira with eggs",
            price:200,
            img:"assets/about.jpeg"
        },
        {
            name:"Special Ful",
            price:200,
            img:"assets/about.jpeg"
        },
        {
            name:"Retib",
            price:150,
            img:"assets/about.jpeg"
        },
        {
            name:"Eggs",
            price:100,
            img:"assets/about.jpeg"
        },
        {
            name:"Tibs",
            price:300,
            img:"assets/about.jpeg"
        },
    ],
    lunchDinner:[
        {
            name:"Special Sanaa",
            price:550,
            img:"assets/placeholder.png"
        },
        {
            name:"Mugemer",
            price:200,
            img:"assets/placeholder.png"
        },
        {
            name:"Mofo with Rice",
            price:550,
            img:"assets/placeholder.png"
        },
        {
            name:"Chiken with Rice",
            price:600,
            img:"assets/placeholder.png"
        },
        {
            name:"Mendi",
            price:430,
            img:"assets/placeholder.png"
        },
        {
            name:"Half Special Sanna",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Tibs with Rice",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Burma Ugule",
            price:350,
            img:"assets/placeholder.png"
        },
        {
            name:"Selta",
            price:280,
            img:"assets/placeholder.png"
        },
        {
            name:"Fahsa",
            price:300,
            img:"assets/placeholder.png"
        },
        {
            name:"Akda with Meat/Chiken",
            price:300,
            img:"assets/placeholder.png"
        },
        {
            name:"Akda Adeni",
            price:300,
            img:"assets/placeholder.png"
        },
        {
            name:"Metbi with Rice",
            price:550,
            img:"assets/placeholder.png"
        },
        {
            name:"One sheep with Rice",
            price:550,
            img:"assets/placeholder.png"
        },
        {
            name:"Half sheep with Rice",
            price:250,
            img:"assets/placeholder.png"
        },
        {
            name:"Arabian Salad",
            price:100,
            img:"assets/placeholder.png"
        }
    ],
    juice:[
        {
            name:"Papaya Juice",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Mango Juice",
            price:120,
            img:"assets/placeholder.png"
        },
        {
            name:"Pineapple Juice",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Orange Juice",
            price:120,
            img:"assets/placeholder.png"
        },
        {
            name:"Avocado Juice",
            price:100,
            img:"assets/placeholder.png"
        },
        {
            name:"Temir with Milk",
            price:120,
            img:"assets/placeholder.png"
        },
        {
            name:"Spris Juice",
            price:120,
            img:"assets/placeholder.png"
        },
    ],
    milkshakes:[
        {
            name:"Sanaa Special",
            price:35,
            img:"assets/placeholder.png"
        },
        {
            name:"Milkshake Chocolate",
            price:20,
            img:"assets/placeholder.png"
        },
        {
            name:"Milkshake Vanilla",
            price:20,
            img:"assets/placeholder.png"
        },
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
    $.each( menu.milkshakes, function( key,val ) {
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