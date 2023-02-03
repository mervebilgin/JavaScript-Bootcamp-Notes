/*
 * copyWithin(), dizi öğelerini dizideki başka bir konuma kopyalar.
 * mevcut değerlerin üzerine yazar.
 * diziye öğe eklemez.
 * 
 * ***************
 * Söz Dizimi:
 * array.copyWithin(target, start, end)
*/

// const fruits = ["Banana", " Orange", " Apple", " Mango"];
    
// document.getElementById("demo").innerHTML = fruits.copyWithin(2,1);

// --------> Banana, Orange, Orange, Apple

const fruits = ["Banana", " Orange", " Apple", " Mango", " Kiwi", " Papatya"];

// İlk iki dizi öğesini üçüncü ve dördüncü konuma kopyalayın:
document.getElementById("demo").innerHTML = fruits.copyWithin(2,0,2);