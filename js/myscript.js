/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // for whatsapp links
    

                $('.meal1').click(function(e){
                    e.preventDefault();
                    var meal1 = "-Dürüm Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal1 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal2').click(function(e){
                    e.preventDefault();
                    var meal2 = "-Lokum Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal2 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal3').click(function(e){
                    e.preventDefault();
                    var meal3 = "-Spesiyal Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal3 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal4').click(function(e){
                    e.preventDefault();
                    var meal4 = "-Acılı meksikano Rap Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal4 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal5').click(function(e){
                    e.preventDefault();
                    var meal5 = "-Kabse Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal5 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal6').click(function(e){
                    e.preventDefault();
                    var meal6 = "-Fatte Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal6 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal7').click(function(e){
                    e.preventDefault();
                    var meal7 = "-Mariya-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal7 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal8').click(function(e){
                    e.preventDefault();
                    var meal8 = "-Burger Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal8 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal9').click(function(e){
                    e.preventDefault();
                    var meal9 = "-Dürum Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal9 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal10').click(function(e){
                    e.preventDefault();
                    var meal10 = "-Spesiyal Dürum Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal10 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        
 
                $('.meal11').click(function(e){
                    e.preventDefault();
                    var meal11 = "-Dürım Meksikano Rap Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal11 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });

        

                $('.meal12').click(function(e){
                    e.preventDefault();
                    var meal12 = "-Burger Şavarma-";
                    var full = "https://wa.me/+905523000079?text=Merhaba%20Şamista,"  + meal12 + "%20talep%20talep%20etmek%20istiyorum!%20" ; 
                    window.location.href= full;  
                });
    
    //mobile header sidebar
    
    $(".mobile-header > div:nth-child(1) i ").click(function(){
       
        $(".mobile-header .sidemenu").fadeToggle(600);
    });
    
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
    });
    
    scrollButton.click(function(){
            
        $("html, body").animate({ scrollTop: 0}, 2000);

    });
    
    // links of navbar
    
    $('.link1').click(function() {
        $('html, body').animate({
            scrollTop: $('#menuler').offset().top
        },1000);
    });
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        },1600);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#neden').offset().top
        },500);
    });
    
    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#durumler').offset().top
        },1400);
    });
});