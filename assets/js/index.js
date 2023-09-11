document.addEventListener("DOMContentLoaded", function () {
    const listaProductos = document.getElementById("product_list");

    const data = [
        {
            "product_id": "1",
            "product_name": "Pantalón verde de mezclilla",
            "product_description": "Pantalón verde de mezclilla",
            "product_price": "500",
            "product_image": "assets/pantalon1.png",
            "product_material": "Mezclilla",
            "product_size": "32",
            "product_color": "Verde"
        },
        {
            "product_id": "2",
            "product_name": "Pantalón negro de mezclilla",
            "product_description": "Pantalón negro de mezclilla",
            "product_price": "100.000",
            "product_image": "assets/pantalon2.png",
            "product_material": "Mezclilla",
            "product_size": "34",
            "product_color": "Negro"
        },
        {
            "product_id": "2",
            "product_name": "Pantalón negro de mezclilla",
            "product_description": "Pantalón negro de mezclilla",
            "product_price": "100.000",
            "product_image": "assets/pantalon2.png",
            "product_material": "Mezclilla",
            "product_size": "34",
            "product_color": "Negro"
        }
    ];

    let products = '';
    data.forEach(product => {
        const li = document.createElement("li");
        products += `<section id="${product.id_product}" class="product product-background">
                <img src="${product.product_image}" alt="Esta es una imagen de un pantalón" width="200px" height="200px">
                <h2>${product.product_name}</h2>
                <p>${product.product_description}</p>
                <h3>Descripción del producto</h3>
                <ol>
                    <li>Color: ${product.color}</li>
                    <li>Talla: ${product.product_size}</li>
                    <li>Material: ${product.product_material}</li>
                    <li>Precio: $${product.product_price}</li>
                </ol>
                <a href="pages/product.html" target="_blank">Ver detalles</a>
            </section>`;
    });
    listaProductos.innerHTML = products;

});

document.addEventListener('scroll', function (){
    console.log('Hiciste scroll');
});