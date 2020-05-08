const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const text = document.getElementById("text");

function t(v) {
  text.innerText = v;
}

function draw() {
  context.drawImage(video, 0, 0, 1000, 562.5);
}

video.onseeked = () => {
  draw();
};

function p() {
  video.currentTime = Math.max(0, video.currentTime - 1 / 60);
  draw();

  t(video.currentTime);
}

function n() {
  video.currentTime = Math.min(video.duration, video.currentTime + 1 / 60);
  draw();

  t(video.currentTime);
}
