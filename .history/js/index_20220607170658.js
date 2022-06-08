// ITERATION 1

function updateSubtotal(products) {
  debugger;
  let totalELement = document.querySelector('#total-value span');
  let totalValue = 0;
  for (const iterator of products) {
    let priceElement = iterator.querySelector('.price span');

    let price = Number(priceElement.innerText);

    let quantityElement = iterator.querySelector('.quantity input');

    let quantity = Number(quantityElement.value);

    let subtotal = price * quantity;
    let subtotalElement = iterator.querySelector('.subtotal span');

    subtotalElement.innerText = subtotal;
    totalValue = totalValue + subtotal;
    totalELement.innerText = totalValue;
  }
  return totalValue;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multipleProduct = document.getElementsByClassName('product');
  console.log(multipleProduct);
  updateSubtotal(multipleProduct);
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
  const removeProductsBtn = document.getElementsByClassName('btn-remove');
  console.log(removeProductsBtn);
  for (const iterator of removeProductsBtn) {
    iterator.addEventListener('click', removeProduct;
  }

  //... your code goes here
});
