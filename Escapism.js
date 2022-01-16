var imageIndex = 0;
autoShow();

function autoShow() {
  var images = document.getElementsByClassName("images");
  for (var y = 0; y < images.length; y++) {
    images[y].style.display = "none";
  }
  imageIndex++;
  if (imageIndex > images.length) {imageIndex = 1}
  images[imageIndex-1].style.display = "block";
  setTimeout(autoShow, 8000);
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

  
var item = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}