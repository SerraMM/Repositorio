// SE CARGAN LOS PRODUCTOS DESDE EL JSON
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    let categories = [];
    let brands = [];

    data.products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
      if (!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
    });

   
    categories.forEach((category) => {
      let option = document.createElement("option");
      option.value = category;
      option.text = category;
      document.getElementById("category").appendChild(option);
    });

  
    brands.forEach((brand) => {
      let option = document.createElement("option");
      option.value = brand;
      option.text = brand;
      document.getElementById("brand").appendChild(option);
    });

   
    document
      .querySelector('button[type="submit"]')
      .addEventListener("click", function (event) {
        event.preventDefault();

        let minPrice = document.getElementById("min-price").value;
        let category = document.getElementById("category").value;
        let brand = document.getElementById("brand").value;

        
        let filtarProductos = data.products.filter((product) => {
          return (
            product.price >= minPrice && product.category == category && product.brand == brand
          );
        });

        // SE AÑADE EL PRODUCTO FILTRADO EN RESULTADOS
        let imprimirResultados = document.getElementById("resultados");
        imprimirResultados.innerHTML = "";
        filtarProductos.forEach((product) => {
          let productCard = `
                    <div class="card">
                        <img src="${product.thumbnail}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Precio: $${product.price}</p>
                            <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Añadir al carrito</button>
                        </div>
                    </div>
                `;
          imprimirResultados.innerHTML += productCard;
        });

        // SE AÑADE AL CARRITO E IMPRIME EL NOMBRE, PRECIO Y CANTIDAD
        let aniadirAlcarrito= document.querySelectorAll(".add-to-cart");
        aniadirAlcarrito.forEach((button) => {
          button.addEventListener("click", function () {
            let productId = this.getAttribute("data-product-id");
            let product = data.products.find(
              (item) => item.id === parseInt(productId)
            );

            if (product) {
              let cartItem = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Precio: $${product.price}</p>
                        <p class="card-text">Cantidad: 1</p>
                    </div>
                </div>
            `;
              document.getElementById("carrito").innerHTML += cartItem;
              Swal.fire({
                title: "Exito!",
                text: "Has añadido al carrito el producto",
                icon: "success",
                confirmButtonText: "OK",
              });
            }else {
                Swal.fire({
                  title: "Lo siento",
                  text: "No quedan productos disponibles",
                  icon: "error",
                });
              }
            
          });
        });
      });
  })
  .catch((error) => console.error("Error al cargar productos:", error));
