$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });

    
    $(".content-1").show();
    $(".content-2").hide();
    $(".content-3").hide();
    $(".content-4").hide();
    $(".content-5").hide();
    $(".secure a, .one li").addClass("active"); 
   


    $(".secure a, .one li").on("click", function() {
        event.preventDefault();
        // document.getElementById(id).style.color = "#ff0000";       
            if(!$(this).hasClass('active'))
            {
                $(".single-feature a.active, .single-faq li.active").removeClass("active");
                $(this).addClass("active");  
                $(".content-1").show();
                $(".content-2").hide();
                $(".content-3").hide();
                $(".content-4").hide();
                $(".content-5").hide();      
            }
    });

    $(".fraud a, .two li").on("click", function() {
        event.preventDefault();           
            if(!$(this).hasClass('active'))
            {
                $(".single-feature a.active, .single-faq li.active").removeClass("active");
                $(this).addClass("active");
                $(".content-1").hide();
                $(".content-2").show();
                $(".content-3").hide();
                $(".content-4").hide();
                $(".content-5").hide();        
            }
    });

    $(".cards a, .three li").on("click", function() {
        event.preventDefault();
        if(!$(this).hasClass('active'))
        {
            $(".single-feature a.active, .single-faq li.active").removeClass("active");
            $(this).addClass("active");
        $(".content-1").hide();
        $(".content-2").hide();
        $(".content-3").show();
        $(".content-4").hide();
        $(".content-5").hide();
        }

    });

    $(".activation a, .four li").on("click", function() {
        event.preventDefault();
        if(!$(this).hasClass('active'))
        {
            $(".single-feature a.active, .single-faq li.active").removeClass("active");
            $(this).addClass("active");
            $(".content-1").hide();
            $(".content-2").hide();
            $(".content-3").hide();
            $(".content-4").show();
            $(".content-5").hide();
            }
    });

    $(".support a").on("click", function() {
        event.preventDefault();
        if(!$(this).hasClass('active'))
        {
            $(".single-feature a.active").removeClass("active");
            $(this).addClass("active");
        $(".content-1").hide();
        $(".content-2").hide();
        $(".content-3").hide();
        $(".content-4").hide();
        $(".content-5").show();
        }

    });
});

const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('reveal');
});