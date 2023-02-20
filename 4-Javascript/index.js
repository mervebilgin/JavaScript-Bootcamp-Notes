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
