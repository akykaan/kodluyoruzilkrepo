/*
    createServer metodunu kullanacağız.
    index, hakkimda ve iletisim sayfaları oluşturalım.
    Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
    port numarası olarak 5000'i kullanalım.
*/

const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi."); 
});

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});