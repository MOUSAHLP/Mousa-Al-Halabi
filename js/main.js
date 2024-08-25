
import { getApps, getAppCategories } from "./appsData.js";
import { getTimelines } from "./history.js";

(function ($) {
    "use strict";

    // to change the apps categories 
    document.querySelector(".portfolio-sorting.list-inline").innerHTML += getAppCategories();

    // to add the apps 
    document.querySelector(".portfolio #grid").innerHTML += getApps();

    // to add the tilmelines 
    document.querySelector(".timeline").innerHTML = getTimelines();

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
    let aboutMeSection = document.querySelector(".about-me");

    window.onscroll = function () {
        if (window.scrollY >= aboutMeSection.getBoundingClientRect().top) {
            let precentages = document.querySelectorAll(".my-language .precentage path.color");
            precentages.forEach((precentage) => {
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });



    // timeline More button
    let timelineBtn = document.querySelector(".timeline-end .rectangle");
    timelineBtn.onclick = timelinesShow;
    function timelinesShow() {
        let timelines = document.querySelectorAll(".timeline-item");
        timelines.forEach((timeline) => {
            timeline.classList.toggle("show");
        });

        // change local
        let htmlTag = document.querySelector("html");
        if (htmlTag.lang == "en") {
            if (timelines[timelines.length - 1].classList.contains("show")) {
                timelineBtn.dataset.local = "<span>Weniger</span>";
                timelineBtn.innerHTML = "<span>Less</span>";
            }
            else {
                timelineBtn.dataset.local = "<span>Mehr</span>";
                timelineBtn.innerHTML = "<span>More</span>";
            }
        }
        else {
            if (timelines[timelines.length - 1].classList.contains("show")) {
                timelineBtn.dataset.local = "<span>Less</span>";
                timelineBtn.innerHTML = "<span>Weniger</span>";
            }
            else {
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

    $('#certificates .certificates').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    //shuffle.js
    const showItemsCount = 8;
    let showAll = false;

    // Initially hide all children except the first 8
    // $children.slice(showItemsCount).hide();

    // Button toggle logic
    $('.portfolio-more-btn').on('click', function () {
        showAll = !showAll;

        let isEn = document.querySelector("html").lang == "en";
        let less = isEn ? '<span class="localization" data-local="Weniger">Less</span>' : '<span class="localization" data-local="Less">Weniger</span>';
        let more = isEn ? '<span class="localization" data-local="Mehr">More</span>' : '<span class="localization" data-local="More">Mehr</span>';
        if (showAll) {
            $(this).html(less);
        } else {
            $(this).html(more);
        }
        let activeFilter = $('.portfolio-sorting .active');
        activeFilter.trigger('click');
        activeFilter.trigger('click');
        activeFilter.addClass('active');
    });

    var shuffleme = (function ($) {
        'use strict';
        var $grid = $('#grid'), //locate what we want to sort 

            $filterOptions = $('.portfolio-sorting li'),  //locate the filter categories

            init = function () {

                // None of these need to be executed synchronously
                setTimeout(function () {
                    listen();
                    setupFilters();
                    // initially we need to llimit the filtered items to showItemsCount
                    $("#grid .shuffle-item.filtered").slice(showItemsCount).hide();
                }, 100);

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    group: Shuffle.ALL_ITEMS,
                });
            },


            // Set up button clicks
            setupFilters = function () {
                var $btns = $filterOptions.children();
                $btns.on('click', function (e) {
                    $grid.children().show();

                    e.preventDefault();
                    var $this = $(this),
                        isActive = $this.hasClass('active'),
                        group = isActive ? 'all' : $this.data('group');

                    // Hide current label, show current label in title
                    if (!isActive) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }
                    $this.toggleClass('active');


                    // Filter elements
                    $grid.shuffle('shuffle', group);

                    // if showAll is false limit the filtered items  
                    if (!showAll) {
                        $("#grid .shuffle-item.filtered").slice(showItemsCount).hide();
                    }

                    // Refilter elements
                    $grid.shuffle('shuffle', group);
                });

                $btns = null;
            },

            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function () {

                var debouncedLayout = $.throttle(300, function () {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function () {
                    var proxyImage;

                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function () {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function () {
                    debouncedLayout();
                }, 500);
            };

        return {
            init: init
        };
    }(jQuery));

    if ($('#grid').length > 0) {
        shuffleme.init(); //filter portfolio
    };

})(jQuery);
