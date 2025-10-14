document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>السلة فارغة.</p>";
    cartTotal.innerHTML = "";
    return;
  }

  let total = 0;
  cartItems.innerHTML = cart
    .map(item => {
      total += item.price;
      return `<div class="cart-item">
        <strong>${item.name}</strong> - ${item.price} ر.س
      </div>`;
    })
    .join("");

  cartTotal.innerHTML = `<p><strong>الإجمالي:</strong> ${total} ر.س</p>`;
});
    summarySubtotal.textContent = `${
