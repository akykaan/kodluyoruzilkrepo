// await sayesinde bir sonraki satıra geçmiyor
// async ile beraber kullanılır

function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("veriler almaya çalışılıyor");

    if (data) {
      resolve("veriler alındı");
    } else {
      reject("veriler alınamadı");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("veriler düzenleniyor.");

    if (receivedData) {
      resolve("veriler düzenlendi.");
    } else {
      reject("veriler düzenlenemedi.");
    }
  });
}

function getlog() {console.log("getlog");}
async function processData() {
  //   const data1 = await getData(true);
  //   console.log(data1);

  //   const data2 = await cleanData(true);
  //   console.log(data2);
  const data =  getlog();
  return data;
}

processData();
