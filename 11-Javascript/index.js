/*
  APILER İLE ÇALIŞMAK: 
  Uygulamamız her zaman böyle statik bilgilere sahip olmayabilir, uygulamamız kullanıcılar ile 
  iletişime geçtiği için apiler yardımı ile dataları alıyor ve işliyor olabiliriz. 

*/

/* apiden datalarımızı almak 
  fake data : https://jsonplaceholder.typicode.com/ -- 
  bir apiden veri alabilyormuş gibi kullanabildiğimiz bir site
*/
const data = [
  { name: "bilge", age: 24, gender: "kadın" },
  { name: "hamza", age: 15, gender: "erkek" },
  { name: "evin", age: 20, gender: "kadın" },
  { name: "zeliha", age: 18, gender: "kadın" },
];

/*
  url bilgimizi her zaman global yerde tutmak isteriz, çünkü birden fazla yerde 
  bu endpoint/ url bilgisine erişmek isteyebilriz.
*/
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");

/*
Hataları loglamak için kullanılır, api'ler yardımı ile loglayabiliriz,
bu logları monitör edebilmek için hataları loglamamız gereklidir.
*/
const errorLogger = (error) => {
  console.log({ error });
};

const renderTodos = () => {
  
  // fetch(todosUrl).then(resp => { // response nesnesi
  //   console.log(resp)
  // })

  // todoları listele
  const ul = document.createElement("ul");
  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.id} ${item.title} ${item.userId}`;
    ul.appendChild(li);
  }

  // todoları api'lerden al
  fetch(todosUrl)
    .then(resp => resp.json())
    .then((todos = []) => {
      todos.forEach(item => {
        renderItem(item);
      });
      root.appendChild(ul);
    })
    .catch(error => {
      errorLogger(error);
    });
};
/*
  yani json placeholderdan bir requestimiz oldu bize yine response döndü json placeholder apileri
*/
renderTodos();
/*
  fetch() methodu: apiler ile haberleşmemizi sağlayan native olarak browserımızın 
  bize sunmuş olduğu bir metotdur.
  fetch() metodu yardımı ile apiler ile haberleşebiliriz.
  json - text datalar alabiliriz, ya da bu dataları apilere gönderebiliriz. 
  browaerın kendi özelliği olarak eklendi.
  * asenkron çalışır.
*/

