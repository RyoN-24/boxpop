export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    category: "ropa" | "juguetes" | "panialeras" | "boxpop";
    ageRange: string;
    materials?: string;
    images: string[];
    inStock: boolean;
    featured?: boolean;
    badge?: string;
}

export const products: Product[] = [
    // Ropa de Bebé
    {
        id: "ropa-001",
        name: "Set Bodys Algodón Orgánico",
        description: "Pack de 3 bodys de algodón orgánico, súper suaves para la piel del bebé. Diseño con broches fáciles de abrir.",
        price: 89.90,
        category: "ropa",
        ageRange: "0-6 meses",
        materials: "100% Algodón Orgánico",
        images: ["/images/products/bodys-set.jpg"],
        inStock: true,
        featured: true,
        badge: "Más vendido"
    },
    {
        id: "ropa-002",
        name: "Pijama Enterizo Ositos",
        description: "Pijama enterizo con piecitos, estampado de ositos. Tela suave y abrigadora para noches cómodas.",
        price: 59.90,
        category: "ropa",
        ageRange: "3-12 meses",
        materials: "Algodón Pima",
        images: ["/images/products/pijama-ositos.jpg"],
        inStock: true,
    },
    {
        id: "ropa-003",
        name: "Conjunto Verano Marinero",
        description: "Conjunto de short y polo estilo marinero. Ideal para días cálidos y paseos al aire libre.",
        price: 69.90,
        category: "ropa",
        ageRange: "6-18 meses",
        materials: "Algodón 100%",
        images: ["/images/products/conjunto-marinero.jpg"],
        inStock: true,
    },
    {
        id: "ropa-004",
        name: "Vestido Florecitas Rosa",
        description: "Vestido con estampado floral y detalle de lazo. Perfecto para ocasiones especiales.",
        price: 79.90,
        category: "ropa",
        ageRange: "6-24 meses",
        materials: "Algodón y Poliéster",
        images: ["/images/products/vestido-flores.jpg"],
        inStock: true,
        featured: true,
    },

    // Juguetes Didácticos
    {
        id: "juguete-001",
        name: "Torre de Aros Arcoíris",
        description: "Clásica torre de aros de madera con colores vibrantes. Desarrolla coordinación y reconocimiento de colores.",
        price: 45.90,
        category: "juguetes",
        ageRange: "6-24 meses",
        materials: "Madera con pintura no tóxica",
        images: ["/images/products/torre-aros.jpg"],
        inStock: true,
        featured: true,
        badge: "Educativo"
    },
    {
        id: "juguete-002",
        name: "Bloques Suaves Sensoriales",
        description: "Set de 6 bloques suaves con texturas y sonidos diferentes. Estimulación sensorial temprana.",
        price: 55.90,
        category: "juguetes",
        ageRange: "0-12 meses",
        materials: "EVA y tela suave",
        images: ["/images/products/bloques-suaves.jpg"],
        inStock: true,
    },
    {
        id: "juguete-003",
        name: "Gimnasio de Actividades",
        description: "Gimnasio con arco de actividades, espejo seguro y juguetes colgantes. Estimula todos los sentidos.",
        price: 129.90,
        category: "juguetes",
        ageRange: "0-12 meses",
        materials: "Estructura de madera, accesorios de tela",
        images: ["/images/products/gimnasio.jpg"],
        inStock: true,
        featured: true,
    },
    {
        id: "juguete-004",
        name: "Libro de Tela Animales",
        description: "Libro de tela con páginas crujientes y texturas. Ideal para despertar el amor por los libros.",
        price: 35.90,
        category: "juguetes",
        ageRange: "0-18 meses",
        materials: "Tela y materiales sensoriales",
        images: ["/images/products/libro-tela.jpg"],
        inStock: true,
    },

    // Pañaleras y Maletines
    {
        id: "panialera-001",
        name: "Mochila Pañalera Premium",
        description: "Mochila multifuncional con bolsillos térmicos, cambiador portátil y compartimentos organizados.",
        price: 149.90,
        originalPrice: 179.90,
        category: "panialeras",
        ageRange: "Para padres",
        materials: "Nylon resistente al agua",
        images: ["/images/products/mochila-premium.jpg"],
        inStock: true,
        featured: true,
        badge: "Oferta"
    },
    {
        id: "panialera-002",
        name: "Bolso Maternal Elegante",
        description: "Bolso maternal amplio con diseño elegante. Incluye cambiador y bolsa para ropa sucia.",
        price: 119.90,
        category: "panialeras",
        ageRange: "Para padres",
        materials: "Cuero sintético de alta calidad",
        images: ["/images/products/bolso-maternal.jpg"],
        inStock: true,
    },
    {
        id: "panialera-003",
        name: "Organizador de Coche",
        description: "Organizador práctico para el coche del bebé. Múltiples bolsillos y fácil instalación.",
        price: 45.90,
        category: "panialeras",
        ageRange: "Para padres",
        materials: "Nylon y malla transpirable",
        images: ["/images/products/organizador-coche.jpg"],
        inStock: true,
    },
];

export const categories = [
    {
        id: "ropa",
        name: "Ropa de Bebé",
        description: "Prendas suaves y cómodas",
        icon: "👶",
        color: "secondary",
    },
    {
        id: "juguetes",
        name: "Juguetes Didácticos",
        description: "Aprender jugando",
        icon: "🧸",
        color: "accent",
    },
    {
        id: "panialeras",
        name: "Pañaleras y Maletines",
        description: "Para padres organizados",
        icon: "🎒",
        color: "primary",
    },
    {
        id: "boxpop",
        name: "Box Pop",
        description: "Packs curados por edad",
        icon: "📦",
        color: "coral",
    },
];

export function getProductsByCategory(category: string): Product[] {
    return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured);
}

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}
