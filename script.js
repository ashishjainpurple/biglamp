
window.onload = () => {
  const music = document.getElementById("bg-music");
  const glow = document.getElementById("glow");

  document.querySelector('a-marker').addEventListener("markerFound", () => {
    music.play();
    glow.style.display = 'block';
  });

  document.querySelector('a-marker').addEventListener("markerLost", () => {
    music.pause();
    glow.style.display = 'none';
  });
};
