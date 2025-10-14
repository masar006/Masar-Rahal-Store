document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.checkout-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postal = document.getElementById('postal').value.trim();

    if (!name || !phone || !address || !city) {
      alert('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    const customerData = {
      name,
      phone,
      email,
      address,
      city,
      postal,
      shipping: form.querySelector('input[name="shipping"]:checked')?.nextSibling.textContent.trim(),
      payment: form.querySelector('input[name="payment"]:checked')?.nextSibling.textContent.trim()
    };

    localStorage.setItem('masar_customer', JSON.stringify(customerData));

    alert('✅ تم تأكيد الطلب بنجاح! شكراً لتسوقك معنا.');

    window.location.href = 'thankyou.html';
  });
});
