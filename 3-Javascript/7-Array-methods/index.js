/*
 * filter() metodu, bir işlev tarafından sağlanan testi geçen öğelerle dolu yeni bir dizi oluşturur.
 * boş öğeler için işlevi yürütmez.
 * filter() metodu orijinal diziyi değiştirmez.
*/

// 18 veya daha büyük olan yaşlardaki[] tüm değerlerin bir dizisini döndürün:
const ages = [32, 33, 16, 40];
    
document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
