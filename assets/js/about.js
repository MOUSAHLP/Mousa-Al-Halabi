let btn =document.querySelector(".section-skills .center .rectangle");

btn.onclick = ()=>{
    let skills =document.querySelector(".section-skills .frame-works");
    skills.classList.toggle("show");
    // change local
    let htmlTag = document.querySelector("html");
    if(htmlTag.lang == "en" ){
        if(skills.classList.contains("show")){
            btn.dataset.local = "<span>Weniger</span>";
            btn.innerHTML = "<span>Less</span>";
        } 
        else{
            btn.dataset.local = "<span>Mehr</span>";
            btn.innerHTML = "<span>More</span>";
        }
    }
    else{
        if(skills.classList.contains("show")){
            btn.dataset.local = "<span>Less</span>";
            btn.innerHTML = "<span>Weniger</span>";
        } 
        else{
            btn.dataset.local = "<span>More</span>";
            btn.innerHTML = "<span>Mehr</span>";
        }
    }
}