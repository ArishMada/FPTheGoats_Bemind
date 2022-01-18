var box = document.querySelectorAll('.box');

for (let i = 0; i<box.length; i++){
    box[i].addEventListener( 'click', function() {
        box[i].classList.toggle('is-flipped');
      });
}
