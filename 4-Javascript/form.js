// index.html de oluşturulan tüm kodlara dom elementi(querySelector) sayesinde erişebiliyoruz
const form = document.querySelector("#contact");

if (form) {
  form.addEventListener("submit", function (event) {
    
    // preventDefault: buttona basıldıktıan sonra sayfayı freshleme
    event.preventDefault();
    const contactForm = event.currentTarget;
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    console.log({ name, phone, message });
    // formumun içerisndeki bütün bilgileri okuyup apilere (sunucu)-backend gönderebilirim
    // sunucu tarafı da bu apilerin bilgilerini kaydedebilir.
    
    // response eğer true// repone mizi backend servislerimizden alırız
    const response = true;
    if (response) {
      contactForm.reset();
      // mesjımız oluşturuluyor
      alert("Talebiniz başarıyla alındı");
    }
  });
}

/*
  debugger:
  browserda debuggerin işlevi iptal edilmediği sürece 4. satırda form subnit olduğunda durcak.
*/ 

