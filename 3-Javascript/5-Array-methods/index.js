/*
 * every(), her dizi öğesi için bir işlev yürütür.
 * İşlev , tüm öğeler için true döndürürse, every() metodu true döndürür.
 * İşlev bir öğe için false döndürürse, every() metodu false döndürür.
 * every() metodu, boş öğeler için işlevi yürütmez.
 * every() metodu orijinal diziyi değiştirmez
*/

const ages = [32, 33, 16, 40];
document.getElementById("demo").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}
