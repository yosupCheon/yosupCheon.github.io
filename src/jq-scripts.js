$(document).ready(()=>{
    $(".menu-button").on("mouseenter",()=>{
        $(".menu").slideDown().on("mouseleave",()=>{
            $(".menu").slideUp();
        });
    });
});