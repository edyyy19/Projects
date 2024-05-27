const cartIcon = document.querySelector('.navbar-cart-icon');
const sidebarContainer = document.querySelector('.sidebar-container');
const overlay = document.querySelector('.overlay');

// ================================== SIDEBAR =================================================
// ============= OPEN SIDEBAR =============
const openSidebar = () => {
  sidebarContainer.style.transform = 'translateX(0)';
  overlay.style.display = 'block';
};
cartIcon.addEventListener('click', openSidebar);

// ============= CLOSE SIDEBAR =============
const closeSiderbar = () => {
  sidebarContainer.style.transform = 'translateX(100%)';
  overlay.style.display = 'none';
};
overlay.addEventListener('click', closeSiderbar);

// ================================== FILTER =================================================
// ============= OPEN FILTER =============
const filterContainer = document.querySelector('.filter-container');
const filterButton = document.querySelector('.close-open-filter');
const chevroneIcon = document.querySelector('.chevrone');

const openFilter = () => {
  filterContainer.style.transform = 'translateX(0)';
  overlay.style.display = 'block';
  chevroneIcon.style.backgroundImage = 'url(images/chevron-left-solid.svg)';
};

// ============= CLOSE FILTER =============
const closeFilter = () => {
  filterContainer.style.transform = 'translateX(-81%)';
  overlay.style.display = 'none';
  chevroneIcon.style.backgroundImage = 'url(images/chevron-right-solid.svg)';
};
overlay.addEventListener('click', closeFilter);

let open = false;
const toggleFilterContainer = () => {
  if (!open) {
    openFilter();
  } else {
    closeFilter();
  }
  open = !open;
};
filterButton.addEventListener('click', toggleFilterContainer);
// ================================== CARDS =================================================
// ============= GENERATE CARDS =============
const productsSection = document.querySelector('.product-cards-container');
const cartProductsSection = document.querySelector('.cart-products-container');

const generateProductCards = (products) => {
  products.forEach((product) => {
    const productCardContainer = document.createElement('div');
    productCardContainer.classList.add('product-card');

    productCardContainer.innerHTML = `

    <a href="/product.html?id=${product.id}" class="product-card-image" style="background-image: url('${product.image}')"></a>
    <div class="product-card-details">
    <a href="/product.html?id=${product.id}"> 
      <span class="product-title">${product.title}</span>
      </a>
      <span class="product-description"
        >${product.description}</span
      >
      </div>
      <div class="product-priceNbtn">
      <span class="product-price">$${product.price}</span>
    <button class="product-card-button">Add to cart</button>
    </div>
    `;

    productsSection.appendChild(productCardContainer);
    // ========= Add to cart button
    const addToCartButton = productCardContainer.querySelector(
      '.product-card-button'
    );

    addToCartButton.addEventListener('click', () => {
      const productData = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      };
      addToCart(productData);
    });
  });
};

const createProductCards = async () => {
  const serverResponse = await fetch('https://fakestoreapi.com/products');
  const products = await serverResponse.json();

  generateProductCards(products);

  spinner.style.display = 'none';
};
createProductCards();

let cartProducts = [];

const cartTotal = document.querySelector('.sidebar-total');
const updateSidebarProducts = () => {
  // Calculare si update total
  let total = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    total += cartProducts[i].price * cartProducts[i].quantity;
  }
  cartTotal.innerText = `Total: $${parseFloat(total).toFixed(2)}`;
  cartProductsSection.innerHTML = '';

  cartProducts.forEach((cartProduct) => {
    const cartProductContainer = document.createElement('div');
    cartProductContainer.classList.add('cart-product-container');

    cartProductContainer.innerHTML = `
    
    <div class="cart-product-details">
    <span class="sidebar-product-name">${cartProduct.title}</span>
    <div class="cart-product-price-container">
    <span>Price: $${cartProduct.price}</span>
    <span>Total: $${parseFloat(
      cartProduct.price * cartProduct.quantity
    ).toFixed(2)}</span>
    </div>
    <div class="cart-product-buttons-container">
    <button class="cart-minus-button">-</button>
    <span>${cartProduct.quantity}</span>
    <button class="cart-plus-button">+</button>
  
    </div>
    </div>
    <div class="cart-product-image" style="background-image: url('${
      cartProduct.image
    }')"></div>
    
    
    `;
    console.log(cartProductContainer);
    cartProductsSection.appendChild(cartProductContainer);

    // Plus Button
    const cartPlusButton =
      cartProductContainer.querySelector('.cart-plus-button');

    cartPlusButton.addEventListener('click', () => {
      const productData = {
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
        image: cartProduct.image,
      };
      addToCart(productData);
    });
    // Minus Button
    cartMinusButton = cartProductContainer.querySelector('.cart-minus-button');

    cartMinusButton.addEventListener('click', () => {
      const productData = {
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
        image: cartProduct.image,
      };
      removeFromCart(productData);
    });
  });
};

const noItemInCart = document.querySelector('.sidebar-items');

// ======= Add to cart function
const addToCart = (product) => {
  const productIndex = cartProducts.findIndex(
    (cartProduct) => cartProduct.id === product.id
  );

  if (productIndex === -1) {
    const productsData = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    cartProducts.push(productsData);
  } else {
    cartProducts[productIndex].quantity =
      cartProducts[productIndex].quantity + 1;
  }

  console.log('after', cartProducts);

  updateSidebarProducts();

  noItemInCart.style.display = 'none';
};

// ======= Remove from cart function
const removeFromCart = (product) => {
  const productIndex = cartProducts.findIndex(
    (cartProduct) => cartProduct.id === product.id
  );
  const productQuantity = cartProducts[productIndex].quantity;

  if (productQuantity === 1) {
    cartProducts.splice(productIndex, 1);
  } else {
    cartProducts[productIndex].quantity = productQuantity - 1;
  }
  updateSidebarProducts();

  if (cartProducts.length === 0) {
    noItemInCart.style.display = 'block';
  }
};
// ======= Plus/Minus functions

// =
// =
// =
// =
// =
// =
// =
// =
// =

// ================================== SELECT CATEGORY =================================================
// ============= FILTER CATEGORY =============
const selectOptions = document.getElementById('options-filter');
const allOptions = document.querySelector('[value="all"]');
const spinner = document.querySelector('.spinner');

const selectedCategory = async (e) => {
  // ternery operator " ? "
  const url =
    selectOptions.value === 'all'
      ? 'https://fakestoreapi.com/products/'
      : `https://fakestoreapi.com/products/category/${e.target.value}`;

  const serverResponse = await fetch(url);
  const products = await serverResponse.json();

  productsSection.innerHTML = '';

  generateProductCards(products);
  spinner.style.display = 'none';
};

selectOptions.addEventListener('change', selectedCategory);
