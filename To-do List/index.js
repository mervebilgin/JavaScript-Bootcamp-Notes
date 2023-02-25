const data = [
  { name: "bilge", age: 24, gender: "kadın" },
  { name: "hamza", age: 15, gender: "erkek" },
  { name: "evin", age: 20, gender: "kadın" },
  { name: "zeliha", age: 18, gender: "kadın" },
];

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");

const errorLogger = (error) => {
  console.log({ error });
};

const renderTodos = () => {
  const ul = document.createElement("ul");
  const renderItem = (item) => {
    const li = document.createElement("li");
    li.innerText = `${item.id} ${item.title} ${item.userId}`;
    ul.appendChild(li);
  };

  fetch(todosUrl)
    .then((resp) => resp.json())
    .then((todos = []) => {
      todos.forEach((item) => {
        renderItem(item);
      });
      root.appendChild(ul);
    })
    .catch((error) => {
      errorLogger(error);
    });
};

renderTodos();
