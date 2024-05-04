const birthdaySong = "song1.mp3";
const moewSong = "song2.mp3";
const present = document.getElementById("present");
const main = document.querySelector("main");

present.addEventListener("click", () => playSong(birthdaySong));
function playSong(song) {
  console.log("Playing song: ", song);
  const audio = new Audio(song);
  audio.play();
  present.style.display = "none";
  main.style.display = "flex";
}
