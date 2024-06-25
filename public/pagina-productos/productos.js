document.addEventListener('DOMContentLoaded', () => {
    fetch('/productos')
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('productos-contenedor-cards');
        products.forEach(product => {
          const article = document.createElement('article');
          article.innerHTML = `
            <img src="./assets/carrito.jpg" alt="producto1">
            <h2>${product.nombre}</h2>
            <p>${product.precio}$</p>
          `;
          container.appendChild(article);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });