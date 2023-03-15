// Створюємо масив можливих виборів
var choices = ["камінь", "ножиці", "папір"];

// Функція для гри
function play() {
  // Отримуємо значення вибору гравця з інпуту
  var playerChoice = document.getElementById("player-choice").value;

  // Вибираємо випадковий вибір комп'ютера з масиву choices
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Виводимо вибір комп'ютера та гравця в консолі
  console.log("Ваш вибір: " + playerChoice);
  console.log("Комп'ютер вибрав: " + computerChoice);

  // Перевіряємо, хто виграв
  if (playerChoice === computerChoice) {
    document.getElementById("result").innerHTML = "Нічия!";
  } else if (
    (playerChoice === "камінь" && computerChoice === "ножиці") ||
    (playerChoice === "ножиці" && computerChoice === "папір") ||
    (playerChoice === "папір" && computerChoice === "камінь")
  ) {
    document.getElementById("result").innerHTML = "Ви виграли!";
  } else {
    document.getElementById("result").innerHTML = "Ви програли!";
  }
}