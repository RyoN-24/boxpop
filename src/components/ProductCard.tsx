"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            ageRange: product.ageRange,
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group card"
        >
            {/* Image Container */}
            <div className="relative aspect-square bg-gradient-to-br from-primary-light/20 via-secondary-light/20 to-accent-light/20 overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-60">
                        {product.category === "ropa" && "👶"}
                        {product.category === "juguetes" && "🧸"}
                        {product.category === "panialeras" && "🎒"}
                        {product.category === "boxpop" && "📦"}
                    </span>
                </div>

                {/* Badge */}
                {product.badge && (
                    <div className="absolute top-3 left-3 badge badge-secondary">
                        {product.badge}
                    </div>
                )}

                {/* Quick Add Button */}
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-3 bg-primary text-white rounded-xl shadow-lg"
                    onClick={handleAddToCart}
                    aria-label="Agregar al carrito"
                >
                    <ShoppingBag className="w-5 h-5" />
                </motion.button>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Age Range */}
                <span className="text-xs font-medium text-primary bg-primary-light/30 px-2 py-1 rounded-full">
                    {product.ageRange}
                </span>

                {/* Name */}
                <h3 className="font-heading font-semibold text-text-primary mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-lg text-text-primary">
                        S/ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-text-muted line-through">
                            S/ {product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="w-full mt-4 btn btn-secondary text-sm py-2.5"
                >
                    <ShoppingBag className="w-4 h-4" />
                    Agregar
                </button>
            </div>
        </motion.div>
    );
}
