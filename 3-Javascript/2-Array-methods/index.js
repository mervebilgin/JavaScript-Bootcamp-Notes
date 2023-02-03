/*
 * constructor() özelliği, dizi prototipini oluşturan işlevi döndürür.
 * JavaScript dizileri için constructor() özelliği şunu döndürür: 
 * function Array() { [native code] }
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

document.getElementById("demo").innerHTML = text;