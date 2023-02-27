// tüm syafaları common.js e import edelim, yazılan html klasöründeki kodların tekrarını önlemek için

// console.log("common.js") // common.js consolda gözükür, dolayısıyla common.js i kullanabiliriz

// Amacımız common.js te html deki navbarı yönetebilmek

const renderHeader = ({ activePage = "index.html" }) => {
  //activePage: bir tane obje içerisinde property gelecek, defaultu index.html
  // Arrow bir method

  // templatemiz string bir template olacak, html imizi o kısma yazacaz
  // backtick in içine yazacaz, çünkü tüm kod satırını stringleştirme işlemi yapabiliyor olacaz
  const template = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">To-Do List</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link ${
            activePage.includes("index.html") ? "active" : ""
          }" href="index.html">Ana Sayfa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            activePage.includes("about.html") ? "active" : ""
          }" href="about.html">Hakkımızda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            activePage.includes("contact.html") ? "active" : ""
          }" href="contact.html">İletişim</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            activePage.includes("todos.html") ? "active" : ""
          }" href="todos.html">Yapılacaklar</a>
        </li>
      </ul>
        </div>
      </div>
    </nav>
    
    `;

  document.querySelector("#navbar").innerHTML = template; // templateyi document querySelector id si navbar olan inner html ine veriyoruz.
};

// common.js gloal olarak ortak kullanabileceğimiz kütüphane görevi görür
const errorLogger = (error) => {
  console.log({ error });
};

// ${activePage === "index.html" ? "active": ""} --> sayfaların aktif olup olmama durumunun sorgulanması
// -- index.html e eşitse active classına ekleyecek, değilse herhangi bir classa eklemesine gerek yok
// elimizde bir templatemiz var ve bunu dinamik olarak değiştirebiliyoruz
