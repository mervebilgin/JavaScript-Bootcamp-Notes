
const data = [
  { name: "bilge", age: 24 },
  { name: "merve", age: 22 },
  { name: "evin", age: 20 },
  { name: "zeliha", age: 18 },
];

const root = document.querySelector("#root");

const render = () => {
  
  const ul = document.createElement("ul");

  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.age}`;
    ul.appendChild(li);
  };

  // FOR-EACH DÖNGÜSÜ
  data.forEach((item, index )=> {
    console.log({item, index}); // item: key, index: value
  });

  root.appendChild(ul); 
};
render();
