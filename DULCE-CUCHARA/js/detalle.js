
/* ==========================================
   DULCE CUCHARA
   DETALLE DE PRODUCTOS
========================================== */

const contenedorDetalle = document.getElementById("detalle-producto");

// Obtener el ID del producto desde la URL
const parametros = new URLSearchParams(window.location.search);
const idProducto = Number(parametros.get("id"));

// Buscar el producto
const producto = productos.find(
    item => item.id === idProducto
);

// Formatear precio
function precioDetalle(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

// Mostrar el detalle
function mostrarDetalle() {

    if (!producto) {
        contenedorDetalle.innerHTML = `
            <div class="detalle-no-encontrado">
                <h2>Producto no encontrado</h2>
                <p>El postre que buscas no está disponible.</p>
                <a href="catalogo.html">Volver al catálogo</a>
            </div>
        `;
        return;
    }

    contenedorDetalle.innerHTML = `
        <div class="detalle-imagen">
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>

        <div class="detalle-informacion">

            <span class="detalle-categoria">
                ${producto.categoria}
            </span>

            <h1>${producto.nombre}</h1>

            <p class="detalle-descripcion">
                ${producto.descripcion}
            </p>

            <h2 class="detalle-precio">
                ${precioDetalle(producto.precio)}
            </h2>

            <p><strong>Presentación:</strong> ${producto.tamano}</p>

            <div class="detalle-lista">
                <h3>Ingredientes</h3>
                <p>${producto.ingredientes.join(", ")}</p>
            </div>

            <div class="detalle-lista">
                <h3>Alérgenos</h3>
                <p>${producto.alergenos.join(", ")}</p>
            </div>

            <p class="detalle-disponibilidad">
                ${producto.disponible ? "Disponible para pedido" : "Actualmente agotado"}
            </p>

            <button
                type="button"
                id="btn-agregar-detalle"
                ${producto.disponible ? "" : "disabled"}
            >
                Agregar al pedido
            </button>

            <a href="catalogo.html" class="detalle-volver">
                ← Volver al catálogo
            </a>

        </div>
    `;

    const boton = document.getElementById("btn-agregar-detalle");

    if (boton) {
        boton.addEventListener("click", function() {
            agregarAlCarrito(producto.id);
            boton.textContent = "¡Agregado al pedido!";
        });
    }
}

mostrarDetalle();
