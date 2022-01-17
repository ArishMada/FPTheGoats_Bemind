// images automatically changing
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

// the semi-circular nav bar only appears when we have scrolled down 200
window.addEventListener("scroll",function(event){
    var scroll= this.scrollY;
    console.log(scroll);
    var SemiMenu= document.getElementById('NavScroll')
    if (scroll>200){
      SemiMenu.className='semicircle'
    } else{
      SemiMenu.className='gone'
    }
  })

// show the content only when the collapsible is clicked  
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

// music player
const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
// titles
const titles = ['Mindfulness', 'Peace', 'Relaxing', 'Serenity', 'Stress reliever']
let songIndex = 1;

loadSong(titles[songIndex])
//update details
function loadSong(song) {
  title.innerText = song;
  audio.src = `meditation/${song}.mp3`
  cover.src = `meditation/${song}.jpg`;
}
// Play song and replace the play icon with the stop one
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}
//pause 
// Pause song and replace pause icon by play icon
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
//previous and next btn
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = titles.length - 1;
  }
  loadSong(titles[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > titles.length - 1) {
    songIndex = 0;
  }
  loadSong(titles[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('ended', nextSong);
//progress bar
function setProgress(p) {
  const width = this.clientWidth
  const clickX = p.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}
function updateProgress(p) {
  const { duration, currentTime } = p.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress);