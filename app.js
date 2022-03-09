const inputName = document.querySelector("#input-name");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", handleClick);

function handleClick() {
  let playerName = inputName.value;

  inputName.style.display = "none";
  submitButton.style.display = "none";

  let newHeading = document.createElement("h2");
  newHeading.classList.add("greeting-text");
  newHeading.innerHTML = "Hello," + playerName + ", welcome!";
  document.querySelector("body").append(newHeading);

  localStorage.setItem("playerName", playerName);
  window.location.href = "./index.html";
}
