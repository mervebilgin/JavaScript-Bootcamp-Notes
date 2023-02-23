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

    // li yi her item için yapılacağı için - döngü 
    for (let i = 0; index < data.length; i++) {
        const item = data[i];

        // her bir data itemi için createElement ile 4 kez li oluşturuldu
        const li = document.createElement("li"); // oluşturulmuş olan li - leri ul-nin child ına veriyoruz

        // linin innerTextine item.name ve item.age verdik
        li.innerText = item.name + " " + item.age

        // ul ye li append edilmiş oldu
        ul.appendChild(li)
    }
    // ul yi html deki root kısmının altında görebilmek için root un append childına ul yi verdik
    root.appendChild(ul)

    // createElement("ul") - createElement("li") içerisine bir tag alıyor, bu tagi bir dom nesnesi olarak biz js te veriyor, 
    // daha sonra bu nesneleri programatik olarak htmle eklenileblir
}
render();
// yukarda oluşturulan render methodu oluşturuldu ve sonrasında çağrıldı, 
// çağrıldıktan sonra render fonksiyonun bulunduğu scoope nin içerisine girer

