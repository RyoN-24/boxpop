export interface BoxPop {
    id: string;
    name: string;
    ageRange: string;
    description: string;
    contents: string[];
    price: number;
    originalPrice: number;
    savings: number;
    image: string;
    featured?: boolean;
    badge?: string;
}

export const boxes: BoxPop[] = [
    {
        id: "box-recien-nacido",
        name: "Box Recién Nacido",
        ageRange: "0-3 meses",
        description: "Todo lo esencial para los primeros días de tu bebé. Productos cuidadosamente seleccionados para esta etapa única.",
        contents: [
            "3 Bodys de algodón orgánico",
            "2 Gorros suaves",
            "1 Manta de algodón",
            "1 Libro de tela sensorial",
            "1 Mordedor de silicona"
        ],
        price: 199.90,
        originalPrice: 259.90,
        savings: 60,
        image: "/images/boxes/box-recien-nacido.jpg",
        featured: true,
        badge: "Más Popular"
    },
    {
        id: "box-explorador",
        name: "Box Pequeño Explorador",
        ageRange: "3-6 meses",
        description: "Para bebés que empiezan a descubrir el mundo. Estimulación sensorial y diversión garantizada.",
        contents: [
            "1 Gimnasio de actividades mini",
            "3 Juguetes sensoriales",
            "2 Conjuntos de ropa",
            "1 Sonajero de madera",
            "1 Espejo de seguridad"
        ],
        price: 249.90,
        originalPrice: 329.90,
        savings: 80,
        image: "/images/boxes/box-explorador.jpg",
        featured: true,
    },
    {
        id: "box-aventurero",
        name: "Box Aventurero",
        ageRange: "6-12 meses",
        description: "Para bebés activos que ya gatean y exploran. Juguetes que fomentan el movimiento y la curiosidad.",
        contents: [
            "1 Torre de aros de madera",
            "1 Set de bloques apilables",
            "2 Libros interactivos",
            "1 Pelota sensorial",
            "1 Conjunto ropa cómoda"
        ],
        price: 229.90,
        originalPrice: 299.90,
        savings: 70,
        image: "/images/boxes/box-aventurero.jpg",
    },
    {
        id: "box-creciendo",
        name: "Box Creciendo Juntos",
        ageRange: "1-2 años",
        description: "Para pequeños que dan sus primeros pasos. Productos que acompañan su desarrollo motor y cognitivo.",
        contents: [
            "1 Set de bloques de construcción",
            "1 Puzle de madera",
            "2 Libros con texturas",
            "1 Instrumento musical",
            "1 Conjunto de ropa"
        ],
        price: 219.90,
        originalPrice: 289.90,
        savings: 70,
        image: "/images/boxes/box-creciendo.jpg",
    },
];

export function getBoxById(id: string): BoxPop | undefined {
    return boxes.find((b) => b.id === id);
}

export function getFeaturedBoxes(): BoxPop[] {
    return boxes.filter((b) => b.featured);
}
