let count = 0;
const countSpan = document.getElementById("count");
const button = document.getElementById("clickBtn");

// Telegram WebApp init
const tg = window.Telegram.WebApp;
tg.expand();

button.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;

  tg.MainButton.setText(`Отправить ${count} кликов`);
  tg.MainButton.show();
});

// Отправка данных при нажатии на главную кнопку
tg.MainButton.onClick(() => {
  tg.sendData(JSON.stringify({ clicks: count }));
});