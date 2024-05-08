
var date=new Date()
var year=Number(date.getFullYear());
var month=Number(date.getMonth());
var day=Number(date.getDate());
document.getElementById("timer").innerText=((year+800)*365+(month-1)*30+day)+" napja létezik a görög mitológia!";
var slideIndex=0;
slideshow();
function slideshow(){
    let i;
    var slides=document.getElementsByClassName("slideshows");
    for(i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(slideshow,3000);
}