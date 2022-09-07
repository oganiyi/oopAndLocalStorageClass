let cart = document.querySelector("#cart");

for (let i = 0; i < localStorage.length; i++) {
  cart.innerHTML += `
    <li>
        <div>${localStorage.key(i)}</div>
        <div>${localStorage.getItem(localStorage.key(i))}</div>
        <button onclick="removeCart(this)">Remove</button>
    
    </li>
    `;
}

function removeCart(x) {
  localStorage.removeItem(
    x.previousElementSibling.previousElementSibling.innerHTML
  );
  //   x.parentNode.remove();
  window.location.assign("cart.html");
}
