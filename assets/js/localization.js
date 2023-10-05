
let htmlTag = document.querySelector("html");
htmlTag.lang = localStorage.getItem("currLang")??"en";
if(htmlTag.lang !="en"){
  changeLocalization();
}

function changeLocalization() {
  let mytexts = document.querySelectorAll(".localization");
  mytexts.forEach((text) => {
    let temp = text.childNodes[0].nodeValue; 
    text.childNodes[0].nodeValue  = text.dataset["local"];
    text.dataset["local"] = temp;
  });

}

let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

dropdownItems.forEach((dropdownItem)=>{
  dropdownItem.onclick=()=>{

    let currLang= localStorage.getItem("currLang")??"en";

    if(dropdownItem.dataset.lang != currLang){
      localStorage.setItem("currLang",dropdownItem.dataset.lang);
      htmlTag.lang = dropdownItem.dataset.lang;
      changeLocalization();
    }
    
  };
});
