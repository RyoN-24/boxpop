"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const categoryColors: Record<string, { bg: string; hover: string }> = {
    secondary: { bg: "bg-secondary-light/40", hover: "hover:bg-secondary-light/60" },
    accent: { bg: "bg-accent-light/40", hover: "hover:bg-accent-light/60" },
    primary: { bg: "bg-primary-light/40", hover: "hover:bg-primary-light/60" },
    coral: { bg: "bg-coral/20", hover: "hover:bg-coral/30" },
};

export default function Categories() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Explora nuestras categorías
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Encuentra todo lo que necesitas para cada etapa de crecimiento de tu bebé
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category, index) => {
                        const colors = categoryColors[category.color] || categoryColors.primary;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={category.id === "boxpop" ? "/boxpop" : `/tienda?categoria=${category.id}`}
                                    className={`group block p-6 md:p-8 rounded-2xl ${colors.bg} ${colors.hover} transition-all duration-300`}
                                >
                                    {/* Icon */}
                                    <div className="text-4xl md:text-5xl mb-4">
                                        {category.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-heading text-lg md:text-xl font-semibold text-text-primary mb-1">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-text-secondary mb-4">
                                        {category.description}
                                    </p>

                                    {/* Link */}
                                    <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                                        Ver productos
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
