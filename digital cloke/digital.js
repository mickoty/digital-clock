const hour = document.querySelector(".hour");
const min = document.querySelector(".mins");
const seco = document.querySelector(".sec");
const date = document.querySelector(".date");

const interal = () => {
  const day = new Date();
  const hours = day.getHours();
  const mins = day.getMinutes();
  const sec = day.getSeconds();

  return setInterval(() => {
    `${hours}: ${mins}: ${sec}`;
  }, 1000);
};
console.log(interal());

const day = new Date();
const hours = day.getHours();
const mins = day.getMinutes();
const sec = day.getSeconds();

console.log(`${hours}: ${mins}: ${sec}`);

setInterval(() => {
  const day = new Date();
  const hours = day.getHours();
  const mins = `${day.getMinutes()}`.padStart(2, 0);
  const sec = `${day.getSeconds()}`.padStart(2, 0);
  const option = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date1 = new Intl.DateTimeFormat(navigator.language, option).format(
    new Date()
  );

  hour.textContent = hours;
  min.textContent = `:${mins}`;
  seco.textContent = `:${sec}`;
}, 1000);
const option = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
const date2 = new Intl.DateTimeFormat(navigator.language, option).format(
  new Date()
);
console.log(date2);
date.textContent = date2;
