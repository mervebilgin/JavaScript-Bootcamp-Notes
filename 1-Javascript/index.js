/*
JavaScript Nedir?
JavaScript bir programlama dilidir. Javascript ile birlikte mobil uygulamalar, websiteleri masaüstü uygulamları, akıllı saat uygulamaları 
gibi uygulamlalar geliştirebiliriz. JavaScript bu nedenle çok önemli ve popüler bir dildir.
Kullanıcı ile etkileşime girebilen uygulamalar geliştirmek için işimize yarar. Yani probremlerimizi çözebilir.

Nedir bu etkileşim?
web siteleri ilk çıktığında sadece bir html den ibaretti, kullanıcı ekranında sadece web sitesini görüyordu. Butona basınca yeni bir 
menünün açılması, kapanması, stillerinin değişmesi gibi interaktif bir halde değildi, sadece görme amaçlı kullanılan bir durumdaydı. 
Bu duruma web 1.0 denilmektedir.

Web 2.0 ile birlikte kullanıcının herhangi bir butonu olabilir, bu butona tıklanılması sonucu ortaya bir şeyler çıkabiliyor, menü sayfa vs, 
yani butonumuz aktif olmuş oluyor. 
Örenğin form doldurup, formu post edebiliyoruz. Bu bir etkileşim örneğidir. 
Sepetimize ürün ekleme veya çıkarma işlemi, kullanıcıya feedback verebilme işlemi vs etkileşime örnektir. 
Yukarda saydığımız işlemleri çok güçlü bir şekilde yapmamızı sağlayan bir programlama dilidir.

Browser üzerinde çalışır. Clientside uygulama olarak hayatımıza girdiyse de Node.js in çıkması ile birlikte artık backend tarafında da 
JavaScript kullanılarak geliştirmeler yapılmaktadır. 
*/

console.log("*********** Değişken Tanımlama ***********")

const javascript = "";
javascript = "yeni değer"
console.log(javascript);
/** const değeri değiştirilemez, const ile tanımlanan değişkenin ilk değerinden sonra o değere tekrar bir değer ataması bize hata verecektir*/

var react = "react.js"
react = "yeni değer"
console.log(react);

let bootcamp = "bootcamp"
bootcamp = "yeni değer"
console.log(bootcamp);

/** var ve let ile tanımlanan değişkene yeni değer ataması yapılabilidr, bize herhangi bir hata vermez. */

console.log("********** Const Veri Türleri **********")
const deger = "string" //string
const bool = true;     //boolean
const num = 1;         //number
const array = [];      //array
const obj = {};        // obje
