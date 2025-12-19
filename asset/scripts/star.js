console.log("star.js loaded");
for (let i = 0; i < 1000; i++) {
  //get random dimensions
  let x = Math.random() * 120; //星の座標
  let y = Math.random() * 100;
  let d = Math.random() * 4; //星の大きさ
  let s = Math.random() * 2 + 2.5; //星の瞬きの速さ

  let star = document.createElement("div");
  star.classList.add("star");
  let sky = document.getElementById("starry_sky");
  sky.appendChild(star);

  star.style.width = d + "px";
  star.style.height = d + "px";
  star.style.top = y + "%";
  star.style.left = x + "%";
  star.style.animationDuration = s + "s";
}
