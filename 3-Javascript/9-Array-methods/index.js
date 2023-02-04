/*
 * forEach() metodu, bir dizideki her öğe için bir işlev çağırır.
 * boş öğeler için yürütülmez.
*/

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}