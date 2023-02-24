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
  { name: "hamza", age: 15, gender: "erkek"},
  { name: "evin", age: 20, gender: "kadın" },
  { name: "zeliha", age: 18, gender: "kadın" }
];

/*
  url bilgimizi her zaman global yerde tutmak isteriz, çünkü birden fazla yerde 
  bu endpoint/ url bilgisine erişmek isteyebilriz.
*/
const todosUrl = "https://jsonplaceholder.typicode.com/todos"
const root = document.querySelector("#root");

const errorLogger = (error) => {
  console.log({error});
}

