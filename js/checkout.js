const cartItemsUl = document.querySelector("ul#cart-items");
const btnPlaceOrder = document.querySelector("#placeOrderButton");

Storage.getCart().forEach(item => {
    console.log(item)
    const cartItem = `
        <li class="item">
        <div class="thumbnail object-cover">
            <img src="${item.image}" alt="">
        </div>
        <div class="item-content">
            <p>${item.title}</p>
            <span class="price">
                <span>$${item.price}</span>
            <span>x${item.amount}</span>
            </span>
        </div>
    </li>
    `;
    cartItemsUl.innerHTML += cartItem;
});

btnPlaceOrder.addEventListener("click",(e)=>{
    alert("Order is placed");
    Storage.saveCart([]);
    window.location.href = "home1.html";
})