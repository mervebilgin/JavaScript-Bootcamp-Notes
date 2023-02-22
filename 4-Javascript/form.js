// index.html de oluşturulan tüm kodlara dom elementi(querySelector) sayesinde erişebiliyoruz
const form = document.querySelector("#contact");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const contactForm = event.currentTarget;
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    console.log({ name, phone, message });
    // BE ye formu gönderdim
    // response eğer true
    const response = true;
    if (response) {
      contactForm.reset();
      alert("Talebiniz başarıyla alındı");
    }
  });
}

/*
  debugger:
  browserda debuggerin ilevi iptal edilmediği sürece 4. satırda form subnit olduğunda durcak.
*/ 

