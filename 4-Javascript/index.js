/*
Fonksiyon Nedir?
Tekrar eden kod bloklarımızın yeniden kullanılabilir yapmamızı sağlayan
kullanma yöntemidir.
Örneğin; bir sayıyı bir başka sayı ile toplamak için fonksiyonlardan yararlanabiliriz.
Ve bu fonksiyonu birden fazla kez kullanabiliriz.


#### Nasıl tanımlanır
#1
function function_name() {

}

#2--- const, var, let kullanarak
const function_name = function() {

}

#3---arrow method
--- const, var, let

let function_name = () => {

}

--- kısa arrow function
let function_name = () => undefined

#4 --- geriye fonksiyon döndüren fonksiyon tanımı
function functionCreator() {
 return function() {

 }
}

const createFn = functionCreator();
createFn();

#5 --- parametre alan fonksiyon tanımlaması
const function_name = function(param1, param2, param3) {

  // kod blokları
  
  console.log({param1, param2, param3})
}

#6 --- constructor method
const Person = function (name, age, gender) {
  const self = this;  // self thisi karşılıyor
  self.name = name;   // this.name -> self karşılamasaydı eğer
  self.age = age;
  const _gender = gender; //dişarıdan erişilmeyen bir bilgi - private

  self.getGender = () => _gender ? "Erkek" : "Kadın";
  this.toString = function () { // dışarıdan erişilbilen bir method yardımı ile kullanıcıya gösterilebilir.
    return self.name + " " + self.age + " " + self.getGender();
  }
}

*/

/*
**** Nasıl Kullanılır?
#7 --- parametre alan ve geriye değer döndüren method


function sum(a, b) {
  // bir şeyler yapılabilir
  return a + b;
}
const total = sum(1, 3);
console.log("total", total);
const total2 = sum(1, 5);
console.log("total2", total2);

//***********

const Person = function (name, age, gender) {
  const self = this;  // self thisi karşılıyor
  self.name = name;   // this.name -> self karşılamasaydı eğer
  self.age = age;
  const _gender = gender; //dişarıdan erişilmeyen bir bilgi - private

  self.getGender = () => _gender ? "Erkek" : "Kadın";
  this.toString = function () { // dışarıdan erişilbilen bir method yardımı ile kullanıcıya gösterilebilir.
    return self.name + " " + self.age + " " + self.getGender();
  }
}
const student = new Person("ahmet", 16, 1);
console.log(student.toString())
*/

/* ---ECS6 Class yapısı
// classlar özellik barındırabilir
class Person2 {
  name = ""
  age = 0
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  toString() {
    return this.name + " " + this.age;
  }
  toString2 = () => { // arrow method yapısı
    return this.name + " " + this.age
  }
}
const human = new Person2("ali", 16);
console.log(human.toString());

*/

/* --- Depolama işleminin yapılabilmesi için, 3 opsiyonumuz mevcuttur
    * localStorage
    * sessionStorage
    * cookie
    
  --- Depolama Nedir?
  Bizim bazı bilgilerimiz depolanır, cep telfonlarımızda uuygulamalarda, web sitelerinde ise browserda depolanır.
  Uygulama geliştiricileri kullanıcının bilgilerini kendi bilgisayar veya uygulamalarında neden depolama ihtiyacı duyarlar?
  örn:
  instagrama bir kere giriş yapılıyor kullanıcı çıkış yapmayana kadar uygulama tekrar giriş bilgilerini istemiyor.
  Bu depolama yöntemleri ile yapılmaktadır. 
  Eğer bu yöntemler kullanılmasaydı her defasında instagrama tekrar giriş yapılacaktı, bu da kullanıcının istemediği bir durum olacaktı.
  Depolama yöntemleri ile yerel olan bilgileri kullanabiliyoruz.

  a) localStorage:Tamamen client tarafında çalışır. Sunucu localStorage deki bilgilere erişemez. 
     Eğer task gibi bir şey çalıştırmıyorsak, kullanıcı localStorage deki bilgiyi silene kadar durur depolamaya devam eder. 

  b) sessionStorage: Browserı her açtığımızda sessionstorage ye bir bilgi yazılır. Browserı kapattığımızda o bilgi silinir.

  c) cookie: Belirli bir ömür vardır o ömrü geçene kaar bilgilerimiz orda duru.

  sessionStorage ve cookie clientSide tarafında okuyabildiğimiz gibi backend tarafında da okuyabiliriz.
  Ama localStorage daki bilgiyi backend tarafında okuyamayız. 


* * * * * * * * * * * * * * * 
  Kullanımları:
* * * * * * * * * * * * * 
*/
// #1 - localStorage a bir şeyler ekleme
window.localStorage.setItem("bootcamp", "javascript") //(key bigisi, )

// #2 - localStorage ta belirtilen keydeki değeri silme
window.localStorage.removeItem("bootcamp1")

// #3 - localStorage taki bilgiye erişebilme
const storage =  window.localStorage.getItem("bootcamp") // bootcamp keyinin valuesini bana getirsin
// string veya olmadığı durumda da null bilgisi döner
console.log(storage) // javascript bilgsi consolda görüntülenir

// #4 - localStorage taki bilginin tümünü silme 
window.localStorage.clear()

/*
client side ve server side nedir?
Kullanıcı ile etkileşime geçmek için dinamik web siteleri programlanırken yazdığımız kodların bir kısmı Server Side (Sunucu Taraflı) 
bir kısmı ise Client Side (İstemci Taraflı) çalışmaktadır.Daha açıklayıcı olmak gerekirse işlemler web sayfasının çağrıldığı istemci 
bilgisayarında yapılıp sonuçlar sunucuya gönderiliyorsa Client Side, istemciden aldığı verilerle işlemler sunucuda yapılıp sonuç istemciye 
gönderiliyorsa Server Side taraflı programlamadır.

sessionStorage: client side ve server side tarafından erişilebilen bir storage türüdür.
*/

// * * * * * * * * * * * * * * * * *
/*

*/