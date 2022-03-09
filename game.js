const character = document.getElementById("character");
const pen = document.getElementById("pen");

function jump() {
  if (character.classList != "jump") {
    character.classList.add("jump");
    setTimeout(function () {
      character.classList.remove("jump");
    }, 700);
  }
}

let Alive = setInterval(function () {
  let characterTop = parse.Int(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let penLeft = parseInt(window.getComputedStyle(pen).getPropertyValue("left"));

  if (penLeft < 50 && penLeft > 0 && characterTop >= 140) {
    alert("YOU GOT PEN PIERCED!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
