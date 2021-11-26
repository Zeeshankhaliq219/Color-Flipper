const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "#1abc9c",
  "#e74c3c",
  "#2ecc71",
  "#2980b9",
];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
