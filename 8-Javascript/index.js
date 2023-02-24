const data = [
  { name: "bilge", age: 24, gender: "kadın" },
  { name: "hamza", age: 15, gender: "erkek"},
  { name: "evin", age: 20, gender: "kadın" },
  { name: "zeliha", age: 18, gender: "kadın" }
];

const root = document.querySelector("#root");

const render = () => {
  
  const ul = document.createElement("ul");

  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.age} ${item.gender}`;
    ul.appendChild(li);
  };

  // FOR-EACH DÖNGÜSÜ
  // data.forEach((item, index )=> {
  //   console.log({item, index}); // item: key, index: value
  // });

  data.forEach((item, index )=> {
    console.log(item);
  });

  root.appendChild(ul); 
};
render();

/*
  Fonksiyonlar sayesinde birçok kez yapılan , tekrar edilen şeyin merkezi bir 
  yerden yani tek bir yapılmasını sağlamak için fonksiyonlar bize yardımcı olur.
*/
