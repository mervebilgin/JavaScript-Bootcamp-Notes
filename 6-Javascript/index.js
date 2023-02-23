// console.log("index.js") --> sayfaya index.js i include etmiş olduk

// DÖNGÜLER
// array tanımlama
const data = [
  { name: "bilge", age: 24 },
  { name: "merve", age: 22 },
  { name: "evin", age: 20 },
  { name: "zeliha", age: 18 },
];

// DOM fonksiyonlarından querySelector kullanıldı, querySelector bir selektör alır içerisine,bu id,name vs olabilir
// şu an id ile seçileceği için, html de #root id si yazılır, id seçicisinde # kullanılır
const root = document.querySelector("#root");

// console.log(data)

//--> döngü kullanarak data arrayimizi html imize yazdıralım
// arrow fonksiyon tanımı
const render = () => {
  // ul tagi oluşturuldu
  const ul = document.createElement("ul");

  // ECS 6 for döngüsü #1 * * * * *  *
  /*
  for (const index in data) {
    const item = data[index];
    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.age}`;
    ul.appendChild(li);
  } */

  for (const item of data) {
    // of keywordü: ile datanın o anki elementi neyse index numarasına göre hesaplayıp elementini verir
    // console.log(item);

    const li = document.createElement("li");
    li.innerText = `${item.name} ${item.age}`;
    ul.appendChild(li);
  }

  /*
    of ile itemin kendisine erişilir
    in ile indexe erişilir
  */

  root.appendChild(ul); // tüm işlemleri yapıp bunu root elementine eklememiş olsaydık tüm işlemler havada kalırdı
};
render();
