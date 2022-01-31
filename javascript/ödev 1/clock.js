window.onload = function() {
  showTime();
};

function showTime() {
  let name = prompt("Please enter your name:");
  document.getElementById("myName").innerHTML=name;
  const d = new Date();
  var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  var saat=d.getHours();
	var dakika=d.getMinutes();
	var saniye=d.getSeconds();	
  document.getElementById("myClock").innerHTML = saat+":"+dakika+":"+saniye+" "+gunler[d.getDay()];
}