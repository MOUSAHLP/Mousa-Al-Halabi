let currLang="en";
let htmlTag = document.querySelector("html");
htmlTag.lang = "en";

function changeLocalization() {
  let mytexts = document.querySelectorAll(".localization");

  mytexts.forEach((text) => {
    console.log(text.dataset["local"])
    let temp = text.childNodes[0].nodeValue; 
    console.log(temp)
    text.childNodes[0].nodeValue  = text.dataset["local"];
    text.dataset["local"] = temp;
  });

}

let dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");

dropdownItems.forEach((dropdownItem)=>{
  dropdownItem.onclick=()=>{
    if(dropdownItem.dataset.lang != currLang){
      currLang = dropdownItem.dataset.lang;
      htmlTag.lang = currLang;
      changeLocalization();
    }
    
  };
});
