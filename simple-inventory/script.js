let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
  const product = document.getElementById("product").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);

  if (product === "" || price <= 0 || quantity <= 0) {
    alert("Please enter valid product details.");
    return;
  }

  products.push({
    product: product,
    price: price,
    quantity: quantity
  });

  saveProducts();

  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";

  displayProducts();
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML =
      "<td>" + item.product + "</td>" +
      "<td>₱" + item.price.toFixed(2) + "</td>" +
      "<td>" + item.quantity + "</td>" +
      '<td><button class="delete" onclick="deleteProduct(' + index + ')">Delete</button></td>';

    list.appendChild(row);
  });
}

displayProducts();