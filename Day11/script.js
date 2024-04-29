document.addEventListener("DOMContentLoaded", function() {
    let productContainer = document.getElementById("product-container");
  
    async function fetchAll() {
      try {
        let res = await fetch("http://localhost:3000/products");
        
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
              <img src="${val.src}" alt="">
              <h3>${val.title}</h3>
              <p>$${val.price}</p>
              <p>Rating ${val.ratings}</p>
              <button onclick="addToCart(${val.id})">Add To Cart</button>
              <button onclick="delFromCart(${val.id})">Delete From Cart</button>
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
  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (loggedInUser) {
    document.getElementById('usernameDisplay').textContent = ` ${loggedInUser.userName}`;
  }

async function addToCart(id){
    let res = await fetch(`http://localhost:3000/products/${id}`)
    let resData = await res.json()

    fetch(`http://localhost:3000/allUsersCart/[${loggedInUser.userName}]`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resData)
    })
}
