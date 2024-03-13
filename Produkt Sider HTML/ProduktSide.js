function showProduct(productId) {
  const productData = getProductData(productId);

  // Update product information
  document.getElementById("product-name").innerText = productData.name;
  document.getElementById("product-description").innerText =
    productData.description;
  document.getElementById("product-price").innerText = productData.price;

  // Update product image
  document.getElementById("product-image").src = productData.image;
}

function getProductData(productId) {
  // You can fetch product data from an API, database, or hardcode it here
  // For simplicity, let's hardcode some sample product data
  const products = {
    product1: {
      name: "Product 1",
      description: "Description of Product 1",
      price: "$10",
      image: "product1-image.jpg",
    },
    product2: {
      name: "Product 2",
      description: "Description of Product 2",
      price: "$20",
      image: "product2-image.jpg",
    },
    // Add more products as needed
  };

  return products[productId];
}

document
  .getElementById("product1-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    showProduct("product1"); // Call showProduct function with productId "product1"
  });

document
  .getElementById("product2-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    showProduct("product2"); // Call showProduct function with productId "product2"
  });

// Add more event listeners for other product links as needed

// Initially display the first product
showProduct("product1");
