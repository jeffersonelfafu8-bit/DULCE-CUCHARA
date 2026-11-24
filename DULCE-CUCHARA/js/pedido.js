
/* ==========================================
   DULCE CUCHARA
   FUNCIONALIDAD DE LA PÁGINA DEL PEDIDO
========================================== */

// Configuración de WhatsApp.
// Más adelante colocaremos aquí el número del negocio.
const numeroWhatsApp = "";

const listaCarrito = document.getElementById("lista-carrito");
const cantidadProductos = document.getElementById("cantidad-productos");
const resumenCantidad = document.getElementById("resumen-cantidad");
const subtotalPedido = document.getElementById("subtotal-pedido");
const totalPedido = document.getElementById("total-pedido");
const botonWhatsApp = document.getElementById("btn-whatsapp");

// Formatear precios en pesos colombianos
function formatoPrecio(precio) {
    return precio.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    });
}

// Mostrar los productos del carrito
function mostrarCarrito() {

    const carrito = obtenerCarrito();

    const productosCarrito = carrito.map(item => {
        const producto = productos.find(p => p.id === item.id);

        if (!producto) return null;

        return {
            ...producto,
            cantidad: item.cantidad
        };
    }).filter(Boolean);

    const totalUnidades = productosCarrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );

    cantidadProductos.textContent =
        `${totalUnidades} ${totalUnidades === 1 ? "producto" : "productos"}`;

    resumenCantidad.textContent = totalUnidades;

    if (productosCarrito.length === 0) {

        listaCarrito.innerHTML = `
            <div class="carrito-vacio">
                <div class="carrito-icono">🍰</div>
                <h3>Tu carrito está vacío</h3>
                <p>¡Tenemos postres deliciosos esperándote!</p>
                <a href="catalogo.html" class="btn-ir-catalogo">
                    Explorar catálogo
                </a>
            </div>
        `;

        subtotalPedido.textContent = formatoPrecio(0);
        totalPedido.textContent = formatoPrecio(0);
        botonWhatsApp.disabled = true;
        botonWhatsApp.style.opacity = "0.5";

        return;
    }

    botonWhatsApp.disabled = false;
    botonWhatsApp.style.opacity = "1";

    listaCarrito.innerHTML = productosCarrito.map(producto => `
        <article class="producto-carrito">

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

            <div class="producto-carrito-info">
                <h3>${producto.nombre}</h3>

                <p>${producto.tamano}</p>

                <span class="producto-carrito-precio">
                    ${formatoPrecio(producto.precio)}
                </span>

                <div class="controles-cantidad">

                    <button
                        type="button"
                        data-accion="disminuir"
                        data-id="${producto.id}"
                        aria-label="Disminuir cantidad"
                    >−</button>

                    <span>${producto.cantidad}</span>

                    <button
                        type="button"
                        data-accion="aumentar"
                        data-id="${producto.id}"
                        aria-label="Aumentar cantidad"
                    >+</button>

                </div>

                <button
                    type="button"
                    class="btn-eliminar"
                    data-accion="eliminar"
                    data-id="${producto.id}"
                >
                    Eliminar
                </button>
            </div>

            <div class="producto-carrito-total">
                ${formatoPrecio(producto.precio * producto.cantidad)}
            </div>

        </article>
    `).join("");

    const total = calcularTotal();

    subtotalPedido.textContent = formatoPrecio(total);
    totalPedido.textContent = formatoPrecio(total);
}

// Detectar los clics en los controles del carrito
listaCarrito.addEventListener("click", function(event) {

    const boton = event.target.closest("button[data-accion]");

    if (!boton) return;

    const idProducto = Number(boton.dataset.id);
    const accion = boton.dataset.accion;
    const carrito = obtenerCarrito();

    const producto = carrito.find(item => item.id === idProducto);

    if (!producto) return;

    if (accion === "aumentar") {
        actualizarCantidad(idProducto, producto.cantidad + 1);
    }

    if (accion === "disminuir") {
        actualizarCantidad(idProducto, producto.cantidad - 1);
    }

    if (accion === "eliminar") {
        eliminarDelCarrito(idProducto);
    }

    mostrarCarrito();
});

// Preparar y enviar el pedido por WhatsApp
botonWhatsApp.addEventListener("click", function() {

    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    if (!numeroWhatsApp) {
        alert("Primero debemos configurar el número de WhatsApp del negocio en js/pedido.js.");
        return;
    }

    let mensaje = "¡Hola! Quiero realizar el siguiente pedido en Dulce Cuchara:\n\n";

    carrito.forEach(item => {

        const producto = productos.find(p => p.id === item.id);

        if (producto) {
            mensaje += `• ${producto.nombre}\n`;
            mensaje += `  Cantidad: ${item.cantidad}\n`;
            mensaje += `  Precio: ${formatoPrecio(producto.precio * item.cantidad)}\n\n`;
        }
    });

    mensaje += `Total de productos: ${carrito.reduce((total, item) => total + item.cantidad, 0)}\n`;
    mensaje += `TOTAL: ${formatoPrecio(calcularTotal())}\n\n`;
    mensaje += "Quedo pendiente de confirmar el domicilio. ¡Gracias!";

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
});

// Mostrar el carrito al entrar en la página
mostrarCarrito();
