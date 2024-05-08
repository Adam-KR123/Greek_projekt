let slideIndex=0;
istenek_slideshow();
let btn_left=document.getElementById("button_left");
let btn_right=document.getElementById("button_right");
btn_left.addEventListener("click",(e)=>{
    let i;
    let slides=document.getElementsByClassName("_slideshow");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex--;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    else if(slideIndex<1){
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.display="flex";
    slides[slideIndex-1].style.animation="leftil 0.5s reverse";
})
btn_right.addEventListener("click",(e)=>{
    let i;
    let slides=document.getElementsByClassName("_slideshow");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    else if(slideIndex<0){
        slideIndex=slides.length;
    }
    slides[slideIndex-1].style.display="flex";
    slides[slideIndex-1].style.animation="rightil 0.5s reverse";
})
function istenek_slideshow(){
    let i;
    let slides=document.getElementsByClassName("_slideshow");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display="flex";
}