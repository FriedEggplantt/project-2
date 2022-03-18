const character = document.getElementById("character");
const pen = document.getElementById("pen");
let hops = 0;
const hopscount = document.getElementById("hops");

function jump() {
  if (character.classList != "jump") {
    hops++;
    hopscount.innerHTML = hops;
    character.classList.add("jump");
    setTimeout(function () {
      character.classList.remove("jump");
    }, 700);
  }
}

let Alive = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let penLeft = parseInt(window.getComputedStyle(pen).getPropertyValue("left"));

  console.log("penLeft: " + penLeft);
  console.log("characterTop: " + characterTop);
  if (penLeft < 100 && penLeft > 0 && characterTop >= 200) {
    alert("YOU GOT PEN PIERCED AFTER " + hops + " JUMPS");
    hops = 0;  
    hopscount.innerHTML = hops;
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
