/*
  HATA YÖNETİMİ: 
  Kullanıcılar tarafından kullanılan uygulamanın hata yönetimi şu şekildedir:
  Amacımız kullanıcılar tarafından sorunsuz bir şekilde kullanılabilmesi,
  Uygulamanın frontend veya backend tarafından hatalar olabilir, eğer bu hataları
  kontrol edemezsek, monitöre edemezsek, bizim hataları bir şekilde almamız lazım ve bunu 
  loglayabilmemiz gerekiyor, loglanan hataları mönitore edebildiğimiz gibi uygulamanın hangi
  satırında hata aldığımızı bile görebiliriz. 

  bugfix: hata düzeltme
*/

// try - catch blokları // hata yapılan yeri yakalamak için kullanılır
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

  try {
    
  } catch (error) {
    
  }

  root.appendChild(ul); 
};
render();
