/*
 * entries(), anahtar/değer çiftlerine sahip bir Dizi Yineleyici nesnesi döndürür:
 * 
    [0, "Muz"]
    [1, "Turuncu"]
    [2, "Elma"]
    [3, "Mango"]

   entries() metodu, orijinal diziyi değiştirmez.
*/

const fruits = [" Banana", " Orange", " Apple", " Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x + "<br>";
}
