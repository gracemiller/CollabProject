
        
    (function($) {
        $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
                
                if(percent > 0.0534) {
                    $("#shopfront").fadeOut(1000);
                }
                
                if(percent > 0.7973) {
                    $("#shopfront2").fadeOut(1000);
                }
                
                $("#bio").hover(function(){
                $("#steveninfo").fadeIn(1000);
            });
         
            }
        });
    }(jQuery));


            $( "#bio" ).hover(
              function() {
                $( this ).addClass( "#hover" );
              }, function() {
                $( this ).removeClass( "#hover" );
              }
            );

            $( ".bio" ).off( "mouseenter mouseleave" );