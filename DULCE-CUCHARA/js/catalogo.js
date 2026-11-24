
/* ==========================================
   DULCE CUCHARA
   GESTIÓN DEL CATÁLOGO
========================================== */

// Formatear precios en pesos colombianos
function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

// Obtener los elementos HTML
const contenedorCatalogo = document.getElementById("catalogo-productos");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtro-categoria");

// Mostrar productos
function mostrarProductos(listaProductos) {

    if (!contenedorCatalogo) return;

    if (listaProductos.length === 0) {
        contenedorCatalogo.innerHTML = `
            <p class="sin-resultados">
                No encontramos postres con esos criterios.
            </p>
        `;
        return;
    }

    contenedorCatalogo.innerHTML = listaProductos.map(producto => `

        <article class="product-card">

            <a href="detalle.html?id=${producto.id}" class="product-link">
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >
            </a>

            <div class="product-info">

                <span class="product-category">
                    ${producto.categoria}
                </span>

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <p class="product-size">
                    Tamaño: ${producto.tamano}
                </p>

                <p class="product-price">
                    ${formatearPrecio(producto.precio)}
                </p>

                <button
                    class="btn-add"
                    data-id="${producto.id}"
                    ${!producto.disponible ? "disabled" : ""}
                >
                    ${producto.disponible ? "Agregar al pedido" : "Agotado"}
                </button>

                <a href="detalle.html?id=${producto.id}" class="detail-link">
                    Ver detalles
                </a>

            </div>

        </article>

    `).join("");
}

// Aplicar búsqueda y categoría
function filtrarProductos() {

    const texto = buscador.value.toLowerCase().trim();
    const categoria = filtroCategoria.value;

    const resultado = productos.filter(producto => {

        const coincideNombre =
            producto.nombre.toLowerCase().includes(texto);

        const coincideCategoria =
            categoria === "todos" || producto.categoria === categoria;

        return coincideNombre && coincideCategoria;
    });

    mostrarProductos(resultado);
}

// Escuchar cambios en el buscador
if (buscador) {
    buscador.addEventListener("input", filtrarProductos);
}

// Escuchar cambios en el filtro
if (filtroCategoria) {
    filtroCategoria.addEventListener("change", filtrarProductos);
}

// Leer la categoría enviada desde la página de inicio
const parametrosURL = new URLSearchParams(window.location.search);
const categoriaInicial = parametrosURL.get("categoria");

if (
    categoriaInicial &&
    ["clasicos", "tradicionales", "frutales", "especiales"].includes(categoriaInicial)
) {
    filtroCategoria.value = categoriaInicial;
}

// Mostrar catálogo inicial
mostrarProductos(
    productos.filter(producto => producto.disponible)
);

// Agregar productos al pedido
if (contenedorCatalogo) {

    contenedorCatalogo.addEventListener("click", function(evento) {

        const boton = evento.target.closest(".btn-add");

        if (!boton || boton.disabled) return;

        const idProducto = Number(boton.dataset.id);

        if (typeof agregarAlCarrito === "function") {
            agregarAlCarrito(idProducto);

            boton.textContent = "¡Agregado!";
            setTimeout(() => {
                boton.textContent = "Agregar al pedido";
            }, 1200);
        } else {
            alert("No se pudo conectar el carrito.");
        }

    });

}
