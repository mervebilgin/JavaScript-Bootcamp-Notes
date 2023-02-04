/*
 * map() metodu, her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur.
 * map() dizideki her öğe için bir kez fonksiyonu çağırır.
 * map() boş öğeler için fonksiyonu yürütmez.
 * map() orijinal diziyi değiştirmez.
*/

// Tüm öğe değerlerinin kareköküyle yeni bir dizi döndürün:
// const numbers = [4, 9, 16, 25];
// document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
// -------------> 2,3,4,5

// Bir dizideki tüm değerleri 10 ile çarpın:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 10;
}