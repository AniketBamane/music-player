var songs =[
  {name:"arjun villay",song:"songs/Arjun Velly_64-(PagalWorld).mp3",image:"images/animal.jpg",duration:"3.56"},
  {name:"ram siya ram ",song:"songs/_Ram Siya Ram_64(PagalWorld.com.cm).mp3",image:"images/adipurush.jpeg",duration:"3.00"},
  {name:"laal peli akhiyaan",song:"songs/Laal Peeli Akhiyaan.mp3",image:"images/lalpeeli.jpg",duration:"3.16"},
  {name:"pehle bhi main",song:"songs/Pehle Bhi Main Tumse Mila Hu_64(PagalWorld.com.cm).mp3",image:"images/animal.jpg",duration:"2.56"},
];

var selectedSong = 0
var isPlaying = false;
var poster = document.querySelector(".music-poster-part");
var backward = document.querySelector("#backward");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");



var audio = new Audio();
function showSongs(){
  clutter =  "";
songs.forEach((song,index)=>{
  clutter += `<div class="music-card"  id="${index}">
  <div class="music-intro">
    <img height="55px" width="55px" src="${song.image}" alt="animal song">
    <h3>${song.name}</h3>
  </div>
  <h3>${song.duration} minutes</h3>
</div>`;
});
document.querySelector(".music-list").innerHTML = clutter;
}


function playAudio(selectedSongNumber){
  audio.src = songs[selectedSongNumber].song;
  poster.style.backgroundImage =`url(${songs[selectedSongNumber].image})`;
  audio.play();
  isPlaying = true;
}



document.querySelector(".music-list").addEventListener("click",(dets)=>{
  selectedSong = dets.target.id;
  playAudio(selectedSong);
  play.style.display = "block";
 if(selectedSong == 0){
  backward.style.opacity = 0.4;
 }else if(selectedSong == songs.length -1){
  forward.style.opacity = 0.4;
 }
  forward.style.display = "block";
  backward.style.display = "block";
});


play.addEventListener("click",()=>{
  if(isPlaying){
    play.innerHTML = `<i class="ri-arrow-right-s-fill"></i>`;
    audio.pause();
    isPlaying = false;
  }else{
    play.innerHTML = `<i class="ri-pause-circle-fill"></i>`;
    audio.play();
    isPlaying = true;
  }
});

forward.addEventListener("click",()=>{
  backward.style.opacity = 1;
  if((songs.length -1) - selectedSong == 1){
    selectedSong++;
    playAudio(selectedSong);
    forward.style.opacity = 0.4;
  }else{
    selectedSong++;
    playAudio(selectedSong);
    forward.style.opacity = 1;
  }
});
backward.addEventListener("click",()=>{
  forward.style.opacity = 1;
  if((songs.length -1) - selectedSong == selectedSong + 1){
    selectedSong--;
    playAudio(selectedSong);
    backward.style.opacity = 0.4;
  }else{
    selectedSong--;
    playAudio(selectedSong);
    backward.style.opacity = 1;
  }
});







// calling of functions ------
showSongs();