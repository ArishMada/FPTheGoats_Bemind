var slideIndex = 0
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n)
}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
      slideIndex = 1
    }
      if(n < 1) {
      slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

autoShow();

function autoShow() {
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (var y = 0; y < slides.length; y++) {
    slides[y].style.display = "none";
  }
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(autoShow, 6000);
}

window.addEventListener("scroll",function(event){
  var scroll= this.scrollY;
  console.log(scroll);
  var SemiMenu= document.getElementById('NavScroll')
  if (scroll>80){
    SemiMenu.className='semicircle'
  } else{
    SemiMenu.className='gone'
  }
})