// key
// setItem
// getItem
// removeItem
// clear

function aaa(x) {
  localStorage.setItem("kunle", x.innerHTML);
}

function addCart(x) {
  //   console.log(x.previousElementSibling.innerHTML);
  let sibling = x.previousElementSibling;
  localStorage.setItem(
    sibling.previousElementSibling.innerHTML,
    sibling.innerHTML
  );
}

// console.log(localStorage.key(1));
// console.log(localStorage.getItem("ade"));
// localStorage.removeItem("kunle");
// localStorage.clear();
