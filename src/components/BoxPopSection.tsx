"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gift, Check } from "lucide-react";
import { boxes, getFeaturedBoxes } from "@/data/boxes";
import { useCart } from "@/context/CartContext";

interface BoxPopSectionProps {
    showAll?: boolean;
}

export default function BoxPopSection({ showAll = false }: BoxPopSectionProps) {
    const { addItem } = useCart();
    const displayBoxes = showAll ? boxes : getFeaturedBoxes();

    const handleAddBox = (box: (typeof boxes)[0]) => {
        addItem({
            id: box.id,
            name: box.name,
            price: box.price,
            image: box.image,
            ageRange: box.ageRange,
        });
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-light/20 via-background to-primary-light/10">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral mb-4">
                        <Gift className="w-4 h-4" />
                        <span className="text-sm font-medium">Producto Exclusivo</span>
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Box Pop: Packs Curados
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Boxes especialmente diseñados para cada etapa del bebé.
                        Ahorra tiempo y dinero con nuestra selección experta.
                    </p>
                </motion.div>

                {/* Boxes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayBoxes.map((box, index) => (
                        <motion.div
                            key={box.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all"
                        >
                            {/* Badge */}
                            {box.badge && (
                                <div className="absolute top-4 left-4 z-10 badge badge-secondary">
                                    {box.badge}
                                </div>
                            )}

                            {/* Image */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-primary-light/30 via-secondary-light/30 to-accent-light/30 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    className="text-7xl"
                                >
                                    📦
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Age Range */}
                                <span className="text-xs font-semibold text-primary bg-primary-light/30 px-2 py-1 rounded-full">
                                    {box.ageRange}
                                </span>

                                {/* Name */}
                                <h3 className="font-heading text-xl font-bold text-text-primary mt-3 mb-2">
                                    {box.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                                    {box.description}
                                </p>

                                {/* Contents Preview */}
                                <div className="space-y-1 mb-4">
                                    {box.contents.slice(0, 3).map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                                            <Check className="w-3 h-3 text-accent-dark" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                    {box.contents.length > 3 && (
                                        <span className="text-xs text-primary font-medium">
                                            +{box.contents.length - 3} productos más
                                        </span>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="font-bold text-2xl text-text-primary">
                                        S/ {box.price.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-text-muted line-through">
                                        S/ {box.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-xs font-semibold text-accent-dark bg-accent-light/50 px-2 py-0.5 rounded-full">
                                        Ahorras S/ {box.savings}
                                    </span>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => handleAddBox(box)}
                                    className="w-full btn btn-primary text-sm"
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                {!showAll && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <Link
                            href="/boxpop"
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            Ver todos los Box Pop
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
