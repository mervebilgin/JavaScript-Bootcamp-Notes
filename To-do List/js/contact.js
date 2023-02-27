renderHeader({ activePage: "contact.html" });

const root = document.querySelector("#root");

const renderContactForm = function () {
  const form = document.createElement("form"); // form oluşturuyoruz
  const template = `
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email</label>
    <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Mesaj</label>
    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="mb-3">
  <button type="submit" class="btn btn-primary">Gönder</button>
  </div>
  `;
  form.innerHTML = template;
  root.appendChild(form);
};
