$(document).ready(function () {
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    /* For sticky Nav*/

    $('.js-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } else {
            $('nav').removeClass('sticky-nav');
        }

    }, {
        offset: '90px;'
    });

    /* Scroll effect*/
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-features').offset().top
        }, 1000);
    });


    $(function () {
        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $('.js--nav-icon').click(function(e){
        e.preventDefault();
        var nav = $('.js--main-nav');
        
        nav.slideToggle(200)
        var icon = $('.js--nav-icon i');
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })


  
      
       
});

 //SCROOL REVEAL ANIMINATIONS

 window.sr = ScrollReveal();
 sr.reveal('.long-copy', {
   duration: 2000,
   origin:'right',
   distance:'300px'
 });    
 sr.reveal('.btn-anim-1', {
    duration:1000,
    origin:'left',
    distance:'10px'
  });    

  // PHONE
  sr.reveal('.app-screen', {
    duration:2000,
    origin:'bottom',
    distance:'100px'
  });    
  sr.reveal('.lisbon', {
    duration:2300,
    origin:'bottom',
    distance:'100px'
  });   
  sr.reveal('.fransisco', {
    duration:2600,
    origin:'bottom',
    distance:'100px'
  });  
  sr.reveal('.berlin', {
    duration:2900,
    origin:'bottom',
    distance:'100px'
  });  
  sr.reveal('.london', {
    duration:3100,
    origin:'bottom',
    distance:'100px'
  });      


  // PLAN BOX

  sr.reveal('.premium', {
    duration:3000,
    origin:'top',
    distance:'100px'
  });     
  sr.reveal('.starter', {
    duration:3000,
    origin:'right',
    distance:'100px'
  });      

  /////////

  sr.reveal('.up-to-365', {
    duration:2000,
    origin:'right',
    distance:'10px'
  });    

  sr.reveal('.ready-in-20', {
    duration:4000,
    origin:'right',
    distance:'30px'
  });    
  sr.reveal('.organic', {
    duration:2000,
    origin:'right',
    distance:'30px'
  });    

  