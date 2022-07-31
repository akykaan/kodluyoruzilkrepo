// resolve ile yolla then ile yakala
// reject ile yolla catch ile yakala

const promise1 = new Promise((resolve, reject) => {
  resolve("veriler alındı");
  //reject("bağlantı hatası");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

