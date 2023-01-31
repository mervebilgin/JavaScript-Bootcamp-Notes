/*
DOM: Document Object Model
JavaScript tarafında HTML elementlerimize ulaşmamızı sağlayan DOMdur.

>> innerText, innerHTML hangi durumlarda kullanılır?

####
<div id="box">
  <p>
    <b>JavaScript</b>
  </p>
</div> 
 
<script> 
  let word = document.querySelector("#box").innerText;
  console.log(word);
</script>
####

  innerText ile div etiketinin içerisindeki metin alındı. Dikkat edilirse burada sadece metni alabiliyoruz. 
  Eğer div’in içerisindeki metni p etiketi ile birlikte almak istiyorsak innerHtml özelliğini kullanılmalıdır.
*/
