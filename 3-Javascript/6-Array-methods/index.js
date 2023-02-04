/*
 * fill() metodu, bir dizideki belirtilen öğeleri bir değerle doldurur.
 * orijinal dizinin üzerine yazar.
 * Başlangıç ​​ve bitiş konumu belirtilebilir. Değilse, tüm öğeler doldurulacaktır.
*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.fill("Kiwi");
// -----------> Kiwi,Kiwi,Kiwi,Kiwi

//Son iki öğeyi kivi itemı ile doldurur
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.fill("Kiwi",2,4);