document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".checkout-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const postal = document.getElementById("postal").value.trim();

    if (!name || !address || !phone || !email || !city || !postal) {
      alert("الرجاء ملء جميع الحقول");
      return;
    }

    const customerDetail = {
      name,
      address,
      phone,
      email,
      city,
      postal,
      shipping: form.querySelector('input[name=shipping]:checked')?.nextSibling?.textContent?.trim() || '',
      payment: form.querySelector('input[name=payment]:checked')?.nextSibling?.textContent?.trim() || ''
    };

    localStorage.setItem("nasar_customer", JSON.stringify(customerDetail));

    alert("🎉 شكرًا لك على شرائك منّا!");
    window.location.href = "thankyou.html";
  });
});
