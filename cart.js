document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cart-items-list");
  const cartTotal = document.getElementById("cart-total");
  const summarySubtotal = document.getElementById("summary-subtotal");
  const summaryTotal = document.getElementById("summary-total");
  const summaryTotalItems = document.getElementById("summary-total-items");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsList.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
      cartItemsList.innerHTML = "<p>🛒 عربة الشراء فارغة</p>";
      cartTotal.innerHTML = "";
      summarySubtotal.textContent = "0 ر.س";
      summaryTotal.textContent = "0 ر.س";
      summaryTotalItems.textContent = "0 صنف";
      return;
    }

    cart.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";

      itemDiv.innerHTML = `
        <div class="product-name-sm">${item.name}</div>
        <div class="product-qty-sm">
          <input type="number" value="${item.quantity}" data-id="${item.id}" min="1" />
        </div>
        <div class="product-price-sm">${item.price} ر.س</div>
        <button class="remove-btn" data-id="${item.id}">❌</button>
      `;

      cartItemsList.appendChild(itemDiv);

      total += item.price * item.quantity;
      totalItems += item.quantity;
    });

    cartTotal.innerHTML = `<p><strong>💵 الإجمالي:</strong> ${total} ر.س</p>`;
    summarySubtotal.textContent = `${total} ر.س`;
    summaryTotal.textContent = `${total} ر.س`;
    summaryTotalItems.textContent = `${totalItems} صنف`;
  }

  renderCart();

  cartItemsList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const id = e.target.dataset.id;
      const updatedCart = cart.filter(item => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      location.reload();
    }
  });

  cartItemsList.addEventListener("input", function (e) {
    if (e.target.type === "number") {
      const id = e.target.dataset.id;
      const newQty = parseInt(e.target.value);
      const item = cart.find(i => i.id === id);
      if (item && newQty > 0) {
        item.quantity = newQty;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  });
});
