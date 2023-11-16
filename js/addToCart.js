const productTitle = document.querySelector("#product-title");
const productPrice = document.querySelector("#product-price");
const productAmount = document.querySelector("#product-quantity");
const productImage = document.querySelector("#product-image");
const btnAddToCart = document.querySelector("#btn-add-to-cart");
const cartallTotal=document.querySelector('#total')
const clearall=document.querySelector('#clearall')
// '{"title":"king panel bed","price":12.99,"id":"2","image":"./images/product-2.jpeg","amount":1}'

const cartItem = {
  title: productTitle.innerText,
  price: parseFloat(productPrice.innerText.split("$")[1]),
  amount: parseInt(productAmount.value),
  image: productImage.src,
};

btnAddToCart.addEventListener("click", (e) => {
    let alreadyAdded = false;
  const cart = Storage.getCart().map((item) => {
    if (item.title === cartItem.title) {
      item.amount = parseInt(item.amount) + cartItem.amount;
      alreadyAdded = true;
      return item;
    } else {
      return item;
    }
  });
  if(!alreadyAdded){
    Storage.saveCart([cartItem, ...cart]);
  }else{
    Storage.saveCart(cart);
  }

  let tempTotal=0;
  let itemTotal=0;
  Storage.getCart().map(item=>{
      tempTotal+=item.price*item.amount;
      itemTotal+=item.amount;
  })
  cartTotal.innerText=parseFloat(tempTotal.toFixed(2))
  cartItems.innerText=itemTotal;
  console.log(cartTotal)
  cartallTotal.innerText=document.querySelector(".cart-total").innerText
  
  console.log(cartallTotal.innerHTML)
  console.log(document.querySelector(".cart-total").innerText)
  

//   btnAddToCart.disabled = true;
  console.log("Clicked");
 console.log( document.querySelectorAll(".cart-footer"));
});

console.log({ cartItem });

function increaseQuantity() {
    var quantityInput = document.getElementById("product-quantity");
    var currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
  }

function decreaseQuantity() {
    var quantityInput = document.getElementById("product-quantity");
    var currentQuantity = parseInt(quantityInput.value, 10);

    // Ensure the quantity does not go below 1
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

