/*
 * concat() metotu, iki veya daha fazla diziyi birleştirir.
*/

// #1
const arr1 = ["Merve", " Bilgehan"];
const arr2 = [" Kılıç", " Serap", " Erçel"];

const children = arr1.concat(arr2); 
// document.getElementById("demo").innerHTML = children;
// çıktı: Merve, Bilgehan, Kılıç, Serap, Erçel

// #2
const arr3 = [" Robin"];
const children2 = arr1.concat(arr2, arr3);
document.getElementById("demo").innerHTML = children2;


/** concat()
 *  iki veya daha fazla diziyi birleştirir (birleştirir).
 *  birleştirilmiş dizileri içeren yeni bir dizi döndürür.
 *  mevcut dizileri değiştirmez.
 */