// ITERATION 1

function updateSubtotal(product) {
  let priceElement = product.querySelector('.price span');

  let price = Number(priceElement.innerText);

  let quantityElement = product.querySelector('.quantity input');

  let quantity = Number(quantityElement.value);

  let subtotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerText = subtotal;
  return subtotalElement.innerText;
  //... your code goes here
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.getElementsByClassName('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
