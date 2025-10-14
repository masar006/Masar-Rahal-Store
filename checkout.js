document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !address || !phone || !email) {
    alert("يرجى تعبئة جميع الحقول.");
    return;
  }

  alert("تم تأكيد الطلب! شكراً لتسوقك معنا.");
  window.location.href = "thankyou.html";
});
