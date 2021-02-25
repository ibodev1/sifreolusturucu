var sifre = document.getElementById("sifre");
var btn = document.getElementById("btn");
var eye = document.getElementById("eyes");
var icon = document.getElementById("icon");
var karakter = document.getElementById("karakter");
var bildirim = document.getElementById("bildirim");
var uzunluk_out = document.getElementById("uzunluk_out");
var sayi = document.getElementById("sayi");
var b_harf = document.getElementById("b_harf");
var k_harf = document.getElementById("k_harf");
var sembol = document.getElementById("sembol");
var karakter_uzunluk = 10;
uzunluk_out.innerHTML = karakter_uzunluk;

function uzunluk() {
  if (karakter.value < 10) {
    alert("10 dan küçük olamaz");
    karakter.value = 10;
  } else if (karakter.value > 20) {
    alert("20 den büyük olamaz");
    karakter.value = 20;
  } else {
    karakter_uzunluk = karakter.value;
    uzunluk_out.innerHTML = karakter_uzunluk;
  }
}


function generateP() {
  var pass = "";
  var str = "";
  
  if (sayi.checked == true) {
    str += "0123456789";
  }
  if (b_harf.checked == true) {
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (k_harf.checked == true) {
    str += "abcdefghijklmnopqrstuvwxyz";
  }
  if (sembol.checked == true) {
    str += "#%+-?@!*";
  }
  for (i = 1; i <= karakter_uzunluk; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
}


function gen() {
  sifre.value = "";
  sifre.value = generateP();
}

eye.addEventListener("click", function () {
  icon.classList.toggle("fa-eye-slash");
  if (sifre.type === "password") {
    sifre.type = "text";
  } else {
    sifre.type = "password";
  }
});

btn.addEventListener("click", function () {
  if (sifre.type === "password") {
    alert("Kopyalamak İçin Şifrenin Görünür Olması Lazım.");
  } else {
    sifre.focus();
    sifre.select();
    sifre.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Kopyalanan Şifre: " + sifre.value);
  }
});
