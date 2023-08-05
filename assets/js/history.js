

// for automatic animation (Right or Left)

let timelines = document.querySelector(".timeline");

[...timelines.children].forEach((timeline,index) => {
    if(index % 2 == 0 ){

        timeline.classList.add("slideInLeft");
    }
    else{
        timeline.classList.add("slideInRight");
    }
});