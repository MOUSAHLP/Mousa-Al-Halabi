import { apps } from "./appsData.js";
let data;

function getDataOnLoad() {

    // Get the current URL
    const url = window.location.href;

    // Create a URL object
    const urlObj = new URL(url);

    // Get the value of the 'appName' parameter
    const appName = urlObj.searchParams.get('appName');


    if (!(apps && appName in apps)) {
        window.location.href = "index.html#portfolio";
    }

    data = apps[appName];

    // data = JSON.parse(sessionStorage.getItem("app"));

    if (data == null) {
        window.location.href = "index.html#portfolio";
    }

    // get the current lang
    let lang = localStorage.getItem("currLang") ?? "en";

    // replace all names
    let names = document.querySelectorAll(".name");

    names.forEach((element) => {
        translateElement(element, "name");
    });

    // get logo
    getLogoImage()

    // replace disc
    let disc = document.querySelector(".disc");

    if (lang == "de") {
        translateElement(disc, "disc_de", "disc");
    }
    else {
        translateElement(disc, "disc", "disc_de");
    }

    // set Landing Page
    setLandingPage();

    // create all technologies
    createTechnologies();

    // replace all images
    createImage();

    // create laptop images
    if (data['laptop_images']) {
        createLaptopImages();
    }

    // to set youtube link
    setYoutubeLink();

    // to create Store Buttons
    if (data['store_buttons']) {
        createStoreButtons();
    }


}

window.onload = getDataOnLoad;

function translateElement(element, key, translatedText = null) {
    if (translatedText != null) {
        element.classList.add("localization");
        element.setAttribute("data-local", data[translatedText]);
    }
    element.innerHTML = data[key];
}

function getLogoImage() {
    let logo = document.querySelector(".logo");
    logo.src = data["logo"];
}

function createImage() {

    let images = data["images"].map((imgDir, index) => {
        return { src: imgDir, alt: `Image ${index}` };
    });

    // Insert dynamic data into the carousel
    const screenshotSlides = document.querySelector("#screenshot_slides");

    images.forEach(function (image) {
        // Create a new div element
        const slide = document.createElement("div");
        slide.className = "single_slider";

        // Create an img element
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        // Append the img to the div
        slide.appendChild(img);

        // Append the div to the container
        screenshotSlides.appendChild(slide);


    });



    $('.screenshot_active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

}

function createLaptopImages() {
    
    const screenshotSlides = document.querySelector(".laptop-slides");
    screenshotSlides.style.display = 'block';

    let laptopImages = data["laptop_images"].map((imgDir, index) => {
        return { src: imgDir, alt: `Image ${index}` };
    });

    // Insert dynamic data into the carousel
    const laptopScreenshotSlides = document.querySelector(".screenshot_slide_dashboard");

    laptopImages.forEach(function (image) {
        // Create a new div element
        const slide = document.createElement("div");
        slide.className = "single_slider";

        // Create an img element
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        // Append the img to the div
        slide.appendChild(img);

        // Append the div to the container
        laptopScreenshotSlides.appendChild(slide);

    });


    $('.screenshot_slide_dashboard').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}

function createTechnologies() {

    const technologiesContent = document.querySelector(".technologies .content");
    data["technologies"].forEach((technology) => {
        technologiesContent.innerHTML += `
          <div class="technology" data-content="${technology["name"]}">
            <img
              src="${technology["image"]}"
              alt="${technology["name"]}-logo"
            />
          </div>`;
    });
}

function setYoutubeLink() {
    if (data["youtube"] != null) {


        const youtubeLinkSection = document.querySelector("section#video");
        youtubeLinkSection.style.display = "block";

        const youtubeLinkElement = document.getElementById("youtube-link");
        youtubeLinkElement.href = data["youtube"];

        //====== Magnific Popup

        $('.video-popup').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=', // Default: ?v=
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL with the video ID
                    }
                }
            }
        });
    }
}


function setLandingPage() {

    // get landing image text div
    const landingPageImageContainers = document.querySelectorAll("#landing-page-image");
    landingPageImageContainers.forEach(landingPageImageContainer => {

        landingPageImageContainer.src = data["landing_image"];
    });

    // get landing Page text div
    const landingPageTextContainer = document.getElementById("landing-page-text");

    translateElement(landingPageTextContainer, "landing_page", "landing_page_de");

    // get buttons div
    const landingPageButtonsContainer = document.getElementById("landing-page-buttons");

    data["buttons"].forEach((btn) => {
        landingPageButtonsContainer.innerHTML += ` <li>
            <a
                class="btn btn2 wow fadeInUp"
                data-wow-delay=".3s"
                href="${btn["link"]}"
                > 
                <i class="${btn["icon"]}"></i>
                ${btn["name"]}</a
            >
            </li>`;
    });
}

function createStoreButtons() {

    const downloadSection = document.getElementById("download");
    const storeButtons = document.getElementById("store_buttons");

    data["store_buttons"].forEach((btn) => {
        storeButtons.innerHTML += `<li>
                <a class="btn btn2 d-flex align-items-center mx-1" href="${btn["link"]}">
                    <span class="icon px-1">
                        <i class="${btn["icon"]}"></i>
                      </span>
                      ${btn["name"]}
                </a>
              </li>`;

        // display the secion
        downloadSection.style.display = "block";
    });
}
$(function () {

    // Initiate the wowjs
    new WOW().init();

    // Navigation 
    $('.site-navigation').affix({
        offset: {
            top: $('.hero').height()
        }
    });

    var $window = $(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
            $('.nav a').on('click', function () {
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 100
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

