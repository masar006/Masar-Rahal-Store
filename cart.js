document.addEventListener('DOMContentLoaded', function () {
  const cartItemsList = document.querySelector('.cart-items-list');
  const summarySubtotal = document.querySelector('.summary-row span:nth-child(2)');
  const summaryTotal = document.querySelector('.total-row span:nth-child(2)');
  const summaryLabel = document.querySelector('.summary-row span:first-child');

  let cartItems = [
    {
      id: 1,
      name: 'بوكس السفر الخارجي',
      price: 499,
      quantity: 1,
      image: 'images/box-travel.jpeg'
    },
    {
      id: 2,
      name: 'حقيبة الإسعافات (صغير)',
      price: 120,
      quantity: 2,
      image: 'images/box-firstaid-s.jpeg'
    }
  ];

  function renderCart() {
    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
      cartItemsList.innerHTML = '<p style="text-align:center;">🛒 السلة فارغة حالياً</p>';
      summarySubtotal.textContent = '0 ر.س';
      summaryTotal.textContent = '0 ر.س';
      summaryLabel.textContent = 'المجموع الفرعي (0 منتجات)';
      return;
    }

    let subtotal = 0;
    let totalItems = 0;

    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
      totalItems += item.quantity;

      const itemDiv = document.createElement('div');
      itemDiv.className = 'product-summary-item';
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <div class="product-name-sm">${item.name}</div>
          <div class="product-qty-sm">الكمية: 
            <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="qty-input" />
            <button data-id="${item.id}" class="remove-btn">❌</button>
          </div>
        </div>
      `;
      cartItemsList.appendChild(itemDiv);
    });

    summarySubtotal.textContent = `${