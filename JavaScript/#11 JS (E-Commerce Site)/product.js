const productImage = document.querySelector('.product-image');
const productCategory = document.querySelector('.product-category');
const productTitle = document.querySelector('.product-title');
const productPrice = document.querySelector('.product-price');
const productDescription = document.querySelector('.product-description');
const spinner = document.querySelector('.spinner');

const getProductData = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get('id');

  try {
    const serverResponse = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await serverResponse.json();
    const product = data;

    spinner.style.display = 'none';

    productCategory.innerText = product.category;
    productImage.style.backgroundImage = `url(${product.image})`;
    productCategory.style.display = 'block';
    productTitle.innerText = product.title;
    productPrice.innerText = `$${product.price}`;
    productDescription.innerText = product.description;
  } catch (error) {
    window.location.replace('http://127.0.0.1:5502/404.html');
  }
};
getProductData();
