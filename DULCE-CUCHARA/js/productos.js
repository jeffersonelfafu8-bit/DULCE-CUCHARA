
/* ==========================================
   DULCE CUCHARA
   BASE DE DATOS INICIAL DE PRODUCTOS
========================================== */

const productos = [

    // ======================================
    // CATEGORÍA: CLÁSICOS
    // ======================================

    {
        id: 1,
        nombre: "Tiramisú",
        categoria: "clasicos",
        descripcion: "Delicioso postre italiano con café, bizcocho y crema de mascarpone.",
        ingredientes: ["Café", "Mascarpone", "Bizcocho", "Cacao"],
        alergenos: ["Lácteos", "Gluten", "Huevo"],
        tamano: "250 ml",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600",
        disponible: true,
        destacado: true
    },

    {
        id: 2,
        nombre: "Cheesecake de frutos rojos",
        categoria: "clasicos",
        descripcion: "Suave cheesecake con una deliciosa salsa artesanal de frutos rojos.",
        ingredientes: ["Queso crema", "Fresas", "Arándanos", "Galleta"],
        alergenos: ["Lácteos", "Gluten"],
        tamano: "250 ml",
        precio: 14000,
        imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",
        disponible: true,
        destacado: true
    },

    {
        id: 3,
        nombre: "Tres leches en vaso",
        categoria: "clasicos",
        descripcion: "Bizcocho esponjoso bañado en una mezcla de tres leches.",
        ingredientes: ["Leche", "Crema de leche", "Leche condensada", "Bizcocho"],
        alergenos: ["Lácteos", "Gluten", "Huevo"],
        tamano: "250 ml",
        precio: 11000,
        imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
        disponible: true,
        destacado: false
    },

    // ======================================
    // CATEGORÍA: TRADICIONALES
    // ======================================

    {
        id: 4,
        nombre: "Arroz con leche",
        categoria: "tradicionales",
        descripcion: "Receta tradicional cremosa con un toque de canela.",
        ingredientes: ["Arroz", "Leche", "Canela", "Azúcar"],
        alergenos: ["Lácteos"],
        tamano: "250 ml",
        precio: 9000,
        imagen: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600",
        disponible: true,
        destacado: false
    },

    {
        id: 5,
        nombre: "Natilla",
        categoria: "tradicionales",
        descripcion: "Deliciosa natilla colombiana con textura suave y cremosa.",
        ingredientes: ["Leche", "Maicena", "Canela", "Panela"],
        alergenos: ["Lácteos"],
        tamano: "250 ml",
        precio: 9500,
        imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
        disponible: true,
        destacado: false
    },

    {
        id: 6,
        nombre: "Postre de natas",
        categoria: "tradicionales",
        descripcion: "Postre casero de natas con una preparación dulce y delicada.",
        ingredientes: ["Natas", "Leche", "Azúcar", "Yemas de huevo"],
        alergenos: ["Lácteos", "Huevo"],
        tamano: "250 ml",
        precio: 13000,
        imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600",
        disponible: true,
        destacado: false
    },

    // ======================================
    // CATEGORÍA: FRUTALES
    // ======================================

    {
        id: 7,
        nombre: "Mousse de maracuyá",
        categoria: "frutales",
        descripcion: "Mousse suave y refrescante con el sabor tropical del maracuyá.",
        ingredientes: ["Maracuyá", "Crema de leche", "Leche condensada"],
        alergenos: ["Lácteos"],
        tamano: "250 ml",
        precio: 11000,
        imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
        disponible: true,
        destacado: true
    },

    {
        id: 8,
        nombre: "Postre de mango",
        categoria: "frutales",
        descripcion: "Postre cremoso elaborado con mango natural.",
        ingredientes: ["Mango", "Crema de leche", "Leche condensada"],
        alergenos: ["Lácteos"],
        tamano: "250 ml",
        precio: 11000,
        imagen: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600",
        disponible: true,
        destacado: false
    },

    {
        id: 9,
        nombre: "Fresas con crema",
        categoria: "frutales",
        descripcion: "Fresas frescas acompañadas de una deliciosa crema dulce.",
        ingredientes: ["Fresas", "Crema de leche", "Leche condensada"],
        alergenos: ["Lácteos"],
        tamano: "250 ml",
        precio: 12000,
        imagen: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600",
        disponible: true,
        destacado: true
    },

    // ======================================
    // CATEGORÍA: ESPECIALES
    // ======================================

    {
        id: 10,
        nombre: "Brownie en vaso",
        categoria: "especiales",
        descripcion: "Capas de brownie de chocolate con una textura húmeda y deliciosa.",
        ingredientes: ["Chocolate", "Harina", "Mantequilla", "Huevo"],
        alergenos: ["Gluten", "Lácteos", "Huevo"],
        tamano: "250 ml",
        precio: 13000,
        imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
        disponible: true,
        destacado: true
    },

    {
        id: 11,
        nombre: "Postre de Oreo",
        categoria: "especiales",
        descripcion: "Postre cremoso con capas de galleta Oreo y crema.",
        ingredientes: ["Galletas Oreo", "Crema de leche", "Queso crema"],
        alergenos: ["Lácteos", "Gluten"],
        tamano: "250 ml",
        precio: 13000,
        imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
        disponible: true,
        destacado: false
    },

    {
        id: 12,
        nombre: "Postre sin azúcar añadida",
        categoria: "especiales",
        descripcion: "Alternativa de postre sin azúcar añadida. Consulta sus ingredientes.",
        ingredientes: ["Según preparación del día"],
        alergenos: ["Consultar según preparación"],
        tamano: "250 ml",
        precio: 14000,
        imagen: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600",
        disponible: true,
        destacado: false
    }

];
