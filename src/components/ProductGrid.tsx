"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { getFeaturedProducts, Product } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductGridProps {
    products?: Product[];
    title?: string;
    subtitle?: string;
    showViewAll?: boolean;
}

export default function ProductGrid({
    products,
    title = "Productos Destacados",
    subtitle = "Selección de nuestros productos más queridos por las familias peruanas",
    showViewAll = true,
}: ProductGridProps) {
    const displayProducts = products || getFeaturedProducts();

    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
                >
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
                            {title}
                        </h2>
                        <p className="text-text-secondary max-w-xl">
                            {subtitle}
                        </p>
                    </div>

                    {showViewAll && (
                        <Link
                            href="/tienda"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Ver todo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    )}
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
