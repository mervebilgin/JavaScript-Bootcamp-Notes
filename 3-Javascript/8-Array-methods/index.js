/*
 * find() metodu, bir testi geçen ilk öğenin değerini döndürür.
 * her dizi öğesi için bir işlev yürütür.
 * Hiçbir öğe bulunamazsa find() metodu undefined döner.
 * find() metodu, boş öğeler için fonsiyonu yürütmez.
 * find() metodu orijinal diziyi değiştirmez.
*/

// 18'den büyük bir değere sahip ilk elemanın değerini bulun:
const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}