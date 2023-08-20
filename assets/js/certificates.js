const myCertificates = {
  "Front-End": {
    name: "Front-End",
    Certificates: [
      {
        name: "Introduction to Front-End Development",
        disc: "Certificate from Coursera <br> Presented By Meta",
        disc_de: "Zertifikat von Coursera <br> Präsentiert von Meta",
        link: "https://coursera.org/share/032c11e877d3aece4a1aae6436564f46",
      },
      {
        name: "Programming with JavaScript",
        disc: "Certificate from Coursera <br> Presented By Meta",
        disc_de: "Zertifikat von Coursera <br> Präsentiert von Meta",
        link: "https://coursera.org/share/442168d8bf941e4eb25064adf55f6606",
      },
      {
        name: "Version Control",
        disc: "Certificate from Coursera <br> Presented By Meta",
        disc_de: "Zertifikat von Coursera <br> Präsentiert von Meta",
        link: "https://coursera.org/share/a6b3fd00cea11090737eaddff5ea1421",
      },
    ],
  },
};
let modal_certificates = document.querySelector(
  ".modal.fade-scale.certificate"
);
let closeBtn = document.querySelector(
  ".modal.fade-scale.certificate .modal-header a"
);
function showCertificates(certificates) {
  // to change the title
  let title = document.querySelector(
    ".modal.fade-scale.certificate .modal-body .modal-title"
  );
  title.innerHTML = myCertificates[certificates]["name"];

  //to build the content
    
  let currLang = localStorage.getItem("currLang")??"en";
  let disc="disc";
  let view="view";

  if (currLang != "en"){
    disc = "disc_de";
     view="Schau mal";
}

  let certificates_content = document.querySelector(
    ".modal-dialog.certificates .certificates-content"
  );
  certificates_content.innerHTML="";
  myCertificates[certificates]["Certificates"].forEach((Certificate) => {
    certificates_content.innerHTML += `<div class="certificate">
        <div class="certificate-box">
          <h4 class="certificate-title">${Certificate['name']}</h4>
          <p>${Certificate[disc]}</p>
        </div>
          <a href="${Certificate['link']}" class="btn rectangle" target="_blank"
          
          ><span class="localization"  data-local="Schau mal">${view}</span></a>
      </div>`;
  });

  // for background
  let backgroundDiv = document.createElement("div");
  backgroundDiv.classList.add("modal-backdrop");
  backgroundDiv.classList.add("fade");
  backgroundDiv.classList.add("in");
  document.body.appendChild(backgroundDiv);

  backgroundDiv.onclick = () => {
    backgroundDiv.remove();
    modal_certificates.classList.remove("in");
  };
  //show modal
  modal_certificates.classList.add("in");
}
closeBtn.onclick = () => {
  let backgroundDiv = document.querySelector(".modal-backdrop");
  backgroundDiv.remove();
  modal_certificates.classList.remove("in");
};
