(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();

//language
    let aboutMeSection =document.querySelector(".about-me");

window.onscroll = function() {
        if (window.scrollY >= aboutMeSection.getBoundingClientRect().top  ) {
            let precentages =document.querySelectorAll(".my-language .precentage path.color");
            precentages.forEach((precentage)=>{
                precentage.classList.add("show");
            });
        }
}
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    
    // timeline More button
    let timelineBtn = document.querySelector(".timeline-end .rectangle");
    timelineBtn.onclick = timelinesShow; 
    function timelinesShow(){
        let timelines = document.querySelectorAll(".timeline-item");
        timelines.forEach((timeline)=>{
            timeline.classList.toggle("show");
        });

         // change local
    let htmlTag = document.querySelector("html");
    if(htmlTag.lang == "en" ){
         if(timelines[timelines.length - 1].classList.contains("show")){
            timelineBtn.dataset.local = "<span>Weniger</span>";
            timelineBtn.innerHTML = "<span>Less</span>";
        } 
        else{
            timelineBtn.dataset.local = "<span>Mehr</span>";
            timelineBtn.innerHTML = "<span>More</span>";
        }
    }
    else{
         if(timelines[timelines.length - 1].classList.contains("show")){
            timelineBtn.dataset.local = "<span>Less</span>";
            timelineBtn.innerHTML = "<span>Weniger</span>";
        } 
        else{
            timelineBtn.dataset.local = "<span>More</span>";
            timelineBtn.innerHTML = "<span>Mehr</span>";
        }
    }
    }
    
    
    // Typed Initiate
    if ($('.hero-job .typed-text-h2').length == 1) {
        var typed_strings = $('.hero-job .typed-text').text();
        var typed = new Typed('.hero-job .typed-text-h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
})(jQuery);

