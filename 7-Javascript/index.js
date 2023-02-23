// console.log("index.js") --> sayfaya index.js i include etmiş olduk

// DÖNGÜLER
// array tanımlama
const data = [
  { name: "bilge", age: 24 },
  { name: "merve", age: 22 },
  { name: "evin", age: 20 },
  { name: "zeliha", age: 18 },
];

// döngüler oluşturulurken döngünün içinde gerçekleşen işlemi bir fonksiyonda tanımlayıp,
// oluşturulan fonksiyon döngünün içerisnde çağırılabilir
const root = document.querySelector("#root");

const render = () => {
  // ul tagi oluşturuldu
  const ul = document.createElement("ul");

  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.age}`;
    ul.appendChild(li);
  };

  for (const index in data) {
    const item = data[index];
    renderItem(item);
  }

  root.appendChild(ul); // tüm işlemleri yapıp bunu root elementine eklememiş olsaydık tüm işlemler havada kalırdı
};
render();
