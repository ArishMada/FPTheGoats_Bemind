// the semi-circular nav bar only appears when we have scrolled down 200
window.addEventListener("scroll",function(event){
    var scroll= this.scrollY;
    var SemiMenu= document.getElementById('NavScroll')
    if (scroll>80){
      SemiMenu.className='semicircle'
    } else{
      SemiMenu.className='gone'
    }
  })

  var box = document.querySelectorAll('.box');

  for (let i = 0; i<box.length; i++){
      box[i].addEventListener( 'click', function() {
          box[i].classList.toggle('is-flipped');
        });
  }
  