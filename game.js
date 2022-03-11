const character = document.getElementById("character");
const pen = document.getElementById("pen");
const coin = document.getElementById("coin");
const coin = 0;
const coindisplay = document.querySelector('coin');

function jump() {
  if (character.classList != "jump") {
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
    alert("YOU GOT PEN PIERCED!");
}
if(coinLeft < 100 && coinLeft > 0 && characterTop >= 200){
coin++;
coindisplay.innerHTML = coin;
};
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
