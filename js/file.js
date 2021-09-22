// Bảng chọn
function openLink(evt,linkName)
{
    var i,x,tablink;
    x=document.getElementsByClassName("MyChoose");
    for(i=0; i<x.length;i++)
        x[i].style.display="none";
    
    tablink = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablink[i].className = tablink[i].className.replace(" w3-pale-blue", "");
        }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-pale-blue";
}
document.getElementsByClassName("tablink")[0].click();


// Slide
var slideIndex = 1;
 showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
 }
function currentSlide(n) {
   showSlides(slideIndex = n);
 }
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }
