document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');

    // Exemple de données - remplacez ceci par vos données réelles depuis une base de données ou une API
    const books = [
        { id: 1, title: 'Bonne année', price: 39.99 },
        { id: 2, title: 'The Pragmatic Programmer', price: 49.99 },
    ];

    // Afficher les produits sur la page
    books.forEach(book => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-md-4', 'mb-4');

        productElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price.toFixed(2)} Frcfa</p>
                    <button class="btn btn-primary" onclick="addToCart(${book.id})">ACHETER</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    // Gérer l'ajout du produit au panier
    console.log(`Added product with ID ${productId} to cart`);
}