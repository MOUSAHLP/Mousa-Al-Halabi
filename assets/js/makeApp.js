let data;

function getDataOnLoad() {
  data = JSON.parse(sessionStorage.getItem("app"));
  lang = localStorage.getItem("currLang") ?? "en";
  if (data == null) {
    window.location.href = "index.html";
  } else {
    // replace all names
    let title = document.querySelector(".project-title");
    title.innerHTML = data["name"];

    // set logo
    setLogoImage();

    // replace disc
    let disc = document.querySelector(".disc");

    if (lang == "de") {
      getProjectData(disc, "disc_de");
    } else {
      getProjectData(disc, "disc");
    }

    // replace all images
    createImage();

    // to  create all Buttons
    createButtons();
  }
}
getDataOnLoad();

function getProjectData(element, key) {
  element.innerHTML = data[key];
}

function setLogoImage() {
  let logo = document.querySelector(".logo");
  logo.src = data["logo"];
}

function createImage() {
  let images_slider = document.querySelector(".images-slider");

  let allImages = "";
  data["images"].forEach((imgDir, index) => {

    allImages += `
        <div class="swiper-slide">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-img">
                            <img
                            src="${imgDir}"
                            class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
  images_slider.innerHTML = allImages;
}

function createButtons() {
  let buttons = document.querySelector(".buttons");
  let buttonsContent = "";
  data["buttons"].forEach((btn) => {
    console.log(btn["name"]);
    buttonsContent += `
           <div class="col-auto d-flex justify-content-center align-items-center">
            <a href="${btn["link"]}" class="d-flex justify-content-center align-items-center gap-3 btn px-3 mt-2 ${btn["class"]}" target="_blank"
              >${btn["name"]} <i class="${btn["icon"]} fa-beat"></i
            ></a>
          </div>`;
  });
  buttons.innerHTML = buttonsContent;
}


// slider options 

var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      450: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 5000000,
    },
  });