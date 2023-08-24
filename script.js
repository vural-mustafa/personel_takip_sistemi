$(document).ready(function() {
    const form = $("#personel-form");
    const progressBar = $("#progress-bar");
  
    form.on("submit", function(event) {
      event.preventDefault();
      const ad = $("#ad").val();
      const soyad = $("#soyad").val();
      
      // Burada personel kaydını veritabanına göndermek gibi işlemleri yapabilirsiniz.
      // Şu an sadece ilerleme çubuğunu simüle ediyoruz.
      
      let progress = 0;
      const interval = setInterval(function() {
        progress += 10;
        progressBar.width(progress + "%");
        if (progress >= 100) {
          clearInterval(interval);
          form[0].reset();
          progressBar.width("0%");
          alert("Personel kaydı tamamlandı!");
        }
      }, 500);
    });
  });
  