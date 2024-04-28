document.addEventListener("DOMContentLoaded", function() {
    let productContainer = document.getElementById("product-container");
  
    async function fetchAll() {
      try {
        let res = await fetch("https://fakestoreapi.com/products/");
        
        let data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  
    async function displayProducts() {
      try {
        let data = await fetchAll();
        let card = "";
        data.forEach((val) => {
          card += `
            <div class="productCard">
              <img src="${val.image}" alt="">
              <h3>${val.title}</h3>
              <p>$${val.price}</p>
            </div>
          `;
        });
        productContainer.innerHTML = card;
      } catch (error) {
        console.log(error);
      }
    }
  
    displayProducts();
  });
  