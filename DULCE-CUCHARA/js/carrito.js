
/* ==========================================
   DULCE CUCHARA
   GESTIÓN DEL CARRITO
========================================== */

// Obtener el carrito guardado
function obtenerCarrito() {

    return JSON.parse(
        localStorage.getItem("carritoDulceCuchara")
    ) || [];

}

// Guardar el carrito
function guardarCarrito(carrito) {

    localStorage.setItem(
        "carritoDulceCuchara",
        JSON.stringify(carrito)
    );

}

// Agregar un producto

function agregarAlCarrito(idProducto) {

    // Asegurar que el ID sea un número
    idProducto = Number(idProducto);

    const producto = productos.find(
        item => item.id === idProducto
    );

    if (!producto || !producto.disponible) {
        console.error("No se encontró el producto o no está disponible.");
        return;
    }

    const carrito = obtenerCarrito();

    const productoExistente = carrito.find(
        item => item.id === idProducto
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            id: producto.id,
            cantidad: 1
        });

    }

    guardarCarrito(carrito);

    console.log("Producto agregado:", producto.nombre);
    console.log("Contenido actual del carrito:", obtenerCarrito());
}

// Eliminar un producto
function eliminarDelCarrito(idProducto) {

    const carrito = obtenerCarrito();

    const nuevoCarrito = carrito.filter(
        item => item.id !== idProducto
    );

    guardarCarrito(nuevoCarrito);

}

// Cambiar cantidad
function actualizarCantidad(idProducto, cantidad) {

    const carrito = obtenerCarrito();

    const producto = carrito.find(
        item => item.id === idProducto
    );

    if (!producto) return;

    if (cantidad <= 0) {

        eliminarDelCarrito(idProducto);

        return;

    }

    producto.cantidad = cantidad;

    guardarCarrito(carrito);

}

// Calcular total
function calcularTotal() {

    const carrito = obtenerCarrito();

    return carrito.reduce((total, item) => {

        const producto = productos.find(
            p => p.id === item.id
        );

        return total + (producto ? producto.precio * item.cantidad : 0);

    }, 0);

}
