"use strict";
console.log("Запрос данных");

const req = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Подготовка данных");

    const good = {
      name: "TV",
      price: 2000,
    };
    res(good);
  }, 2000);
}).then((good) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      good.status = "order";
      res(good);
    }, 2000);
  });
}).then((data) => {
  data.modify = true;
  return data;

}).then((data)=>{
  console.log(data);
}). catch(()=>{
  console.error('Произошла ошибка');
});