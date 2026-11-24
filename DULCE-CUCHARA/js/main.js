
/* =================================
   DULCE CUCHARA - ARCHIVO PRINCIPAL
================================= */

// Construir encabezado
function cargarHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    header.innerHTML = `
        <div class="header">

            <a href="index.html" class="logo">
                Dulce <span>Cuchara.</span>
            </a>

            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="pages/catalogo.html">Catálogo</a></li>
                    <li><a href="pages/pedido.html">Mi pedido</a></li>
                    <li><a href="pages/login.html">Administración</a></li>
                    <li>
                        <a href="pages/catalogo.html" class="nav-button">
                            Ordenar ahora
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    `;
}

// Construir pie de página
function cargarFooter() {

    const footer = document.getElementById("footer");

    if (!footer) return;

    footer.innerHTML = `
        <div class="footer">
            <h2>Dulce Cuchara</h2>
            <p>Pequeños antojos, grandes momentos.</p>
            <p>© 2026 Dulce Cuchara. Todos los derechos reservados.</p>
        </div>
    `;
}

// Mostrar productos destacados
function cargarDestacados() {

    const contenedor = document.getElementById("featured-products");

    if (!contenedor || typeof productos === "undefined") return;

    const destacados = productos.filter(producto =>
        producto.destacado && producto.disponible
    );

    contenedor.innerHTML = destacados.map(producto => `
        <article class="product-card">

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                loading="lazy"
            >

            <div class="product-info">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <span class="product-price">
                    ${producto.precio.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        maximumFractionDigits: 0
                    })}
                </span>

            </div>

        </article>
    `).join("");
}

// Inicializar página
document.addEventListener("DOMContentLoaded", () => {

    cargarHeader();

    cargarFooter();

    cargarDestacados();

    console.log("Dulce Cuchara está funcionando correctamente 🍰");

});
